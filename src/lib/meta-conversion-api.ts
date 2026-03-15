import { createHash } from "crypto";

const META_GRAPH_API_VERSION = "v21.0";
const META_GRAPH_URL = "https://graph.facebook.com";

function sha256(text: string): string {
  return createHash("sha256").update(text, "utf8").digest("hex");
}

function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, "").trim();
}

export type SendLeadEventParams = {
  email: string;
  phone?: string;
  eventSourceUrl?: string;
  eventId?: string;
};

/**
 * Envia evento Lead para a Meta Conversion API (server-side).
 * Requer META_CONVERSION_API_ACCESS_TOKEN e pixel ID configurados.
 */
export async function sendLeadEvent(
  pixelId: string,
  accessToken: string,
  params: SendLeadEventParams
): Promise<{ success: boolean; error?: string }> {
  const { email, phone, eventSourceUrl, eventId } = params;

  const userData: Record<string, string> = {};
  if (email) {
    userData.em = sha256(normalizeEmail(email));
  }
  if (phone) {
    const normalized = normalizePhone(phone);
    if (normalized) userData.ph = sha256(normalized);
  }

  if (!userData.em && !userData.ph) {
    return { success: false, error: "Email or phone required for user_data" };
  }

  const eventTime = Math.floor(Date.now() / 1000);
  const url = `${META_GRAPH_URL}/${META_GRAPH_API_VERSION}/${pixelId}/events`;
  const searchParams = new URLSearchParams({ access_token: accessToken });

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: eventTime,
        action_source: "website",
        event_source_url: eventSourceUrl || undefined,
        event_id: eventId,
        user_data: userData,
      },
    ],
  };

  // Remove undefined fields so Meta doesn't complain
  // Meta exige event_source_url para eventos de website
  const data = payload.data[0];
  if (data && !data.event_source_url) delete (data as Record<string, unknown>).event_source_url;
  if (data && !data.event_id) delete (data as Record<string, unknown>).event_id;

  try {
    const res = await fetch(`${url}?${searchParams.toString()}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = (await res.json()) as {
      events_received?: number;
      error?: { message: string };
    };

    if (!res.ok) {
      const msg = json?.error?.message ?? `HTTP ${res.status}`;
      return { success: false, error: msg };
    }

    if (json.events_received === 0) {
      return { success: false, error: json?.error?.message ?? "No events received" };
    }

    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, error: message };
  }
}
