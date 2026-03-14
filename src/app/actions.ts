"use server";

export type FormState = {
  success?: boolean;
  error?: string;
  message?: string;
};

export async function subscribeToLaunch(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get("email") as string;

  if (!email || typeof email !== "string") {
    return { success: false, error: "Por favor, informe seu e-mail." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { success: false, error: "Por favor, informe um e-mail válido." };
  }

  try {
    // TODO: Integre aqui com seu serviço preferido:
    // - Resend, Mailchimp, ConvertKit para newsletter
    // - Supabase, Airtable ou banco de dados para armazenar os leads
    // - Webhook para Zapier/Make
    console.log("[Pre-launch signup]", email.trim());

    return {
      success: true,
      message:
        "Obrigado! Você será avisado assim que lançarmos. Fique de olho no seu e-mail.",
    };
  } catch {
    return {
      success: false,
      error: "Algo deu errado. Tente novamente em alguns instantes.",
    };
  }
}
