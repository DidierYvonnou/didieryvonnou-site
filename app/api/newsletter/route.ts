import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get("email");

  if (!email) {
    return NextResponse.json(
      { success: false, message: "Adresse email manquante." },
      { status: 400 }
    );
  }

  const body = new URLSearchParams();
  body.append("fields[email]", String(email));
  body.append("ml-submit", "1");
  body.append("anticsrf", "true");

  const response = await fetch(
    "https://assets.mailerlite.com/jsonp/2372190/forms/188199473539712673/subscribe",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue. Merci de réessayer.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message:
      "Merci. Un email de confirmation vient de vous être envoyé.",
  });
}