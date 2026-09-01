"use client";

import {
  Bell,
  History,
  Inbox,
  MessageSquare,
  Timer,
  Waypoints,
} from "lucide-react";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const CAPABILITIES = [
  {
    icon: Inbox,
    title: "Entrada única",
    body: "Portal e WhatsApp caem na mesma fila, com a origem do lead registrada.",
  },
  {
    icon: MessageSquare,
    title: "Pré-atendimento",
    body: "Fora do horário comercial, com os dados da carteira da imobiliária.",
  },
  {
    icon: Waypoints,
    title: "Rodízio",
    body: "A vez de cada corretor definida antes de o lead chegar.",
  },
  {
    icon: Timer,
    title: "Timer",
    body: "Redistribui quando o corretor da vez não responde.",
  },
  {
    icon: History,
    title: "Histórico de atribuição",
    body: "Resolve comissão com registro, não com memória.",
  },
  {
    icon: Bell,
    title: "Notificação no app",
    body: "Chega no celular do corretor, com a conversa já feita.",
  },
];

export function Solution() {
  const ref = useScrollAnimate<HTMLElement>();

  return (
    <section ref={ref} className="mx-auto max-w-5xl px-6 py-20 md:py-24">
      <div className="scroll-animate mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Uma fila só, que se distribui sozinha{" "}
          <span className="gradient-text">e registra quem atendeu</span>
        </h2>
      </div>

      <div className="scroll-animate mx-auto mb-12 max-w-3xl space-y-5 text-[17px] leading-relaxed text-zinc-400">
        <p>
          O lead entra pelo portal ou pelo WhatsApp e cai numa fila só. O agente
          de IA da imobiliária faz o pré-atendimento na hora, 23h40 de sábado
          inclusive, e pergunta o que o corretor perguntaria: se é venda ou
          aluguel, bairro, faixa de preço, quando quer visitar.
        </p>
        <p>
          O rodízio manda para o corretor da vez. Se ninguém responde dentro do
          prazo, o timer passa para o próximo, e o histórico de atribuição guarda
          cada passo: quem recebeu, quando, quem respondeu. A notificação chega
          no MyLar Pro Brokers, no celular do corretor, com a conversa já
          anexada.
        </p>
        <p className="text-zinc-300">
          Quem fecha o negócio continua a ser gente. O que sai da mesa é a espera
          e a discussão sobre de quem era a vez.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((cap, index) => (
          <div
            key={cap.title}
            className={`feature-card scroll-animate stagger-${(index % 3) + 1} rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6`}
          >
            <cap.icon className="mb-4 h-6 w-6 text-[#3AB8D6]" />
            <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
              {cap.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-zinc-400">
              {cap.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
