import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

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
        {/* Meta Pixel Code */}
        {META_PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        {/* End Meta Pixel Code */}
        {children}
      </body>
    </html>
  );
}
