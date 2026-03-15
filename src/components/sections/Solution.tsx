"use client";

import Image from "next/image";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { ArrowRight } from "lucide-react";

export function Solution() {
  const sectionRef = useScrollAnimate();

  return (
    <section
      ref={sectionRef}
      className="border-t border-zinc-800/50 bg-zinc-900/30 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="scroll-animate-left">
            <span className="inline-block text-sm font-medium text-[#3AB8D6] mb-3 uppercase tracking-wider">
              A solução
            </span>
            <h2 className="text-2xl font-bold md:text-4xl mb-6">
              Conheça o{" "}
              <span className="gradient-text">Mylar Pro</span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              Uma plataforma completa de gestão imobiliária que substitui 5+
              ferramentas por uma só. Do primeiro contato com o lead até o
              repasse financeiro ao proprietário — tudo em um fluxo integrado.
            </p>
            <ul className="space-y-3">
              {[
                "CRM com pipeline visual (Kanban)",
                "Assinatura eletrônica com validade jurídica",
                "Cobranças com boleto, PIX e reajuste automático",
                "Portal público de imóveis com busca por mapa",
                "Portal do cliente com autoatendimento",
                "Gestão de empreendimentos para incorporadoras",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-zinc-300"
                >
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#3AB8D6]" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="scroll-animate-right">
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-2 shadow-2xl shadow-black/50 overflow-hidden">
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-[#3AB8D6]/10 to-[#067EFB]/10 blur-xl opacity-60" />
              <div className="relative h-[280px] md:h-[320px] rounded-xl overflow-hidden">
                <Image
                  src="/images/DASHBOARD_DARK.png"
                  alt="Dashboard Mylar Pro — Visão geral com métricas de imóveis, contratos e cobranças"
                  width={800}
                  height={500}
                  className="relative w-full h-full rounded-xl object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
