import { NextRequest, NextResponse } from "next/server";
import { sendLeadEvent } from "@/lib/meta-conversion-api";

/**
 * Proxy que encaminha o formulário (Nome, Sobrenome, Email, Telefone) para o Flow.
 * Em caso de sucesso, envia evento Lead para a Meta Conversion API (se configurada).
 */
const FLOW_URL =
  process.env.FLOW_FORM_SUBMIT_URL ||
  "http://localhost:3000/api/forms/cmmrpyyes00045fzl8l1ma555/submit";

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
    const body = (await request.json()) as Record<string, string>;

    const res = await fetch(FLOW_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[Flow proxy] Erro:", res.status, text);
      return NextResponse.json(
        { error: "Erro ao enviar para o Flow" },
        { status: 502 },
      );
    }

    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const accessToken = process.env.META_CONVERSION_API_ACCESS_TOKEN;
    const email = body.Email;

    if (pixelId && accessToken && email) {
      const eventSourceUrl = getEventSourceUrl(request);
      const result = await sendLeadEvent(pixelId, accessToken, {
        email,
        phone: body.Telefone,
        eventSourceUrl,
        eventId: `lead-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`,
      });
      if (!result.success) {
        console.error("[Meta Conversion API]", result.error);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Flow proxy] Erro de conexão:", err);
    return NextResponse.json(
      { error: "Erro ao processar" },
      { status: 500 },
    );
  }
}
