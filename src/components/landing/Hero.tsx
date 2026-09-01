"use client";

import { CalendarClock, Check, ShieldCheck } from "lucide-react";
import { DemoForm } from "./DemoForm";

const SEALS = [
  "20 minutos, na sua operação",
  "Configuramos a distribuição ao vivo",
  "Sem apresentação institucional",
];

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_460px] lg:gap-16 lg:items-start">
        <div className="space-y-8 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#3AB8D6]/30 bg-linear-to-r from-[#3AB8D6]/20 to-[#067EFB]/20 px-4 py-1.5 text-sm font-medium text-[#3AB8D6]">
            <CalendarClock className="h-4 w-4" />
            Demonstração guiada · 20 minutos
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-[3.4rem]">
            O lead que caiu às 2h de sábado{" "}
            <span className="gradient-text">ficou sem resposta até segunda</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
            Venda ou aluguel, fora do horário comercial a IA conversa e
            qualifica o lead novo. Quando já existe o que atribuir,{" "}
            <strong className="font-semibold text-zinc-100">
              o rodízio acorda o corretor certo
            </strong>{" "}
            — com registro de quem ficou com o lead. Veja funcionando na sua
            operação.
          </p>

          <ul className="flex flex-wrap gap-3">
            {SEALS.map((seal) => (
              <li
                key={seal}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-400"
              >
                <Check className="h-4 w-4 shrink-0 text-[#3AB8D6]" />
                {seal}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="animate-fade-in-up lg:sticky lg:top-8"
          style={{ animationDelay: "0.2s" }}
          id="agendar"
        >
          <div className="rounded-2xl border border-[#3AB8D6]/25 bg-zinc-900/70 p-6 shadow-xl shadow-black/50 backdrop-blur-sm sm:p-7">
            <h2 className="text-xl font-bold tracking-tight text-white">
              Agende os 20 minutos
            </h2>
            <p className="mt-1.5 mb-6 text-sm text-zinc-400">
              A gente já chega sabendo como a sua imobiliária trabalha.
            </p>
            <DemoForm variant="hero" />
            <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-zinc-800 pt-4 text-xs text-zinc-500">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-zinc-600" />
                Dados protegidos
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-zinc-600" />
                Sem cartão, sem compromisso
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-zinc-600" />
                LGPD
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
