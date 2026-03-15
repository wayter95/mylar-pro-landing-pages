"use client";

import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { FlowForm } from "@/components/FlowForm";

export function CTAFinal() {
  const sectionRef = useScrollAnimate();

  return (
    <section
      ref={sectionRef}
      className="border-t border-zinc-800/50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-xl px-6 text-center">
        <div className="scroll-animate">
          <h2 className="text-2xl font-bold md:text-4xl mb-4">
            Garanta seu cupom exclusivo de lançamento
          </h2>
          <p className="text-zinc-400 mb-8">
            Preencha abaixo e receba um cupom de desconto no seu e-mail — válido
            apenas para quem entrar na lista de espera.
          </p>
        </div>
        <div className="scroll-animate-scale rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8 text-left shadow-xl pulse-glow">
          <FlowForm variant="cta" />
        </div>
      </div>
    </section>
  );
}
