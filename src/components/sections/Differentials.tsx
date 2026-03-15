"use client";

import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { Blocks, MapPin, MonitorSmartphone, Rocket } from "lucide-react";

const differentials = [
  {
    icon: Blocks,
    title: "Tudo integrado",
    description:
      "CRM, financeiro, assinatura e catálogo sem integrações de terceiros. Um login, uma plataforma, zero dor de cabeça.",
  },
  {
    icon: MapPin,
    title: "Pensado para o Brasil",
    description:
      "Boleto, PIX, CNPJ, IGP-M, IPCA. Não é sistema gringo adaptado — foi construído do zero para o mercado brasileiro.",
  },
  {
    icon: MonitorSmartphone,
    title: "Portal do cliente incluso",
    description:
      "Inquilino e proprietário com acesso próprio para faturas, contratos, chamados e manutenção. Menos WhatsApp, mais autonomia.",
  },
  {
    icon: Rocket,
    title: "Tecnologia moderna",
    description:
      "Interface rápida e intuitiva, sem telas travadas ou sistemas legados. Atualizações constantes sem custo extra.",
  },
];

export function Differentials() {
  const sectionRef = useScrollAnimate();

  return (
    <section
      ref={sectionRef}
      className="border-t border-zinc-800/50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 scroll-animate">
          <span className="inline-block text-sm font-medium text-[#3AB8D6] mb-3 uppercase tracking-wider">
            Diferenciais
          </span>
          <h2 className="text-2xl font-bold md:text-4xl">
            Por que o Mylar Pro é diferente
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, i) => (
            <div
              key={item.title}
              className={`scroll-animate stagger-${i + 1} text-center p-6`}
            >
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#3AB8D6]/15 to-[#067EFB]/15 text-[#3AB8D6]">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
