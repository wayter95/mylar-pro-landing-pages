"use client";

import Link from "next/link";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const STEPS = [
  {
    tag: "01 · ENTRADA",
    title: "Lead chega",
    body: "De venda ou de aluguel, pelo portal, WhatsApp ou site. Origem registrada desde o primeiro contato.",
    color: "#067EFB",
  },
  {
    tag: "02 · IA",
    title: "Pré-atendimento",
    body: "Fora do horário comercial, o agente conversa e qualifica — não um “retornaremos em breve”.",
    color: "#1B85AF",
  },
  {
    tag: "03 · RODÍZIO",
    title: "Distribuição",
    body: "Round-robin ou menos ocupado, com regra própria por tipo de negócio — não a do fornecedor.",
    color: "#3AB8D6",
  },
  {
    tag: "04 · TIMER",
    title: "Se não responder",
    body: "O lead é redistribuído sozinho quando o corretor não pega a tempo. Ninguém precisa perceber.",
    color: "#4CC6C6",
  },
  {
    tag: "05 · HISTÓRICO",
    title: "Registro completo",
    body: "Quem recebeu, quando, quem respondeu. A comissão vira consulta, não discussão.",
    color: "#6FE1AB",
  },
];

export function Flow() {
  const ref = useScrollAnimate<HTMLElement>();

  return (
    <section
      ref={ref}
      id="como-funciona"
      className="border-t border-zinc-800/60 bg-zinc-900/20"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="scroll-animate mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            A IA fala primeiro.{" "}
            <span className="gradient-text">O rodízio entrega depois</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Para o corretor certo, com registro de cada passo.
          </p>
        </div>

        <ol className="grid gap-3 lg:grid-cols-5">
          {STEPS.map((step, index) => (
            <li
              key={step.tag}
              className={`scroll-animate stagger-${index + 1} rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5`}
              style={{ borderTopColor: step.color, borderTopWidth: 3 }}
            >
              <span
                className="mb-3 block font-mono text-[11px] tracking-widest"
                style={{ color: step.color }}
              >
                {step.tag}
              </span>
              <h3 className="mb-2 text-base font-bold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="scroll-animate mt-8 rounded-r-2xl border-l-[3px] border-[#3AB8D6] bg-zinc-900/60 px-6 py-5">
          <p className="text-[15px] leading-relaxed text-zinc-400">
            <strong className="font-semibold text-zinc-100">
              E o cliente que já é da casa?
            </strong>{" "}
            Comprador ou inquilino, fala com um agente que conhece a proposta, o
            contrato e o imóvel dele — porque está no mesmo sistema onde a
            comissão e o repasse são gerados. Duas camadas de IA, um sistema só.
          </p>
        </div>

        <div className="scroll-animate mt-10 text-center">
          <Link
            href="#agendar"
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#3AB8D6] to-[#067EFB] px-8 py-4 font-semibold text-white shadow-lg shadow-[#067EFB]/25 transition-all hover:shadow-[#067EFB]/40 hover:brightness-110"
          >
            Quero ver o rodízio funcionando
          </Link>
        </div>
      </div>
    </section>
  );
}
