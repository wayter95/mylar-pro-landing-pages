"use client";

import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Features } from "@/components/sections/Features";
import { Audience } from "@/components/sections/Audience";
import { Differentials } from "@/components/sections/Differentials";
import { EarlyAdopter } from "@/components/sections/EarlyAdopter";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#067EFB]/20 blur-[120px] animate-float" />
        <div
          className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-[#3AB8D6]/15 blur-[100px] animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <div
          className="absolute -bottom-20 right-1/3 w-[400px] h-[400px] rounded-full bg-[#067EFB]/10 blur-[80px] animate-float"
          style={{ animationDelay: "-1.5s" }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-zinc-800/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-white.svg"
              alt="Mylar Pro"
              width={140}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#3AB8D6]/10 border border-[#3AB8D6]/20 px-3 py-1 text-xs font-medium text-[#3AB8D6]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3AB8D6] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#3AB8D6]" />
            </span>
            Lista de espera aberta
          </span>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Audience />
        <Differentials />
        <EarlyAdopter />
        <CTAFinal />
      </main>

      <Footer />
    </div>
  );
}
