import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mylar Pro | Gestão Imobiliária Completa — Lista de Espera",
  description:
    "CRM, assinatura eletrônica, boleto e PIX, portal de imóveis e portal do cliente em uma única plataforma. Cadastre-se na lista de espera e garanta condições exclusivas de lançamento.",
  keywords: [
    "gestão imobiliária",
    "CRM imobiliário",
    "assinatura eletrônica",
    "boleto PIX imobiliária",
    "software imobiliário",
    "plataforma imobiliária",
    "portal de imóveis",
    "sistema para imobiliária",
    "gestão de aluguéis",
    "incorporadora",
  ],
  openGraph: {
    title: "Mylar Pro | Pare de gerenciar imóveis com planilhas",
    description:
      "CRM, assinatura eletrônica, cobranças e portal de imóveis — tudo integrado. Entre na lista de espera.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mylar Pro | Gestão Imobiliária Completa",
    description:
      "CRM, assinatura eletrônica, cobranças e portal de imóveis — tudo integrado.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
