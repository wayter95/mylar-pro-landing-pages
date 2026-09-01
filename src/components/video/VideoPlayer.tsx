"use client";

import { useRef, useState } from "react";
import { Clapperboard, Play } from "lucide-react";
import { useVideoTracking } from "@/hooks/useVideoTracking";

const VIDEO_SRC = process.env.NEXT_PUBLIC_LEAD_VIDEO_URL;
const POSTER_SRC = process.env.NEXT_PUBLIC_LEAD_VIDEO_POSTER;
const VIDEO_ID = "caminho-do-lead";

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const { onPlay, onTimeUpdate, onEnded } = useVideoTracking(VIDEO_ID);

  function handlePlayClick() {
    const video = videoRef.current;
    if (!video) return;
    setPlaying(true);
    video.play().catch(() => setPlaying(false));
  }

  if (!VIDEO_SRC) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/60 px-6 text-center">
        <Clapperboard className="h-10 w-10 text-zinc-600" />
        <div>
          <p className="text-lg font-semibold text-zinc-300">
            Vídeo em finalização
          </p>
          <p className="mt-1.5 text-sm text-zinc-500">
            O caminho completo do lead, das 23h40 até o corretor certo, estará
            aqui em instantes.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        preload="metadata"
        playsInline
        controls={playing}
        onPlay={onPlay}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
        className="h-full w-full"
      >
        <track kind="captions" srcLang="pt-BR" label="Português" default />
      </video>

      {!playing && (
        <button
          type="button"
          onClick={handlePlayClick}
          aria-label="Assistir ao vídeo de 3 minutos"
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-zinc-950/40 transition-colors hover:bg-zinc-950/25"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-transform group-hover:scale-105">
            <Play className="ml-1.5 h-8 w-8 fill-zinc-900 text-zinc-900" />
          </span>
          <span className="rounded-full bg-zinc-950/70 px-4 py-1.5 text-sm font-medium text-zinc-200 backdrop-blur-sm">
            3 minutos · sem cadastro
          </span>
        </button>
      )}
    </div>
  );
}
