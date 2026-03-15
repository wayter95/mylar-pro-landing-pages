import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-800/50 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image
          src="/images/logo-white.svg"
          alt="Mylar Pro"
          width={100}
          height={30}
          className="h-7 w-auto opacity-70"
        />
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Mylar Pro. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
