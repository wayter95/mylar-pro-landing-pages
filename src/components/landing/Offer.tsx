"use client";

import { Check } from "lucide-react";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const ITEMS = [
  "Configuração da distribuição ao vivo: round-robin ou menos ocupado, com regra própria para venda e para locação",
  "Simulação de um lead de venda e de um de aluguel entrando às 2h: o que a IA pergunta e o que o corretor recebe de manhã",
  "Timer de resposta em ação, com a redistribuição acontecendo na tela",
  "Histórico de atribuição aberto: quem recebeu, quando, quem respondeu",
  "Os dois papéis da IA lado a lado: pré-atendimento e atendimento do cliente ativo",
  "Visão do MyLar Pro Brokers no celular: agenda, visitas e clientes do corretor",
  "Resposta direta sobre migração da sua base, no seu volume de vendas e de contratos",
];

export function Offer() {
  const ref = useScrollAnimate<HTMLElement>();

  return (
    <section ref={ref} className="mx-auto max-w-4xl px-6 py-20 md:py-24">
      <div className="scroll-animate mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          20 minutos, com a sua operação na tela
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          Não é apresentação institucional.
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
