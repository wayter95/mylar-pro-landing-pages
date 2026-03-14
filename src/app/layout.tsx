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
  title: "Mylar Pro | Pré-lançamento — Plataforma de Gestão Imobiliária",
  description: "Cadastre-se e seja avisado no lançamento. CRM, assinatura eletrônica, boleto e PIX integrados para imobiliárias e incorporadoras.",
  openGraph: {
    title: "Mylar Pro | Pré-lançamento",
    description: "Seja o primeiro a conhecer a plataforma completa de gestão imobiliária.",
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
