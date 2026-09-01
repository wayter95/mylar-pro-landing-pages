"use client";

import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const PROOFS = [
  {
    body: "Régua de cobrança automática por WhatsApp e email: uma carteira de 420 imóveis saiu de 18% para 6% de inadimplência em 5 meses. É o mesmo sistema onde o lead entra e é distribuído.",
    source: "Caso de cliente MyLar Pro · operação de locação",
  },
  {
    body: "O ciclo financeiro fecha dentro da mesma plataforma, na venda e na locação: comissão do corretor registrada, repasse gerado com demonstrativo, conciliação com o extrato. DIMOB sai pronto no fim do ano.",
    source: "Módulos Financeiro e Cobranças · em produção",
  },
  {
    body: "O agente de IA responde com os dados da imobiliária — proposta, contrato, imóvel — porque roda dentro do sistema onde a venda e a locação acontecem.",
    source: "Módulo Atendimento com IA · em produção",
  },
];

export function Proof() {
  const ref = useScrollAnimate<HTMLElement>();

  return (
    <section
      ref={ref}
      className="border-y border-zinc-800/60 bg-zinc-900/20"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="scroll-animate mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            O que sustenta a conversa
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {PROOFS.map((proof, index) => (
            <figure
              key={proof.source}
              className={`scroll-animate stagger-${index + 1} flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6`}
            >
              <blockquote className="text-[15px] leading-relaxed text-zinc-300">
                {proof.body}
              </blockquote>
              <figcaption className="mt-5 font-mono text-[11px] tracking-wide text-zinc-500">
                {proof.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
