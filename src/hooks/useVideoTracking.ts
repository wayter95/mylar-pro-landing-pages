"use client";

import { useCallback, useRef } from "react";
import { trackEvent } from "@/lib/tracking";

const PROGRESS_MILESTONES = [25, 50, 75] as const;

export function useVideoTracking(videoId: string) {
  const started = useRef(false);
  const completed = useRef(false);
  const reached = useRef(new Set<number>());

  const onPlay = useCallback(() => {
    if (started.current) return;
    started.current = true;
    trackEvent("VideoStart", { video_id: videoId });
  }, [videoId]);

  const onTimeUpdate = useCallback(
    (event: React.SyntheticEvent<HTMLVideoElement>) => {
      const video = event.currentTarget;
      if (!video.duration || !Number.isFinite(video.duration)) return;

      const percent = (video.currentTime / video.duration) * 100;

      PROGRESS_MILESTONES.forEach((milestone) => {
        if (percent >= milestone && !reached.current.has(milestone)) {
          reached.current.add(milestone);
          trackEvent(`VideoProgress${milestone}`, { video_id: videoId });
        }
      });
    },
    [videoId],
  );

  const onEnded = useCallback(() => {
    if (completed.current) return;
    completed.current = true;
    trackEvent("VideoComplete", { video_id: videoId });
  }, [videoId]);

  return { onPlay, onTimeUpdate, onEnded };
}
