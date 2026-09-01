import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/video/Hero";
import { Pain } from "@/components/video/Pain";
import { Solution } from "@/components/video/Solution";
import { Proof } from "@/components/video/Proof";
import { Offer } from "@/components/video/Offer";
import { FAQ } from "@/components/video/FAQ";
import { ContactForm } from "@/components/video/ContactForm";

export default function VideoPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="animate-float absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#067EFB]/20 blur-[120px]" />
        <div
          className="animate-float absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-[#3AB8D6]/15 blur-[100px]"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      <header className="relative z-10 border-b border-zinc-800/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center px-6 py-4">
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
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <Pain />
        <Solution />
        <Proof />
        <Offer />
        <FAQ />
        <ContactForm />
      </main>

      <footer className="relative z-10 border-t border-zinc-800/60">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <Image
            src="/images/logo-white.svg"
            alt="MyLar Pro"
            width={120}
            height={34}
            className="h-7 w-auto opacity-60"
          />
          <p>
            © {new Date().getFullYear()} MyLar Pro. Gestão imobiliária completa.
          </p>
        </div>
      </footer>
    </div>
  );
}
