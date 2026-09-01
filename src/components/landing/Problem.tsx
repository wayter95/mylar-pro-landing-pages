"use client";

import {
  AlertTriangle,
  ClipboardX,
  MoonStar,
  Table2,
  Users,
} from "lucide-react";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const LEAKS = [
  {
    icon: Users,
    title: "De quem é a vez?",
    body: "Lead de venda ou de aluguel chega pelo portal e ninguém sabe de quem é. Ou dois corretores atendem o mesmo e os dois cobram comissão, ou não atende ninguém.",
  },
  {
    icon: MoonStar,
    title: "Madrugada e fim de semana",
    body: "Justo quando chega pedido de visita de fim de semana, o lead espera até segunda. Contratar plantão para responder WhatsApp fora do horário não fecha a conta.",
  },
  {
    icon: AlertTriangle,
    title: "O follow-up esquecido",
    body: "O corretor esquece e o lead esfria sem ninguém perceber. Quem agendou visita e não fechou some do radar.",
  },
  {
    icon: ClipboardX,
    title: "Origem não registrada",
    body: "No fim do mês não dá para dizer qual portal paga, quantos leads viraram visita nem quantos fecharam venda ou contrato.",
  },
  {
    icon: Table2,
    title: "E o financeiro em outra aba",
    body: "Comissão de venda conferida na planilha, repasse de aluguel no olho, e o proprietário ligando para perguntar do dinheiro dele.",
  },
];

export function Problem() {
  const ref = useScrollAnimate<HTMLElement>();

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="scroll-animate mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          O comercial da imobiliária{" "}
          <span className="gradient-text">vaza em três pontos</span>
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          E todos custam dinheiro que já foi pago para captar o lead.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LEAKS.map((leak, index) => (
          <div
            key={leak.title}
            className={`feature-card scroll-animate stagger-${(index % 3) + 1} rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6`}
          >
            <leak.icon className="mb-4 h-6 w-6 text-[#3AB8D6]" />
            <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
              {leak.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-zinc-400">
              {leak.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
