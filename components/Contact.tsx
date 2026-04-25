"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative bg-ink py-28 lg:py-40 border-t border-line overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url(/assets/hero-bg.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />

      <div className="relative max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {/* Left: invitation */}
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-baseline gap-4 mb-8">
              <span className="section-num text-2xl">08</span>
              <span className="text-[10px] uppercase tracking-widest text-cream/40">
                Travailler avec nous
              </span>
            </div>

            <h2 className="font-display font-light text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] text-cream">
              Parlons de votre <em className="text-gold not-italic">prochain&nbsp;espace.</em>
            </h2>

            <p className="mt-8 text-cream/70 leading-relaxed font-light text-lg max-w-md">
              Salon, lancement, roadshow, showroom, toutes les conversations
              commencent par un brief. Envoyez-nous le vôtre.
            </p>

            <div className="mt-12 space-y-6 border-t border-line pt-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-1">
                  Email
                </p>
                <a
                  href="mailto:n.revel@novaus.fr"
                  className="text-cream hover:text-gold transition-colors"
                >
                  n.revel@novaus.fr
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-1">
                  Téléphone
                </p>
                <a
                  href="tel:+33632750773"
                  className="text-cream hover:text-gold transition-colors"
                >
                  +33 (0)6 32 75 07 73
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-1">
                  Direction
                </p>
                <p className="text-cream">Nicolas Revel, Fondateur</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Field label="Prénom" name="firstName" required />
                <Field label="Nom" name="lastName" required />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Field label="Email" name="email" type="email" required />
                <Field label="Société" name="company" />
              </div>
              <Field label="Téléphone" name="phone" type="tel" />

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-cream/50 mb-2">
                  Type de projet
                </label>
                <select
                  name="projectType"
                  className="w-full bg-transparent border-b border-line py-3 text-cream focus:border-gold outline-none transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-ink">
                    Sélectionner…
                  </option>
                  {[
                    "Stand traditionnel",
                    "Stand modulaire",
                    "Roadshow",
                    "Showroom / boutique",
                    "Pop-up / corner",
                    "Autre",
                  ].map((o) => (
                    <option key={o} value={o} className="bg-ink">
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-cream/50 mb-2">
                  Votre message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-line py-3 text-cream focus:border-gold outline-none resize-none transition-colors"
                  placeholder="Salon visé, dates, surface, contexte…"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <p className="text-[10px] uppercase tracking-widest text-cream/40">
                  Réponse sous 24 h ouvrées
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-extra-wide border border-gold text-gold px-7 py-3.5 hover:bg-gold hover:text-ink transition-all disabled:opacity-50"
                >
                  {status === "sending" ? "Envoi…" : "Envoyer le brief"}
                  <span aria-hidden>→</span>
                </button>
              </div>

              {status === "ok" && (
                <p className="text-sm text-gold border-t border-gold/30 pt-4">
                  Merci. Nous revenons vers vous très vite.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-bronze border-t border-bronze/30 pt-4">
                  Une erreur est survenue. Vous pouvez aussi nous écrire à
                  n.revel@novaus.fr.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-widest text-cream/50 mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-line py-3 text-cream focus:border-gold outline-none transition-colors"
      />
    </div>
  );
}
