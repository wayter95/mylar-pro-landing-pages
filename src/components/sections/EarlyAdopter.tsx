"use client";

import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { Zap, Percent, Headphones, MessageSquareHeart } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Acesso antecipado",
    description: "Use a plataforma antes do lançamento público.",
  },
  {
    icon: Percent,
    title: "Cupom de desconto",
    description: "Receba um cupom exclusivo de lançamento direto no seu e-mail.",
  },
  {
    icon: Headphones,
    title: "Onboarding guiado",
    description: "Configuração assistida com nosso time de suporte.",
  },
  {
    icon: MessageSquareHeart,
    title: "Influência no roadmap",
    description: "Sua opinião molda as próximas funcionalidades.",
  },
];

export function EarlyAdopter() {
  const sectionRef = useScrollAnimate();

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-zinc-800/50 bg-zinc-900/30 py-16 md:py-24 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3AB8D6]/3 to-[#067EFB]/3 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 scroll-animate">
          <span className="inline-block text-sm font-medium text-[#3AB8D6] mb-3 uppercase tracking-wider">
            Early Adopter
          </span>
          <h2 className="text-2xl font-bold md:text-4xl mb-4">
            Entre na lista e garanta seu cupom de desconto
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Quem se cadastrar na lista de espera recebe um cupom exclusivo de
            lançamento — válido apenas para os primeiros inscritos.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, i) => (
            <div
              key={item.title}
              className={`scroll-animate stagger-${i + 1} rounded-2xl border border-[#3AB8D6]/10 bg-zinc-950/60 p-6 text-center hover:border-[#3AB8D6]/30 transition-colors`}
            >
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#3AB8D6]/10 text-[#3AB8D6]">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Urgency badge */}
        <div className="scroll-animate mt-10 flex justify-center">
          <div className="count-pulse inline-flex items-center gap-3 rounded-full border border-[#3AB8D6]/30 bg-[#3AB8D6]/10 px-6 py-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3AB8D6] opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#3AB8D6]" />
            </span>
            <span className="text-sm font-semibold text-[#3AB8D6]">
              Vagas limitadas para early adopters
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
