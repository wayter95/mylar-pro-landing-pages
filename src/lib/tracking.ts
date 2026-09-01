type TrackedWindow = Window & {
  fbq?: (...args: unknown[]) => void;
  dataLayer?: Record<string, unknown>[];
};

export function trackEvent(
  name: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;

  const w = window as TrackedWindow;

  w.dataLayer?.push({ event: name, ...params });

  const STANDARD_META_EVENTS = new Set(["PageView", "Lead", "ViewContent"]);
  if (STANDARD_META_EVENTS.has(name)) {
    w.fbq?.("track", name, params);
  } else {
    w.fbq?.("trackCustom", name, params);
  }
}
