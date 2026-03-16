"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

const FORM_ID = "cmmrpyyes00045fzl8l1ma555";
const API_URL = `/api/forms/${FORM_ID}/submit`;

const inputClasses =
  "w-full rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3.5 text-white placeholder-zinc-500 focus:border-[#3AB8D6] focus:outline-none focus:ring-2 focus:ring-[#3AB8D6]/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed";
const labelClasses = "block text-sm font-medium text-zinc-400 mb-1.5";

export function FlowForm({ variant = "hero" }: { variant?: "hero" | "cta" }) {
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Erro ao enviar. Tente novamente.");
      }
    } catch {
      setError("Erro ao enviar. Tente novamente.");
    } finally {
      setIsPending(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
        <CheckCircle className="mx-auto mb-3 h-10 w-10 text-emerald-400" />
        <p className="text-lg font-semibold text-emerald-400">
          Cadastro realizado!
        </p>
        <p className="mt-1 text-sm text-zinc-400">
          Seu bônus exclusivo de lançamento será enviado por e-mail.
        </p>
      </div>
    );
  }

  return (
    <form
      id={`flow-form-${FORM_ID}`}
      onSubmit={handleSubmit}
      className={
        variant === "cta"
          ? "mx-auto w-full max-w-md space-y-4"
          : "space-y-4"
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor={`flow-nome-${variant}`} className={labelClasses}>
            Nome
          </label>
          <input
            id={`flow-nome-${variant}`}
            type="text"
            name="Nome"
            required
            disabled={isPending}
            placeholder="Seu nome"
            className={inputClasses}
          />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor={`flow-sobrenome-${variant}`}
            className={labelClasses}
          >
            Sobrenome
          </label>
          <input
            id={`flow-sobrenome-${variant}`}
            type="text"
            name="Sobrenome"
            required
            disabled={isPending}
            placeholder="Seu sobrenome"
            className={inputClasses}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor={`flow-email-${variant}`} className={labelClasses}>
          Email
        </label>
        <input
          id={`flow-email-${variant}`}
          type="email"
          name="Email"
          required
          disabled={isPending}
          placeholder="seu@email.com"
          className={inputClasses}
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor={`flow-telefone-${variant}`} className={labelClasses}>
          Telefone
        </label>
        <input
          id={`flow-telefone-${variant}`}
          type="tel"
          name="Telefone"
          required
          disabled={isPending}
          placeholder="(00) 00000-0000"
          className={inputClasses}
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-xl bg-linear-to-r from-[#3AB8D6] to-[#067EFB] py-3.5 font-semibold text-white shadow-lg shadow-[#067EFB]/25 hover:shadow-[#067EFB]/40 hover:brightness-110 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Quero meu bônus de lançamento"
        )}
      </button>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </form>
  );
}
