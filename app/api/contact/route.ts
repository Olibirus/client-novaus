import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // TODO: brancher vers email (Resend, Brevo) ou base de données
    // Pour le MVP, on logge simplement
    console.log("[NOVAUS CONTACT FORM]", {
      timestamp: new Date().toISOString(),
      ...body,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
