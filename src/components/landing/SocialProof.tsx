"use client";

import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const STATS = [
  {
    value: "18% → 6%",
    label: "inadimplência em 5 meses",
    detail: "caso de locação, carteira de 420 imóveis",
  },
  {
    value: "2",
    label: "papéis da IA",
    detail: "pré-atendimento do lead e atendimento do cliente",
  },
  {
    value: "20 min",
    label: "é o que custa ver o rodízio",
    detail: "rodando na sua operação",
  },
];

export function SocialProof() {
  const ref = useScrollAnimate<HTMLDivElement>();

  return (
    <section className="border-y border-zinc-800/60 bg-zinc-900/40">
      <div ref={ref} className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {STATS.map((stat, index) => (
            <div
              key={stat.value}
              className={`scroll-animate stagger-${index + 1} text-center`}
            >
              <span className="block text-3xl font-extrabold tracking-tight text-[#3AB8D6] tabular-nums">
                {stat.value}
              </span>
              <p className="mt-2 text-sm font-medium text-zinc-300">
                {stat.label}
              </p>
              <p className="mt-0.5 text-sm text-zinc-500">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
