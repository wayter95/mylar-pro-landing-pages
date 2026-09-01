"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { captureAttribution, getAttribution } from "@/lib/attribution";
import { trackEvent } from "@/lib/tracking";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const API_URL = "/api/lead";

const inputClasses =
  "w-full rounded-xl border border-zinc-700 bg-zinc-950/80 px-4 py-3.5 text-white placeholder-zinc-500 focus:border-[#3AB8D6] focus:outline-none focus:ring-2 focus:ring-[#3AB8D6]/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed";
const labelClasses = "block text-sm font-medium text-zinc-300 mb-1.5";

const BUSINESS_LINES = ["Venda", "Aluguel", "Temporada"];

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactForm() {
  const ref = useScrollAnimate<HTMLElement>();
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);

  useEffect(() => {
    captureAttribution();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (phone.replace(/\D/g, "").length < 10) {
      setPhoneError("Informe o DDD e o número completo.");
      return;
    }
    setPhoneError(null);

    setIsPending(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          Origem: "landing-video",
          attribution: getAttribution(),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        trackEvent("Lead", {
          form_location: "video",
          atuacao: data.Atuacao,
        });
      } else {
        const payload = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(
          payload?.error ??
            "Não conseguimos enviar agora. Tente de novo em instantes.",
        );
      }
    } catch {
      setError(
        "Não conseguimos enviar agora. Verifique a conexão e tente de novo.",
      );
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section ref={ref} className="mx-auto max-w-2xl px-6 py-20 md:py-24">
      <div className="scroll-animate rounded-3xl border border-[#3AB8D6]/25 bg-linear-to-br from-zinc-900 to-zinc-950 p-8 shadow-2xl shadow-black/50 sm:p-10">
        {submitted ? (
          <div role="status" className="py-6 text-center">
            <CheckCircle className="mx-auto mb-4 h-12 w-12 text-emerald-400" />
            <p className="text-xl font-bold text-emerald-400">Recebido.</p>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-zinc-300">
              A gente te chama no WhatsApp em horário comercial, já sabendo como
              a sua imobiliária trabalha. Sem apresentação genérica e sem ligação
              surpresa.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
              Assistiu e quer conversar?{" "}
              <span className="gradient-text">Deixe por onde te chamar</span>
            </h2>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="video-nome" className={labelClasses}>
                  Seu nome
                </label>
                <input
                  id="video-nome"
                  type="text"
                  name="Nome"
                  required
                  disabled={isPending}
                  autoComplete="name"
                  placeholder="Seu nome"
                  className={inputClasses}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="video-imobiliaria" className={labelClasses}>
                  Nome da imobiliária
                </label>
                <input
                  id="video-imobiliaria"
                  type="text"
                  name="Imobiliaria"
                  required
                  disabled={isPending}
                  autoComplete="organization"
                  placeholder="Como o time te conhece"
                  className={inputClasses}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="video-zap" className={labelClasses}>
                  WhatsApp
                </label>
                <input
                  id="video-zap"
                  type="tel"
                  name="Telefone"
                  inputMode="numeric"
                  required
                  disabled={isPending}
                  autoComplete="tel"
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={(e) => {
                    setPhone(formatPhone(e.target.value));
                    if (phoneError) setPhoneError(null);
                  }}
                  aria-invalid={phoneError ? true : undefined}
                  aria-describedby={phoneError ? "video-zap-erro" : undefined}
                  className={inputClasses}
                />
                {phoneError && (
                  <p id="video-zap-erro" className="text-sm text-red-400">
                    {phoneError}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="video-email" className={labelClasses}>
                  Email
                </label>
                <input
                  id="video-email"
                  type="email"
                  name="Email"
                  required
                  disabled={isPending}
                  autoComplete="email"
                  placeholder="seu@email.com"
                  className={inputClasses}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="video-atuacao" className={labelClasses}>
                  Você trabalha com
                </label>
                <select
                  id="video-atuacao"
                  name="Atuacao"
                  required
                  disabled={isPending}
                  defaultValue=""
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {BUSINESS_LINES.map((line) => (
                    <option key={line} value={line}>
                      {line}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="video-contexto" className={labelClasses}>
                  Onde dói mais hoje{" "}
                  <span className="font-normal text-zinc-500">(opcional)</span>
                </label>
                <textarea
                  id="video-contexto"
                  name="Contexto"
                  rows={3}
                  disabled={isPending}
                  placeholder="Distribuição de lead, atendimento fora de horário, financeiro…"
                  className={`${inputClasses} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#3AB8D6] to-[#067EFB] py-4 text-[17px] font-semibold text-white shadow-lg shadow-[#067EFB]/25 transition-all hover:shadow-[#067EFB]/40 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Quero falar com alguém que já viu essa operação"
                )}
              </button>

              {error && (
                <p role="alert" className="text-sm text-red-400">
                  {error}
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </section>
  );
}
