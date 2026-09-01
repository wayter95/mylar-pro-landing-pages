"use client";

import Link from "next/link";

export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-800 bg-zinc-950/90 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <Link
        href="#agendar"
        className="flex w-full items-center justify-center rounded-xl bg-linear-to-r from-[#3AB8D6] to-[#067EFB] py-3.5 font-semibold text-white shadow-lg shadow-[#067EFB]/25"
      >
        Agendar os 20 minutos
      </Link>
    </div>
  );
}
