"use client";

import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import {
  LayoutDashboard,
  FileSignature,
  Receipt,
  Globe,
  Users,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "CRM & Pipeline",
    subtitle: "Funil visual de vendas e locações",
    description:
      "Acompanhe cada negociação no Kanban. Leads, propostas e fechamento em um fluxo claro — com histórico completo de interações.",
  },
  {
    icon: FileSignature,
    title: "Assinatura Eletrônica",
    subtitle: "Contratos assinados em minutos",
    description:
      "Assinatura digital com validade jurídica (Lei 14.063). Sem papel, sem scanner, sem depender de plataformas externas.",
  },
  {
    icon: Receipt,
    title: "Cobrança Integrada",
    subtitle: "Boleto, PIX e reajuste automático",
    description:
      "Gere cobranças, acompanhe pagamentos e calcule reajuste por IGP-M, IPCA ou índice fixo. Repasses automáticos ao proprietário.",
  },
  {
    icon: Globe,
    title: "Portal de Imóveis",
    subtitle: "Catálogo online com busca por mapa",
    description:
      "Seus imóveis publicados automaticamente em um portal com seu domínio próprio. SEO otimizado para captar leads.",
  },
  {
    icon: Users,
    title: "Portal do Cliente",
    subtitle: "Autoatendimento para inquilinos e proprietários",
    description:
      "Faturas, contratos, chamados e manutenção — tudo acessível pelo portal. Menos ligações, mais agilidade.",
  },
  {
    icon: Building2,
    title: "Empreendimentos",
    subtitle: "Para incorporadoras e loteadoras",
    description:
      "Torres, quadras, unidades, tabelas de preço e comissões por corretor — tudo mapeado em uma interface visual.",
  },
];

export function Features() {
  const sectionRef = useScrollAnimate();

  return (
    <section
      ref={sectionRef}
      className="border-t border-zinc-800/50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 scroll-animate">
          <span className="inline-block text-sm font-medium text-[#3AB8D6] mb-3 uppercase tracking-wider">
            Funcionalidades
          </span>
          <h2 className="text-2xl font-bold md:text-4xl mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Cada módulo foi pensado para resolver problemas reais do dia a dia
            de quem trabalha com imóveis.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`scroll-animate stagger-${i + 1} feature-card rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8`}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-[#3AB8D6]/15 to-[#067EFB]/15 text-[#3AB8D6]">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-sm font-medium text-[#3AB8D6]/80 mb-3">
                {feature.subtitle}
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
