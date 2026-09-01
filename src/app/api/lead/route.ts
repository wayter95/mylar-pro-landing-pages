import { NextRequest, NextResponse } from "next/server";
import { sendLeadEvent } from "@/lib/meta-conversion-api";
import { getFormUrl, toCognizyPayload } from "@/lib/cognizy";

type SubmissionBody = {
  Nome?: string;
  Email?: string;
  Telefone?: string;
  Atuacao?: string;
  VolumeVendas?: string;
  CarteiraLocacao?: string;
  TamanhoTime?: string;
  Imobiliaria?: string;
  Contexto?: string;
  Origem?: string;
  attribution?: Record<string, string>;
};

const REQUIRED_FIELDS: Array<keyof SubmissionBody> = [
  "Nome",
  "Email",
  "Telefone",
  "Atuacao",
];

function isFilled(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function getEventSourceUrl(request: NextRequest): string | undefined {
  const referer = request.headers.get("referer");
  if (referer) return referer;
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  if (base) return base.replace(/\/$/, "");
  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`;
  return undefined;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as SubmissionBody;

    const missing = REQUIRED_FIELDS.filter((field) => !isFilled(body[field]));
    if (missing.length > 0) {
      return NextResponse.json(
        { error: "Preencha todos os campos obrigatórios." },
        { status: 400 },
      );
    }

    const email = body.Email!.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Informe um email válido." },
        { status: 400 },
      );
    }

    const phoneDigits = (body.Telefone ?? "").replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      return NextResponse.json(
        { error: "Informe o WhatsApp com DDD." },
        { status: 400 },
      );
    }

    const atuacao = body.Atuacao!.toLowerCase();
    const worksWithSales = atuacao.includes("venda");
    const worksWithRentals = atuacao.includes("aluguel");
    const worksWithSeasonal = atuacao.includes("temporada");

    if (!worksWithSales && !worksWithRentals && !worksWithSeasonal) {
      return NextResponse.json(
        { error: "Informe se você trabalha com venda, aluguel ou temporada." },
        { status: 400 },
      );
    }

    if (
      worksWithSales &&
      body.VolumeVendas !== undefined &&
      !isFilled(body.VolumeVendas)
    ) {
      return NextResponse.json(
        { error: "Informe o volume de vendas por mês." },
        { status: 400 },
      );
    }

    if (
      worksWithRentals &&
      body.CarteiraLocacao !== undefined &&
      !isFilled(body.CarteiraLocacao)
    ) {
      return NextResponse.json(
        { error: "Informe o tamanho da carteira de locação." },
        { status: 400 },
      );
    }

    const lead = {
      Nome: body.Nome,
      Email: email,
      Telefone: body.Telefone,
      Imobiliaria: body.Imobiliaria,
      Contexto: body.Contexto,
      Origem: body.Origem,
      Atuacao: body.Atuacao,
      VolumeVendas: body.VolumeVendas,
      CarteiraLocacao: body.CarteiraLocacao,
      TamanhoTime: body.TamanhoTime,
      attribution: body.attribution,
    };

    const formUrl = getFormUrl(body.Origem);
    let delivered = false;

    if (formUrl) {
      try {
        const res = await fetch(formUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(toCognizyPayload(lead)),
          signal: AbortSignal.timeout(10000),
        });

        if (res.ok) {
          delivered = true;
        } else {
          const text = await res.text();
          console.error("[Lead proxy] Cognizy recusou:", res.status, text);
        }
      } catch (err) {
        console.error("[Lead proxy] Cognizy inacessível:", err);
      }
    }

    if (!delivered) {
      console.error(
        "[Lead proxy] LEAD NÃO ENTREGUE — registrado no log para recuperação manual:",
        JSON.stringify(lead),
      );
    }

    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const accessToken = process.env.META_CONVERSION_API_ACCESS_TOKEN;

    if (pixelId && accessToken) {
      const result = await sendLeadEvent(pixelId, accessToken, {
        email,
        phone: body.Telefone,
        eventSourceUrl: getEventSourceUrl(request),
        eventId: `lead-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`,
      });
      if (!result.success) {
        console.error("[Meta Conversion API]", result.error);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Lead proxy] Erro de conexão:", err);
    return NextResponse.json({ error: "Erro ao processar" }, { status: 500 });
  }
}
