"use client";

import { Plus } from "lucide-react";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const QUESTIONS = [
  {
    q: "Já vi promessa de automação virar mais trabalho. Por que aqui é diferente?",
    a: "Justo. A diferença é onde a automação vive: o rodízio, o timer e o histórico rodam no mesmo lugar onde o contrato, a fatura e o repasse já estão. Não há um segundo sistema para alimentar. Na demonstração você vê o caminho inteiro do lead sem ninguém digitar o mesmo dado duas vezes, e se em algum ponto der trabalho a mais, a gente aponta.",
  },
  {
    q: "Migrar a base inteira de contratos e imóveis vai parar a operação?",
    a: "A migração é feita com a operação rodando, por etapas: acervo de imóveis primeiro, negociações de venda e contratos de locação depois, com conferência a cada bloco. Na sessão a gente olha o seu volume e você sai com um prazo realista.",
  },
  {
    q: "Meu time não vai usar. O corretor larga qualquer sistema chato.",
    a: "O corretor não entra num painel de gestão: usa o app com agenda, visitas, clientes e contratos no celular, e recebe o lead já qualificado pela IA em vez de um contato cru. O rodízio evita a briga de quem atende primeiro, que costuma ser o motivo de abandonar o sistema. Traga um corretor para a demonstração.",
  },
  {
    q: "IA aqui é modinha. Não sabe nada da minha operação.",
    a: "O agente responde com os dados da sua imobiliária porque roda dentro do mesmo sistema onde estão a proposta, o contrato e o imóvel. Ele sabe em que pé está aquela negociação de venda ou se o aluguel daquele inquilino caiu; um assistente genérico em outra aba não sabe.",
  },
  {
    q: "Robô respondendo cliente espanta lead. Prefiro corretor de verdade.",
    a: "A IA atua onde hoje não há ninguém: madrugada, fim de semana, fora do horário comercial. Ela conversa, qualifica e passa o bastão. Quem negocia e fecha continua sendo o corretor, só que recebendo um lead que já sabe o que quer.",
  },
  {
    q: "Distribuir lead automático vai gerar briga interna de comissão.",
    a: "É o contrário do que acontece hoje, quando dois corretores atendem o mesmo lead e ambos cobram. Toda atribuição fica registrada com data, hora e responsável, incluindo as redistribuições por timer.",
  },
  {
    q: "Já tenho um CRM avulso para os leads. Preciso de outro?",
    a: "Se resolve, mantenha. O que ele não faz é ligar a origem do lead à venda fechada ou ao contrato assinado, à comissão registrada e ao repasse gerado, e esse pedaço continua na planilha. Na demonstração a gente compara os dois cenários e você decide.",
  },
  {
    q: "Já tenho sistema de imóveis. Só o financeiro é que é problema.",
    a: "Muita gente chega assim. Vale ver a demonstração pelo financeiro: comissão de venda, repasse de aluguel com demonstrativo, conciliação e DIMOB. O comercial entra porque é a mesma mesa e a mesma decisão, mas quem manda na pauta dos 20 minutos é você.",
  },
  {
    q: "Sai mais caro que a colcha de retalhos que eu já pago?",
    a: "Depende do que você paga hoje somando sistema de imóveis, CRM, ferramenta de cobrança e as horas reconciliando planilha. Não competimos por preço, competimos por tirar a operação das planilhas. Traga os valores que paga hoje e fazemos essa conta junto.",
  },
];

export function FAQ() {
  const ref = useScrollAnimate<HTMLElement>();

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
        <div className="scroll-animate mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            O que perguntam antes de agendar
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
