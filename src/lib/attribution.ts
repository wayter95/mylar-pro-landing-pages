const STORAGE_KEY = "mylar_attribution";

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

export type Attribution = Partial<Record<(typeof TRACKED_PARAMS)[number], string>> & {
  landing_page?: string;
  referrer?: string;
};

function readStored(): Attribution {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

export function captureAttribution(): void {
  if (typeof window === "undefined") return;

  const stored = readStored();
  const params = new URLSearchParams(window.location.search);
  const captured: Attribution = { ...stored };

  TRACKED_PARAMS.forEach((param) => {
    const value = params.get(param);
    if (value) captured[param] = value;
  });

  if (!captured.landing_page) {
    captured.landing_page = window.location.pathname;
  }
  if (!captured.referrer && document.referrer) {
    captured.referrer = document.referrer;
  }

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
  } catch {
    // sessionStorage indisponível: o lead segue sem atribuição.
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  return readStored();
}
