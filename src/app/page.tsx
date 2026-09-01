import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { Problem } from "@/components/landing/Problem";
import { Flow } from "@/components/landing/Flow";
import { Capabilities } from "@/components/landing/Capabilities";
import { Proof } from "@/components/landing/Proof";
import { Testimonials } from "@/components/landing/Testimonials";
import { Offer } from "@/components/landing/Offer";
import { FAQ } from "@/components/landing/FAQ";
import { CTAFinal } from "@/components/landing/CTAFinal";
import { StickyCTA } from "@/components/landing/StickyCTA";

export default function RodizioDeLeadsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-950 pb-24 text-zinc-100 lg:pb-0">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="animate-float absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#067EFB]/20 blur-[120px]" />
        <div
          className="animate-float absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-[#3AB8D6]/15 blur-[100px]"
          style={{ animationDelay: "-3s" }}
        />
        <div
          className="animate-float absolute right-1/3 -bottom-20 h-[400px] w-[400px] rounded-full bg-[#067EFB]/10 blur-[80px]"
          style={{ animationDelay: "-1.5s" }}
        />
      </div>

      <header className="relative z-10 border-b border-zinc-800/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-white.svg"
              alt="MyLar Pro"
              width={140}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>
          <Link
            href="#agendar"
            className="hidden rounded-full border border-[#3AB8D6]/30 bg-[#3AB8D6]/10 px-4 py-2 text-sm font-medium text-[#3AB8D6] transition-colors hover:bg-[#3AB8D6]/20 sm:inline-flex"
          >
            Agendar demonstração
          </Link>
        </div>
      </header>

      <noscript>
        <div className="relative z-10 bg-amber-500/10 px-6 py-3 text-center text-sm text-amber-200">
          Ative o JavaScript para enviar o formulário, ou fale com a gente pelo
          WhatsApp.
        </div>
      </noscript>

      <main className="relative z-10">
        <Hero />
        <SocialProof />
        <Problem />
        <Flow />
        <Capabilities />
        <Proof />
        <Testimonials />
        <Offer />
        <FAQ />
        <CTAFinal />
      </main>

      <footer className="relative z-10 border-t border-zinc-800/60">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-500">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Image
              src="/images/logo-white.svg"
              alt="MyLar Pro"
              width={120}
              height={34}
              className="h-7 w-auto opacity-60"
            />
            <p>
              © {new Date().getFullYear()} MyLar Pro. Gestão imobiliária
              completa.
            </p>
          </div>
        </div>
      </footer>

      <StickyCTA />
    </div>
  );
}
