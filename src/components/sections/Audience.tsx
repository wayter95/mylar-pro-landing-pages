"use client";

import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { Building, Landmark, UserRound } from "lucide-react";

const audiences = [
  {
    icon: Building,
    title: "Imobiliárias",
    description:
      "Gerencie carteira de locação e venda com CRM, cobranças e contratos em um só lugar. Elimine retrabalho e tenha controle total da operação.",
    highlights: ["CRM completo", "Cobranças automatizadas", "Portal do cliente"],
  },
  {
    icon: Landmark,
    title: "Incorporadoras",
    description:
      "Controle empreendimentos, tabelas de preço e comissões de equipe com visibilidade total. Do lançamento ao pós-venda, tudo integrado.",
    highlights: [
      "Gestão de empreendimentos",
      "Tabelas de preço",
      "Comissões por corretor",
    ],
  },
  {
    icon: UserRound,
    title: "Corretores Autônomos",
    description:
      "CRM pessoal, catálogo próprio e assinatura eletrônica — sem pagar por 10 sistemas. Profissionalize sua operação a um custo acessível.",
    highlights: ["Catálogo próprio", "Assinatura digital", "CRM pessoal"],
  },
];

export function Audience() {
  const sectionRef = useScrollAnimate();

  return (
    <section
      ref={sectionRef}
      className="border-t border-zinc-800/50 bg-zinc-900/30 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 scroll-animate">
          <span className="inline-block text-sm font-medium text-[#3AB8D6] mb-3 uppercase tracking-wider">
            Para quem
          </span>
          <h2 className="text-2xl font-bold md:text-4xl">
            Feito para quem vive o mercado imobiliário
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((item, i) => (
            <div
              key={item.title}
              className={`scroll-animate stagger-${i + 1} group rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6 md:p-8 hover:border-[#3AB8D6]/30 transition-colors`}
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#3AB8D6]/15 to-[#067EFB]/15 text-[#3AB8D6] group-hover:from-[#3AB8D6]/25 group-hover:to-[#067EFB]/25 transition-colors">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-block rounded-full bg-zinc-800/80 px-3 py-1 text-xs text-zinc-300"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
