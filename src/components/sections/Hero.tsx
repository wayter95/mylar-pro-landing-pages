"use client";

import { FlowForm } from "@/components/FlowForm";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <div className="space-y-8 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#3AB8D6]/20 to-[#067EFB]/20 px-4 py-1.5 text-sm font-medium text-[#3AB8D6] border border-[#3AB8D6]/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3AB8D6] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3AB8D6]" />
            </span>
            Vagas limitadas — Lista de espera aberta
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-[3.5rem]">
            Pare de gerenciar imóveis com planilhas e{" "}
            <span className="gradient-text">boa vontade.</span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
            CRM, assinatura eletrônica, cobrança com boleto e PIX, portal de
            imóveis e portal do cliente — tudo integrado em uma única plataforma
            pensada diretamente para o mercado imobiliário.
          </p>
        </div>

        <div
          className="relative lg:pl-8 animate-fade-in-up lg:sticky lg:top-24"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl shadow-black/50">
            <p className="text-sm font-medium text-zinc-300 mb-4">
              Cadastre-se e receba um cupom de desconto exclusivo de lançamento
            </p>
            <FlowForm variant="hero" />
          </div>
          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Dados protegidos
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              LGPD
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                />
              </svg>
              Servidores no Brasil
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
