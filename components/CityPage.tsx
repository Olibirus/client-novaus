import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";
import type { CityData } from "@/lib/cities";
import { cities } from "@/lib/cities";

export default function CityPage({ city }: { city: CityData }) {
  const otherCities = Object.values(cities).filter((c) => c.slug !== city.slug);

  return (
    <main className="relative bg-ink text-cream">
      <Nav variant="page" />

      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 border-b border-line overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url(/assets/hero-bg.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />

        <div className="relative max-w-8xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8 text-[10px] uppercase tracking-widest text-cream/40">
            <Link href="/" className="hover:text-gold">
              Novaus
            </Link>
            <span>/</span>
            <span>Agences par ville</span>
            <span>/</span>
            <span className="text-gold">{city.name}</span>
          </div>

          <p className="text-[10px] uppercase tracking-widest text-gold mb-4">
            {city.region} · Stand & design d'espaces
          </p>
          <h1 className="font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] tracking-tight max-w-5xl">
            Agence de stand &<br />
            <em className="text-gold not-italic">design d'espaces</em> à {city.name}.
          </h1>
          <p className="mt-10 max-w-3xl text-cream/70 text-lg lg:text-xl leading-relaxed font-light">
            {city.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-extra-wide border border-gold text-gold px-7 py-3.5 hover:bg-gold hover:text-ink transition-all"
            >
              Demander un devis {city.name}
              <span aria-hidden>→</span>
            </a>
            <a
              href="/#realisations"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-extra-wide border border-cream/20 text-cream/70 px-7 py-3.5 hover:border-cream/50 hover:text-cream transition-all"
            >
              Voir nos réalisations
            </a>
          </div>
        </div>
      </section>

      {/* Hook quote */}
      <section className="bg-cream text-ink py-20 lg:py-28 border-b border-ink/10">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <p className="font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.15] text-ink/90 max-w-5xl">
            « <em className="text-bronze">{city.hook}</em> »
          </p>
        </div>
      </section>

      {/* Venues */}
      <section className="bg-ink py-24 lg:py-32 border-b border-line">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-3">
              <span className="section-num text-2xl">01</span>
              <p className="mt-3 text-[10px] uppercase tracking-widest text-cream/40">
                Lieux d'exposition à {city.name}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2 className="font-display font-light text-[clamp(2rem,4vw,3.5rem)] leading-tight">
                Les parcs & écrins<br />
                <em className="text-gold not-italic">que nous maîtrisons.</em>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
            {city.venues.map((v, i) => (
              <div
                key={v.name}
                className="bg-ink p-10 hover:bg-ink-soft transition-colors"
              >
                <span className="section-num text-sm">0{i + 1}</span>
                <h3 className="mt-5 font-display text-2xl text-cream font-light">
                  {v.name}
                </h3>
                <p className="mt-3 text-cream/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fairs */}
      <section className="bg-ink py-24 lg:py-32 border-b border-line">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-3">
              <span className="section-num text-2xl">02</span>
              <p className="mt-3 text-[10px] uppercase tracking-widest text-cream/40">
                Salons couverts
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2 className="font-display font-light text-[clamp(2rem,4vw,3.5rem)] leading-tight">
                Les rendez-vous <em className="text-gold not-italic">incontournables</em><br />
                de {city.name}.
              </h2>
            </div>
          </div>

          <ul className="divide-y divide-line border-y border-line">
            {city.fairs.map((f, i) => (
              <li
                key={f.name}
                className="grid grid-cols-12 gap-4 py-6 px-2 hover:bg-ink-soft/40 transition-colors"
              >
                <div className="col-span-2 lg:col-span-1">
                  <span className="section-num text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-10 lg:col-span-5">
                  <h4 className="font-display text-xl lg:text-2xl text-cream font-light">
                    {f.name}
                  </h4>
                </div>
                <div className="col-span-6 lg:col-span-3">
                  <p className="text-sm text-cream/60">{f.sector}</p>
                </div>
                <div className="col-span-6 lg:col-span-3 text-right">
                  <p className="text-sm text-bronze">{f.period}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sectors + Local context */}
      <section className="bg-cream text-ink py-24 lg:py-32 border-b border-ink/10">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-5">
              <span className="section-num text-2xl text-bronze">03</span>
              <p className="mt-3 text-[10px] uppercase tracking-widest text-ink/50">
                Secteurs d'expertise à {city.name}
              </p>
              <h2 className="mt-5 font-display font-light text-[clamp(1.8rem,3.5vw,3rem)] leading-tight text-ink">
                Les marchés <em className="text-bronze not-italic">que nous servons.</em>
              </h2>
              <ul className="mt-10 grid grid-cols-1 gap-3">
                {city.sectors.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-4 text-ink/80 border-b border-ink/10 pb-3"
                  >
                    <span className="w-6 h-px bg-bronze" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <span className="section-num text-2xl text-bronze">04</span>
              <p className="mt-3 text-[10px] uppercase tracking-widest text-ink/50">
                Logistique locale
              </p>
              <h2 className="mt-5 font-display font-light text-[clamp(1.8rem,3.5vw,3rem)] leading-tight text-ink">
                Notre ancrage <em className="text-bronze not-italic">à {city.name}.</em>
              </h2>
              <p className="mt-10 text-ink/75 text-lg leading-relaxed font-light">
                {city.localContext}
              </p>

              {/* Service grid */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  "Stand sur-mesure",
                  "Stand modulaire",
                  "Pop-up & corner",
                  "Roadshow",
                  "Showroom",
                  "Scénographie",
                ].map((s) => (
                  <div
                    key={s}
                    className="border border-ink/15 px-5 py-4 hover:border-bronze hover:bg-ink/5 transition-colors"
                  >
                    <p className="text-xs uppercase tracking-extra-wide text-ink/70">
                      {s} {city.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-ink py-24 lg:py-32 border-b border-line">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 lg:col-span-8">
              <p className="text-[10px] uppercase tracking-widest text-gold mb-4">
                Prêt·e à briefer ?
              </p>
              <h2 className="font-display font-light text-[clamp(2rem,4vw,3.5rem)] leading-tight">
                {city.cta}
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:text-right">
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-extra-wide border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-ink transition-all"
              >
                Démarrer un projet à {city.name}
                <span aria-hidden>→</span>
              </a>
              <p className="mt-4 text-xs text-cream/50 lg:text-right">
                ou&nbsp;
                <a href="mailto:n.revel@novaus.fr" className="text-gold hover:underline">
                  n.revel@novaus.fr
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="bg-ink-deep py-20 border-b border-line">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-8">
            Nous intervenons aussi à
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}/`}
                className="group border border-line p-6 hover:border-gold/50 hover:bg-ink-soft transition-all"
              >
                <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-2">
                  {c.region}
                </p>
                <p className="font-display text-2xl text-cream font-light group-hover:text-gold transition-colors">
                  {c.name} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* JSON-LD LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: `Novaus, Agence de stand ${city.name}`,
            description: city.description,
            url: `https://novaus.fr/${city.slug}/`,
            areaServed: { "@type": "City", name: city.name },
            email: "n.revel@novaus.fr",
            telephone: "+33632750773",
            serviceType: [
              "Conception de stand sur-mesure",
              "Stand modulaire",
              "Pop-up store",
              "Roadshow",
              "Showroom",
              "Scénographie événementielle",
            ],
          }),
        }}
      />
    </main>
  );
}
