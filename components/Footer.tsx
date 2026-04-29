import Link from "next/link";

const cities = [
  { slug: "paris", label: "Paris" },
  { slug: "lyon", label: "Lyon" },
  { slug: "cannes", label: "Cannes" },
  { slug: "marseille", label: "Marseille" },
  { slug: "lille", label: "Lille" },
  { slug: "rennes", label: "Rennes" },
];

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-3.5 h-3.5 shrink-0"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

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
              Agence de design d'espaces, France & International
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
                <a href="mailto:n.revel@novaus.fr" className="hover:text-gold transition-colors">
                  n.revel@novaus.fr
                </a>
              </li>
              <li>
                <a href="tel:+33632750773" className="hover:text-gold transition-colors">
                  +33 (0)6 32 75 07 73
                </a>
              </li>
            </ul>

            {/* LinkedIn */}
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://fr.linkedin.com/in/nicolasrevel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Nicolas Revel"
                className="flex items-center gap-1.5 text-cream/40 hover:text-gold transition-colors text-xs"
              >
                <LinkedInIcon />
                Nicolas Revel
              </a>
              <span className="text-cream/20">·</span>
              <a
                href="https://fr.linkedin.com/company/novaus.fr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Novaus"
                className="flex items-center gap-1.5 text-cream/40 hover:text-gold transition-colors text-xs"
              >
                <LinkedInIcon />
                Novaus
              </a>
            </div>

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
            © {new Date().getFullYear()} Novaus, Tous droits réservés.
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
