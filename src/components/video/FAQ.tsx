"use client";

import { useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { trackEvent } from "@/lib/tracking";

const QUESTIONS = [
  {
    q: "Robô respondendo cliente espanta lead. Prefiro corretor de verdade.",
    a: "O corretor continua sendo quem atende e quem fecha. O agente cobre o intervalo em que hoje não há ninguém: 23h40 de sábado, madrugada, feriado. Ele pergunta se é venda ou aluguel, bairro, faixa de preço e quando a pessoa quer visitar, e entrega isso ao corretor da vez. A alternativa real não é o corretor respondendo às 23h40, é o lead esperando até segunda.",
  },
  {
    q: "IA aqui é modinha, não sabe nada da minha operação.",
    a: "O agente é configurado pela própria imobiliária e responde com os dados que estão no sistema: imóvel, proposta, contrato. É o mesmo lugar onde a venda é fechada, então ele sabe o que existe na sua carteira. Um assistente genérico em outra aba não sabe. No vídeo você vê as respostas saindo do seu próprio acervo.",
  },
  {
    q: "Distribuição de lead automática vai gerar briga interna de comissão.",
    a: "A briga hoje existe porque não há registro de quem atendeu primeiro. O rodízio define de quem é a vez antes de o lead chegar, e o histórico de atribuição guarda quem recebeu, a que horas, e quem respondeu. A discussão passa a ser resolvida com o registro na tela em vez da memória de cada um.",
  },
  {
    q: "Já vi promessa de automação que virou mais trabalho para a equipe.",
    a: "Por isso a oferta desta página é um vídeo, não uma demonstração com apresentador. Você vê o fluxo rodando em tela e julga se aquilo tira trabalho da mesa do seu time ou acrescenta. Se acrescentar, você fecha a aba e não gastou nada além de dois minutos.",
  },
  {
    q: "Meu time não vai usar. O corretor larga qualquer sistema chato.",
    a: "O corretor recebe o lead por notificação no celular, no MyLar Pro Brokers, com a conversa do pré-atendimento já anexada: ele abre e continua de onde a IA parou. Não há tela nova para preencher antes de atender. O vídeo mostra exatamente essa parte.",
  },
  {
    q: "Já tenho um CRM avulso para os leads, não preciso de outro.",
    a: "A questão não é ter onde guardar o lead, é o lead entrar de madrugada, ter alguém respondendo, ser distribuído por rodízio e ficar registrado no mesmo lugar onde a proposta e o contrato daquele imóvel vivem. Um CRM à parte não fecha esse caminho: a origem do lead fica num sistema e a negociação noutro.",
  },
  {
    q: "Já tenho sistema de imóveis, só a distribuição de lead é que é problema.",
    a: "Esta página trata do comercial porque foi esse o assunto que trouxe você aqui. Mas comissão do corretor e, para quem administra locação, repasse com demonstrativo, régua de cobrança, conciliação bancária e DIMOB estão no mesmo sistema, em produção. Se o seu ponto de dor for o financeiro, é a mesma plataforma.",
  },
  {
    q: "Migrar a base inteira de contratos e imóveis vai parar a operação.",
    a: "Migração é conversa de projeto, com a sua base na mesa, e não é o que esta página pede de você. Aqui o compromisso é de dois minutos de vídeo. Se depois fizer sentido discutir migração, você fala com alguém que já viu o seu caso, não com um formulário.",
  },
  {
    q: "Preciso preencher formulário ou agendar reunião para assistir?",
    a: "Não. O vídeo está aberto nesta página e roda sem cadastro. O campo de contato aqui embaixo é para quem assistiu e quer continuar a conversa: deixar os dados é opcional, e ninguém liga porque você abriu a página.",
  },
];

export function FAQ() {
  const ref = useScrollAnimate<HTMLElement>();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const tracked = useRef(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || tracked.current) return;
          tracked.current = true;
          trackEvent("ScrollFAQ");
          observer.disconnect();
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: QUESTIONS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section
      ref={ref}
      id="perguntas"
      className="border-t border-zinc-800/60 bg-zinc-900/20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <div ref={sentinelRef} className="scroll-animate mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            O que perguntam antes de assistir
          </h2>
        </div>

        <div className="space-y-3">
          {QUESTIONS.map((item) => (
            <details
              key={item.q}
              className="group scroll-animate overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-5 text-[16px] font-semibold tracking-tight text-white marker:hidden">
                {item.q}
                <Plus className="mt-0.5 h-5 w-5 shrink-0 text-[#3AB8D6] transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="px-6 pb-6 text-[15px] leading-relaxed text-zinc-400">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
