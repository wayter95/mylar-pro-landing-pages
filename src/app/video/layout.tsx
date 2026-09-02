import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "O caminho do lead das 23h40 até o corretor certo | MyLar Pro — vídeo de 2 minutos",
  description:
    "Vídeo de 2 minutos mostrando o caminho do lead, do portal e do WhatsApp até o corretor certo, com pré-atendimento por IA, rodízio, timer de redistribuição e histórico de atribuição. Sem formulário, sem agendar nada.",
  keywords: [
    "distribuição de leads imobiliária",
    "rodízio de leads",
    "atendimento fora do horário comercial",
    "IA para imobiliária",
    "CRM imobiliário",
    "app para corretor",
  ],
  alternates: { canonical: "/video" },
  openGraph: {
    title: "O lead chegou às 23h40 de sábado. Alguém só viu na segunda.",
    description:
      "Veja em 2 minutos o caminho do lead até o corretor certo, com a vez de cada um registrada. Sem formulário, sem agendar nada.",
    type: "website",
    locale: "pt_BR",
    url: "/video",
  },
  twitter: {
    card: "summary_large_image",
    title: "O caminho do lead das 23h40 até o corretor certo | MyLar Pro",
    description:
      "Vídeo de 2 minutos, sem formulário e sem agendamento.",
  },
};

export default function VideoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
