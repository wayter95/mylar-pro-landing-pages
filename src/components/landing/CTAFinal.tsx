"use client";

import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { DemoForm } from "./DemoForm";

export function CTAFinal() {
  const ref = useScrollAnimate<HTMLElement>();

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="scroll-animate-scale grid gap-10 rounded-3xl border border-[#3AB8D6]/25 bg-linear-to-br from-zinc-900 to-zinc-950 px-6 py-12 shadow-2xl shadow-black/50 sm:px-10 lg:grid-cols-[1fr_420px] lg:items-center lg:gap-14 lg:px-12">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            De quem é a vez?{" "}
            <span className="gradient-text">O histórico responde</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
            20 minutos para ver a distribuição configurada do jeito que a sua
            imobiliária trabalha, e o caminho completo de um lead, da entrada ao
            corretor certo.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
          <DemoForm variant="cta" />
        </div>
      </div>
    </section>
  );
}
