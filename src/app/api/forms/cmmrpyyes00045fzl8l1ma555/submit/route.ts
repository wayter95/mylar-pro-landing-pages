import { NextRequest, NextResponse } from "next/server";

/**
 * Proxy que encaminha o formulário (Nome, Sobrenome, Email, Telefone) para o Flow.
 * Configure FLOW_FORM_SUBMIT_URL no .env.local para a URL deste form:
 * - Desenvolvimento: http://localhost:3000/api/forms/cmmrpyyes00045fzl8l1ma555/submit
 * - Produção: https://seu-flow.com/api/forms/cmmrpyyes00045fzl8l1ma555/submit
 */
const FLOW_URL =
  process.env.FLOW_FORM_SUBMIT_URL ||
  "http://localhost:3000/api/forms/cmmrpyyes00045fzl8l1ma555/submit";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

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

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Flow proxy] Erro de conexão:", err);
    return NextResponse.json(
      { error: "Erro ao processar" },
      { status: 500 },
    );
  }
}
