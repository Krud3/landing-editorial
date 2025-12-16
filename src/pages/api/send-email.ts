import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const { nombre, email, telefono, motivo, mensaje, website, turnstileToken } = data;

    if (website) {
      return new Response(JSON.stringify({ message: "Bot detectado" }), { status: 400 });
    }
    
    if (!turnstileToken) {
      return new Response(
        JSON.stringify({ message: "Token de seguridad requerido" }),
        { status: 400 }
      );
    }

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: import.meta.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    );

    const turnstileResult = await turnstileResponse.json();

    if (!turnstileResult.success) {
      console.error("Turnstile falló:", turnstileResult);
      return new Response(
        JSON.stringify({ message: "Verificación de seguridad fallida" }),
        { status: 400 }
      );
    }

    if (!nombre || !email || !mensaje) {
      return new Response(
        JSON.stringify({ message: "Faltan campos obligatorios" }),
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Solicitudes Web <solicitudes@emhm.app>",
      to: ["contacto@emhm.app"],
      replyTo: email,
      subject: `Nuevo contacto web: ${motivo || "General"}`,
      html: `
        <h2>Nuevo mensaje de la webApp emhm.app</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || "No especificado"}</p>
        <p><strong>Motivo:</strong> ${motivo}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    if (error) {
      console.error("Error Resend:", error);
      return new Response(JSON.stringify({ message: "Error enviando email", error }), { status: 500 });
    }

    return new Response(
      JSON.stringify({ message: "Correo enviado exitosamente" }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Error API:", error);
    return new Response(
      JSON.stringify({ message: "Error procesando la solicitud" }), 
      { status: 500 }
    );
  }
};