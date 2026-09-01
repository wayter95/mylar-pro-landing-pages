"use client";

import {
  Bot,
  History,
  MessageSquareHeart,
  Route,
  Smartphone,
  Timer,
  Waypoints,
} from "lucide-react";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const CAPS = [
  {
    icon: Waypoints,
    tag: "01 · DISTRIBUIÇÃO",
    title: "Regra configurável",
    body: "Round-robin ou menos ocupado, com regra separada para venda e para locação.",
  },
  {
    icon: Timer,
    tag: "02 · REDISTRIBUIÇÃO",
    title: "Timer de resposta",
    body: "Redistribui o lead automaticamente quando o corretor não pega a tempo.",
  },
  {
    icon: History,
    tag: "03 · HISTÓRICO",
    title: "Atribuição rastreada",
    body: "Data, hora e responsável em cada etapa, sem reconstruir pela memória.",
  },
  {
    icon: Bot,
    tag: "04 · IA · LEAD",
    title: "Pré-atendimento",
    body: "Fora do horário comercial: conversa, qualifica, só então entrega.",
  },
  {
    icon: MessageSquareHeart,
    tag: "05 · IA · CLIENTE",
    title: "Atendimento ativo",
    body: "Com os dados da própria carteira: proposta, contrato, imóvel.",
  },
  {
    icon: Route,
    tag: "06 · ORIGEM",
    title: "Rastreio completo",
    body: "Do portal até a venda ou o contrato assinado, para saber qual canal paga.",
  },
  {
    icon: Smartphone,
    tag: "07 · BROKERS",
    title: "App do corretor",
    body: "Agenda, visitas e clientes no celular, onde o follow-up acontece.",
  },
];

export function Capabilities() {
  const ref = useScrollAnimate<HTMLElement>();

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="scroll-animate mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          O que entra junto
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          Tudo no mesmo sistema onde a venda e a locação já vivem.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CAPS.map((cap, index) => (
          <div
            key={cap.tag}
            className={`feature-card scroll-animate stagger-${(index % 3) + 1} rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6`}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3AB8D6]/25 bg-[#3AB8D6]/10">
                <cap.icon className="h-5 w-5 text-[#3AB8D6]" />
              </span>
              <span className="font-mono text-[11px] tracking-widest text-zinc-500">
                {cap.tag}
              </span>
            </div>
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
