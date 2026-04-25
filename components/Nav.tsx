"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#histoire", label: "Histoire" },
  { href: "#mission", label: "Mission" },
  { href: "#approche", label: "Approche" },
  { href: "#espaces", label: "Espaces" },
  { href: "#engagement", label: "Engagement" },
  { href: "#realisations", label: "Réalisations" },
];

export default function Nav({ variant = "home" }: { variant?: "home" | "page" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = variant === "home";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-ink/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Novaus, accueil"
        >
          <img
            src="/assets/logo.png"
            alt="Novaus"
            className="h-9 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {isHome ? (
            links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] uppercase tracking-extra-wide text-cream/70 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))
          ) : (
            <Link
              href="/"
              className="text-[11px] uppercase tracking-extra-wide text-cream/70 hover:text-gold transition-colors"
            >
              ← Retour à l'accueil
            </Link>
          )}
        </nav>

        <a
          href={isHome ? "#contact" : "/#contact"}
          className="hidden lg:inline-flex items-center gap-2 text-[11px] uppercase tracking-extra-wide border border-gold/40 text-gold px-5 py-2.5 hover:bg-gold hover:text-ink transition-all"
        >
          Travailler avec nous
          <span aria-hidden>→</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-cream"
          aria-label="Menu"
        >
          <span className="block w-6 h-px bg-cream mb-1.5" />
          <span className="block w-6 h-px bg-cream mb-1.5" />
          <span className="block w-4 h-px bg-cream ml-auto" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-line">
          <div className="px-6 py-8 flex flex-col gap-5">
            {isHome ? (
              links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-extra-wide text-cream/80"
                >
                  {l.label}
                </a>
              ))
            ) : (
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-extra-wide text-cream/80"
              >
                ← Accueil
              </Link>
            )}
            <a
              href={isHome ? "#contact" : "/#contact"}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-extra-wide text-gold border border-gold/40 px-5 py-3 inline-block w-fit"
            >
              Travailler avec nous →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
