"use client";

import { PlayCircle } from "lucide-react";
import { VideoPlayer } from "./VideoPlayer";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="mx-auto mb-10 max-w-3xl text-center animate-fade-in-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#3AB8D6]/30 bg-linear-to-r from-[#3AB8D6]/20 to-[#067EFB]/20 px-4 py-1.5 text-sm font-medium text-[#3AB8D6]">
          <PlayCircle className="h-4 w-4" />
          Vídeo de 2 minutos · sem formulário
        </span>

        <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl">
          O lead chegou às 23h40 de sábado.{" "}
          <span className="gradient-text">Alguém só viu na segunda.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Nessa altura ele já falou com outra imobiliária. Veja o caminho do
          lead, do portal e do WhatsApp até chegar ao corretor certo, com a vez
          de cada um registrada. Sem formulário, sem agendar nada.
        </p>
      </div>

      <div
        className="animate-fade-in-up"
        style={{ animationDelay: "0.15s" }}
        id="video"
      >
        <VideoPlayer />
      </div>
    </section>
  );
}
