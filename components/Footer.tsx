import Link from "next/link";

const cities = [
  { slug: "paris", label: "Paris" },
  { slug: "lyon", label: "Lyon" },
  { slug: "marseille", label: "Marseille" },
  { slug: "lille", label: "Lille" },
  { slug: "rennes", label: "Rennes" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink-deep border-t border-line">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-12 gap-8">
          {/* Brand */}
          <div className="col-span-12 lg:col-span-4">
            <img src="/assets/logo.png" alt="Novaus" className="h-10 w-auto mb-6" />
            <p className="text-cream/60 leading-relaxed font-light max-w-sm">
              Le design comme trajectoire, l'expérience comme destination.
            </p>
            <p className="mt-6 text-[10px] uppercase tracking-widest text-cream/40">
              Agence de design d'espaces — France & International
            </p>
          </div>

          {/* Sitemap */}
          <div className="col-span-6 lg:col-span-2">
            <p className="text-[10px] uppercase tracking-widest text-gold mb-4">
              Site
            </p>
            <ul className="space-y-2.5 text-sm">
              {[
                ["#histoire", "Histoire"],
                ["#mission", "Mission"],
                ["#approche", "Approche"],
                ["#espaces", "Espaces"],
                ["#engagement", "Engagement"],
                ["#realisations", "Réalisations"],
                ["#contact", "Contact"],
              ].map(([h, l]) => (
                <li key={h}>
                  <Link
                    href={`/${h}`}
                    className="text-cream/60 hover:text-gold transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div className="col-span-6 lg:col-span-3">
            <p className="text-[10px] uppercase tracking-widest text-gold mb-4">
              Stands & expositions par ville
            </p>
            <ul className="space-y-2.5 text-sm">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}/`}
                    className="text-cream/60 hover:text-gold transition-colors"
                  >
                    Agence stand {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-12 lg:col-span-3">
            <p className="text-[10px] uppercase tracking-widest text-gold mb-4">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm text-cream/60">
              <li>Nicolas Revel</li>
              <li>
                <a href="mailto:n.revel@novaus.fr" className="hover:text-gold">
                  n.revel@novaus.fr
                </a>
              </li>
              <li>
                <a href="tel:+33632750773" className="hover:text-gold">
                  +33 (0)6 32 75 07 73
                </a>
              </li>
            </ul>
            <ul className="mt-6 space-y-2.5 text-xs">
              <li>
                <Link
                  href="/mentions-legales/"
                  className="text-cream/40 hover:text-gold transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite/"
                  className="text-cream/40 hover:text-gold transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} Novaus — Tous droits réservés.
          </p>
          <p className="text-[11px] text-cream/[0.12]">
            Développé par{" "}
            <a
              href="https://www.olibriusweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Olibrius
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
