const BOFU_URL = process.env.COGNIZY_BOFU_FORM_URL;
const VIDEO_URL = process.env.COGNIZY_VIDEO_FORM_URL;

export type LeadPayload = {
  Nome?: string;
  Email?: string;
  Telefone?: string;
  Imobiliaria?: string;
  Contexto?: string;
  Origem?: string;
  Atuacao?: string;
  VolumeVendas?: string;
  CarteiraLocacao?: string;
  TamanhoTime?: string;
  attribution?: Record<string, string>;
};

export function getFormUrl(origem?: string): string | undefined {
  return origem === "landing-video" ? VIDEO_URL : BOFU_URL;
}

function attributionFields(
  attribution: Record<string, string> = {},
): Record<string, string> {
  return {
    "utm-source": attribution.utm_source ?? "",
    "utm-campaign": attribution.utm_campaign ?? "",
    "utm-content": attribution.utm_content ?? "",
    gclid: attribution.gclid ?? "",
    fbclid: attribution.fbclid ?? "",
    "landing-page": attribution.landing_page ?? "",
    referrer: attribution.referrer ?? "",
    _hp: "",
  };
}

export function toCognizyPayload(lead: LeadPayload): Record<string, string> {
  const shared = {
    name: lead.Nome ?? "",
    "company-name": lead.Imobiliaria ?? "",
    phone: lead.Telefone ?? "",
    email: lead.Email ?? "",
    operations: lead.Atuacao ?? "",
    ...attributionFields(lead.attribution),
  };

  if (lead.Origem === "landing-video") {
    return {
      ...shared,
      context: lead.Contexto ?? "",
      origem: lead.Origem,
    };
  }

  return {
    ...shared,
    "sales-volume": lead.VolumeVendas ?? "",
    "rental-portfolio": lead.CarteiraLocacao ?? "",
    "team-size": lead.TamanhoTime ?? "",
  };
}
