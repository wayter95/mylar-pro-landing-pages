"use client";

import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { FileSpreadsheet, CreditCard, MessagesSquare } from "lucide-react";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Contratos no Word, assinatura no papel e controle no Excel",
    description:
      "Cada etapa em uma ferramenta diferente. Informação duplicada, versões desatualizadas e risco de erro humano em cada passo.",
  },
  {
    icon: CreditCard,
    title: "Cobranças manuais, sem reajuste automático e sem integração bancária",
    description:
      "Gerar boleto em um sistema, acompanhar pagamento em outro, calcular reajuste na mão. Tempo perdido todo mês.",
  },
  {
    icon: MessagesSquare,
    title: "Dados espalhados entre WhatsApp, e-mail e 3 sistemas diferentes",
    description:
      "Informação do cliente em um lugar, do imóvel em outro, do contrato em outro. Ninguém tem visão completa.",
  },
];

export function Problem() {
  const sectionRef = useScrollAnimate();

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-zinc-800/50 py-16 md:py-24 overflow-hidden"
    >
      {/* Subtle brand accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3AB8D6]/5 via-[#067EFB]/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 scroll-animate">
          <span className="inline-block text-sm font-medium text-[#3AB8D6] mb-3 uppercase tracking-wider">
            O problema
          </span>
          <h2 className="text-2xl font-bold md:text-4xl">
            Você reconhece algum desses cenários?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((item, i) => (
            <div
              key={item.title}
              className={`scroll-animate stagger-${i + 1} rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 md:p-8`}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#3AB8D6]/10 text-[#3AB8D6]">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="scroll-animate mt-10 text-center text-lg font-medium text-zinc-300">
          Se você trabalha assim, está perdendo{" "}
          <span className="text-[#3AB8D6]">tempo</span>,{" "}
          <span className="text-[#3AB8D6]">dinheiro</span> e{" "}
          <span className="text-[#3AB8D6]">clientes</span>.
        </p>
      </div>
    </section>
  );
}
