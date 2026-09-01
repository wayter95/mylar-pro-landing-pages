"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

type Testimonial = {
  id: string;
  context: string;
  quote: string;
  name: string;
  role: string;
  video: string;
  poster: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "leonardo",
    context: "Sobre o que mudou na operação",
    quote:
      "Melhorou tanto a minha imobiliária que hoje o pessoal está vindo atrás por conta da organização.",
    name: "Leonardo",
    role: "Proprietário da Bloco D",
    video: "/videos/depoimento-leonardo.mp4",
    poster: "/videos/depoimento-leonardo-poster.jpg",
  },
  {
    id: "joao",
    context: "Sobre a rotina do time no dia a dia",
    quote:
      "Tem nos ajudado muito nas rotinas diárias e no acompanhamento dos nossos clientes. A cada dia a nossa organização melhora.",
    name: "João",
    role: "Gestor e corretor em Brasília",
    video: "/videos/depoimento-joao.mp4",
    poster: "/videos/depoimento-joao-poster.jpg",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function play() {
    const video = videoRef.current;
    if (!video) return;
    setPlaying(true);
    video.play().catch(() => setPlaying(false));
  }

  return (
    <figure className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
      <div className="relative aspect-[9/16] w-full bg-zinc-950">
        <video
          ref={videoRef}
          src={testimonial.video}
          poster={testimonial.poster}
          preload="none"
          playsInline
          controls={playing}
          onEnded={() => setPlaying(false)}
          className="h-full w-full object-cover"
        />
        {!playing && (
          <button
            type="button"
            onClick={play}
            aria-label={`Assistir ao depoimento de ${testimonial.name}`}
            className="group absolute inset-0 flex items-center justify-center bg-zinc-950/30 transition-colors hover:bg-zinc-950/15"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform group-hover:scale-105">
              <Play className="ml-1 h-7 w-7 fill-zinc-900 text-zinc-900" />
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 p-6">
        <div className="space-y-2.5">
          <span className="block font-mono text-[11px] tracking-widest text-zinc-500 uppercase">
            {testimonial.context}
          </span>
          <blockquote className="text-[15px] leading-relaxed text-zinc-300">
            “{testimonial.quote}”
          </blockquote>
        </div>
        <figcaption>
          <span className="block text-sm font-semibold text-white">
            {testimonial.name}
          </span>
          <span className="block text-sm text-zinc-500">
            {testimonial.role}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

export function Testimonials() {
  const ref = useScrollAnimate<HTMLElement>();

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="scroll-animate mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Antes de organizar o lead,{" "}
          <span className="gradient-text">é preciso organizar a casa</span>
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          O rodízio, o histórico de atribuição e a comissão sem discussão vivem
          nessa mesma organização. Dois clientes contando o que mudou, sem
          roteiro.
        </p>
      </div>

      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`scroll-animate stagger-${index + 1}`}
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </section>
  );
}
