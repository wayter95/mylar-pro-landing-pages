"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";
import { subscribeToLaunch } from "./actions";

export default function Home() {
  const [state, formAction, isPending] = useActionState(subscribeToLaunch, {});

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#067EFB]/20 blur-[120px] animate-float" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-[#3AB8D6]/15 blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute -bottom-20 right-1/3 w-[400px] h-[400px] rounded-full bg-[#067EFB]/10 blur-[80px] animate-float" style={{ animationDelay: "-1.5s" }} />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-zinc-800/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-white.svg"
              alt="Mylar Pro"
              width={140}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="space-y-8 animate-fade-in-up">
              <span className="inline-block rounded-full bg-linear-to-r from-[#3AB8D6]/20 to-[#067EFB]/20 px-4 py-1.5 text-sm font-medium text-[#3AB8D6] border border-[#3AB8D6]/30">
                🚀 Pré-lançamento
              </span>
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                A plataforma de gestão imobiliária que você{" "}
                <span className="bg-linear-to-r from-[#3AB8D6] to-[#067EFB] bg-clip-text text-transparent">
                  estava esperando
                </span>
              </h1>
              <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
                CRM completo, assinatura eletrônica, boleto e PIX integrados.
                Gerencie imóveis, contratos e cobranças em um só lugar — sem
                depender de planilhas ou sistemas legados.
              </p>

              {/* Form */}
              <div className="space-y-4">
                <p className="text-sm font-medium text-zinc-300">
                  Quer ser avisado no lançamento?
                </p>
                <form action={formAction} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    required
                    disabled={isPending}
                    className="flex-1 min-w-0 rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3.5 text-white placeholder-zinc-500 focus:border-[#3AB8D6] focus:outline-none focus:ring-2 focus:ring-[#3AB8D6]/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={isPending}
                    className="rounded-xl bg-linear-to-r from-[#3AB8D6] to-[#067EFB] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#067EFB]/25 hover:shadow-[#067EFB]/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isPending ? "Cadastrando..." : "Avise-me"}
                  </button>
                </form>
                {state.success && state.message && (
                  <p className="text-sm text-emerald-400 flex items-center gap-2">
                    <span className="text-lg">✓</span> {state.message}
                  </p>
                )}
                {state.error && (
                  <p className="text-sm text-red-400 flex items-center gap-2">
                    <span className="text-lg">!</span> {state.error}
                  </p>
                )}
              </div>
            </div>

            <div className="relative lg:pl-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-2 shadow-2xl shadow-black/50">
                <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-[#3AB8D6]/20 to-[#067EFB]/20 blur-xl opacity-50" />
                <Image
                  src="/images/DASHBOARD_DARK.png"
                  alt="Dashboard Mylar Pro"
                  width={800}
                  height={500}
                  className="relative w-full rounded-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-zinc-800/50 bg-zinc-900/30 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-2xl font-bold md:text-3xl mb-12">
              O que você ganha
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "📝",
                  title: "Assinatura eletrônica",
                  desc: "Contratos assinados digitalmente, sem papel.",
                },
                {
                  icon: "💰",
                  title: "Boleto e PIX",
                  desc: "Cobranças integradas com reajuste automático.",
                },
                {
                  icon: "📊",
                  title: "CRM com Kanban",
                  desc: "Pipeline visual de vendas e locações.",
                },
                {
                  icon: "🏠",
                  title: "Portal de imóveis",
                  desc: "Catálogo online com busca por mapa.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-colors"
                >
                  <span className="text-2xl mb-3 block">{f.icon}</span>
                  <h3 className="font-semibold text-white mb-1">{f.title}</h3>
                  <p className="text-sm text-zinc-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-bold md:text-3xl mb-4">
              Seja um dos primeiros
            </h2>
            <p className="text-zinc-400 mb-8">
              Cadastre seu e-mail e receba o aviso no dia do lançamento, com
              condições especiais para early adopters.
            </p>
            <form action={formAction} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                name="email"
                placeholder="seu@email.com"
                required
                disabled={isPending}
                className="flex-1 min-w-0 rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3.5 text-white placeholder-zinc-500 focus:border-[#3AB8D6] focus:outline-none focus:ring-2 focus:ring-[#3AB8D6]/20 transition-all disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isPending}
                className="rounded-xl bg-linear-to-r from-[#3AB8D6] to-[#067EFB] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#067EFB]/25 hover:shadow-[#067EFB]/40 transition-all disabled:opacity-70"
              >
                {isPending ? "..." : "Quero ser avisado"}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800/50 py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="/images/logo-white.svg"
            alt="Mylar Pro"
            width={100}
            height={30}
            className="h-7 w-auto opacity-70"
          />
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Mylar Pro. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
