"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { captureAttribution, getAttribution } from "@/lib/attribution";

const API_URL = "/api/lead";

const inputClasses =
  "w-full rounded-xl border border-zinc-700 bg-zinc-950/80 px-4 py-3.5 text-white placeholder-zinc-500 focus:border-[#3AB8D6] focus:outline-none focus:ring-2 focus:ring-[#3AB8D6]/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed";
const labelClasses = "block text-sm font-medium text-zinc-300 mb-1.5";

const SALES_VOLUME_OPTIONS = [
  "Até 5 vendas por mês",
  "6 a 15 vendas por mês",
  "16 a 40 vendas por mês",
  "Mais de 40 vendas por mês",
];

const RENTAL_PORTFOLIO_OPTIONS = [
  "Menos de 80 imóveis",
  "80 a 200 imóveis",
  "200 a 500 imóveis",
  "500 a 1.000 imóveis",
  "Mais de 1.000 imóveis",
];

const TEAM_SIZE_OPTIONS = [
  "Só eu",
  "2 a 5 corretores",
  "6 a 15 corretores",
  "16 a 40 corretores",
  "Mais de 40 corretores",
];

type BusinessLine = "venda" | "aluguel";

const BUSINESS_LINES: Array<{ value: BusinessLine; label: string }> = [
  { value: "venda", label: "Venda" },
  { value: "aluguel", label: "Aluguel" },
];

const BUSINESS_LINE_LABELS: Record<BusinessLine, string> = {
  venda: "Venda",
  aluguel: "Aluguel",
};

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function DemoForm({ variant = "hero" }: { variant?: "hero" | "cta" }) {
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [lines, setLines] = useState<BusinessLine[]>([]);
  const [linesError, setLinesError] = useState<string | null>(null);

  const worksWithSales = lines.includes("venda");
  const worksWithRentals = lines.includes("aluguel");

  useEffect(() => {
    captureAttribution();
  }, []);

  function toggleLine(line: BusinessLine) {
    setLines((current) =>
      current.includes(line)
        ? current.filter((item) => item !== line)
        : [...current, line],
    );
    if (linesError) setLinesError(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (lines.length === 0) {
      setLinesError("Escolha ao menos uma opção.");
      return;
    }

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setPhoneError("Informe o DDD e o número completo.");
      return;
    }
    setPhoneError(null);

    setIsPending(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      const text = value.toString();
      if (key === "AtuacaoItem") return;
      data[key] = text;
    });

    data.Atuacao = lines.map((line) => BUSINESS_LINE_LABELS[line]).join(" + ");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, attribution: getAttribution() }),
      });

      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined") {
          const w = window as unknown as {
            fbq?: (...args: unknown[]) => void;
            dataLayer?: unknown[];
          };
          w.fbq?.("track", "Lead");
          w.dataLayer?.push({
            event: "generate_lead",
            form_location: variant,
            atuacao: data.Atuacao,
            volume_vendas: data.VolumeVendas,
            carteira_locacao: data.CarteiraLocacao,
          });
        }
      } else {
        const payload = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(
          payload?.error ??
            "Não conseguimos enviar agora. Tente de novo ou chame no WhatsApp.",
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

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center"
      >
        <CheckCircle className="mx-auto mb-3 h-10 w-10 text-emerald-400" />
        <p className="text-lg font-semibold text-emerald-400">
          Recebemos seu contato
        </p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-300">
          Falamos com você pelo WhatsApp em até 1 dia útil para marcar os 20
          minutos. Se preferir adiantar, é só responder por lá quando chegar
          nossa mensagem.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="space-y-1.5">
        <label htmlFor={`rodizio-nome-${variant}`} className={labelClasses}>
          Nome
        </label>
        <input
          id={`rodizio-nome-${variant}`}
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
        <label htmlFor={`rodizio-zap-${variant}`} className={labelClasses}>
          WhatsApp
        </label>
        <input
          id={`rodizio-zap-${variant}`}
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
          aria-describedby={phoneError ? `rodizio-zap-erro-${variant}` : undefined}
          className={inputClasses}
        />
        {phoneError && (
          <p id={`rodizio-zap-erro-${variant}`} className="text-sm text-red-400">
            {phoneError}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor={`rodizio-email-${variant}`} className={labelClasses}>
          Email
        </label>
        <input
          id={`rodizio-email-${variant}`}
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
        <label htmlFor={`rodizio-imob-${variant}`} className={labelClasses}>
          Nome da imobiliária{" "}
          <span className="font-normal text-zinc-500">(opcional)</span>
        </label>
        <input
          id={`rodizio-imob-${variant}`}
          type="text"
          name="Imobiliaria"
          disabled={isPending}
          autoComplete="organization"
          placeholder="Como o time te conhece"
          className={inputClasses}
        />
      </div>

      <fieldset
        className="space-y-2"
        aria-describedby={linesError ? `rodizio-atuacao-erro-${variant}` : undefined}
      >
        <legend className={labelClasses}>Você trabalha com</legend>
        <div className="grid grid-cols-2 gap-2">
          {BUSINESS_LINES.map((line) => {
            const checked = lines.includes(line.value);
            return (
              <label
                key={line.value}
                className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium whitespace-nowrap transition-all ${
                  checked
                    ? "border-[#3AB8D6] bg-[#3AB8D6]/15 text-white"
                    : "border-zinc-700 bg-zinc-950/80 text-zinc-400 hover:border-zinc-600"
                } ${isPending ? "cursor-not-allowed opacity-60" : ""}`}
              >
                <input
                  type="checkbox"
                  name="AtuacaoItem"
                  value={line.value}
                  checked={checked}
                  disabled={isPending}
                  onChange={() => toggleLine(line.value)}
                  className="h-4 w-4 shrink-0 accent-[#3AB8D6]"
                />
                {line.label}
              </label>
            );
          })}
        </div>
        {linesError && (
          <p
            id={`rodizio-atuacao-erro-${variant}`}
            className="text-sm text-red-400"
          >
            {linesError}
          </p>
        )}
      </fieldset>

      {worksWithSales && (
        <div className="space-y-1.5">
          <label
            htmlFor={`rodizio-vendas-${variant}`}
            className={labelClasses}
          >
            Vendas fechadas por mês
          </label>
          <select
            id={`rodizio-vendas-${variant}`}
            name="VolumeVendas"
            required
            disabled={isPending}
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Selecione
            </option>
            {SALES_VOLUME_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      {worksWithRentals && (
        <div className="space-y-1.5">
          <label
            htmlFor={`rodizio-locacao-${variant}`}
            className={labelClasses}
          >
            Imóveis na carteira de locação
          </label>
          <select
            id={`rodizio-locacao-${variant}`}
            name="CarteiraLocacao"
            required
            disabled={isPending}
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Selecione
            </option>
            {RENTAL_PORTFOLIO_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      {lines.length > 0 && (
        <div className="space-y-1.5">
          <label htmlFor={`rodizio-time-${variant}`} className={labelClasses}>
            Tamanho do time de corretores
          </label>
          <select
            id={`rodizio-time-${variant}`}
            name="TamanhoTime"
            required
            disabled={isPending}
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Selecione
            </option>
            {TEAM_SIZE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

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
          "Quero ver o rodízio funcionando"
        )}
      </button>

      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <p className="text-center text-xs leading-relaxed text-zinc-500">
        Leva 30 segundos. Contato pelo WhatsApp em até 1 dia útil, sem ligação
        de vendas insistente.
      </p>
    </form>
  );
}
