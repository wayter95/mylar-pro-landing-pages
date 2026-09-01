"use client";

import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const PAINS = [
  "Lead entra pelo portal às 23h40 de sábado e a primeira resposta sai segunda de manhã, quando ele já visitou imóvel com outra imobiliária.",
  "Contratar plantão de WhatsApp para cobrir madrugada e fim de semana não fecha a conta.",
  "Chega o lead e ninguém sabe de quem é a vez: dois corretores atendem o mesmo cliente e os dois cobram comissão.",
  "Ou não atende ninguém, e o lead fica parado no WhatsApp esperando alguém lembrar dele.",
  "O corretor esquece o follow-up, o lead esfria e ninguém percebe. Quem agendou visita e não fechou some do radar.",
  "Ninguém registra a origem do lead, então também não se sabe qual portal paga e qual só gera trabalho.",
];

export function Pain() {
  const ref = useScrollAnimate<HTMLElement>();

  return (
    <section
      ref={ref}
      className="border-t border-zinc-800/60 bg-zinc-900/20"
    >
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <h2 className="scroll-animate mx-auto mb-10 max-w-2xl text-center text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Fora do horário comercial,{" "}
          <span className="gradient-text">a carteira fica sem ninguém</span>
        </h2>

        <ul className="grid gap-3">
          {PAINS.map((pain, index) => (
            <li
              key={pain}
              className={`scroll-animate stagger-${(index % 3) + 1} flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4`}
            >
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3AB8D6]"
              />
              <span className="text-[15px] leading-relaxed text-zinc-400">
                {pain}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
