"use client";

import { Check } from "lucide-react";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const ITEMS = [
  "Vídeo de 2 minutos com o fluxo completo do lead, gravado na tela do sistema.",
  "O passo do pré-atendimento fora do horário comercial, com as perguntas que a IA faz.",
  "O rodízio e o timer de redistribuição funcionando, com o corretor que não respondeu.",
  "O histórico de atribuição: quem recebeu, quando, quem respondeu.",
  "A notificação chegando no MyLar Pro Brokers.",
  "Sem formulário para assistir e sem convite para agendar.",
];

export function Offer() {
  const ref = useScrollAnimate<HTMLElement>();

  return (
    <section ref={ref} className="mx-auto max-w-4xl px-6 py-20 md:py-24">
      <div className="scroll-animate mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Vídeo de 2 minutos,{" "}
          <span className="gradient-text">página aberta</span>
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-zinc-400">
          Você vê a tela, não o slide. O vídeo acompanha um lead do começo ao
          fim: entra pelo portal às 23h40, o agente de IA faz o pré-atendimento,
          o rodízio distribui, o corretor da vez não responde, o timer
          redistribui, o histórico registra e a notificação chega no app. Se
          depois disso quiser falar com a gente, você chama.
        </p>
      </div>

      <ul className="grid gap-3">
        {ITEMS.map((item, index) => (
          <li
            key={item}
            className={`scroll-animate stagger-${(index % 3) + 1} flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4`}
          >
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
            <span className="text-[15px] leading-relaxed text-zinc-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
