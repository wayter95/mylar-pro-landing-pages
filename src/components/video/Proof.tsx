"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const TESTIMONIALS = [
  {
    id: "leonardo",
    quote:
      "Melhorou tanto a minha imobiliária que hoje o pessoal está vindo atrás por conta da organização.",
    name: "Leonardo",
    role: "Proprietário da Bloco D",
    video: "/videos/depoimento-leonardo.mp4",
    poster: "/videos/depoimento-leonardo-poster.jpg",
  },
  {
    id: "joao",
    quote:
      "Tem nos ajudado muito nas rotinas diárias e no acompanhamento dos nossos clientes. A cada dia a nossa organização melhora.",
    name: "João",
    role: "Gestor e corretor em Brasília",
    video: "/videos/depoimento-joao.mp4",
    poster: "/videos/depoimento-joao-poster.jpg",
  },
];

const CASES = [
  {
    body: "O agente de atendimento é configurado pela própria imobiliária e responde no WhatsApp, Instagram e Messenger com os dados da imobiliária — proposta, contrato, fatura, imóvel — dentro do mesmo sistema onde a venda e o repasse são gerados.",
    source: "Módulo Atendimento com IA · em produção",
  },
  {
    body: "O app do corretor leva agenda, visitas, clientes e contratos para o celular, onde a notificação do lead chega.",
    source: "MyLar Pro Brokers · em produção",
  },
  {
    body: "Leads, corretores, campanhas e contratos ficam no mesmo sistema que faz comissão e, para quem tem locação, repasse com demonstrativo, régua de cobrança, conciliação bancária e DIMOB.",
    source: "Módulos Comercial, Cobranças e Financeiro · em produção",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
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
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform group-hover:scale-105">
              <Play className="ml-1 h-6 w-6 fill-zinc-900 text-zinc-900" />
            </span>
          </button>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 p-6">
        <blockquote className="text-[15px] leading-relaxed text-zinc-300">
          “{testimonial.quote}”
        </blockquote>
        <figcaption>
          <span className="block text-sm font-semibold text-white">
            {testimonial.name}
          </span>
          <span className="block text-sm text-zinc-500">{testimonial.role}</span>
        </figcaption>
      </div>
    </figure>
  );
}

export function Proof() {
  const ref = useScrollAnimate<HTMLElement>();

  return (
    <section ref={ref} className="border-t border-zinc-800/60 bg-zinc-900/20">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <h2 className="scroll-animate mb-12 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          O que está no ar hoje
        </h2>

        <div className="mx-auto mb-6 grid max-w-3xl gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`scroll-animate stagger-${index + 1}`}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {CASES.map((item, index) => (
            <figure
              key={item.source}
              className={`scroll-animate stagger-${index + 1} flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6`}
            >
              <blockquote className="text-[15px] leading-relaxed text-zinc-400">
                {item.body}
              </blockquote>
              <figcaption className="mt-5 font-mono text-[11px] tracking-wide text-zinc-500">
                {item.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
