export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/hero-bg.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
      <div className="absolute inset-0 grain" />

      {/* Top label */}
      <div className="absolute top-28 left-6 lg:left-12 z-10">
        <p className="text-[10px] uppercase tracking-widest text-cream/50">
          Novaus &nbsp;_&nbsp; Agence de design d'expériences
        </p>
      </div>

      {/* Side vertical text */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 z-10">
        <p className="text-[10px] uppercase tracking-widest text-cream/40 [writing-mode:vertical-rl] rotate-180">
          France &nbsp;·&nbsp; International &nbsp;·&nbsp; Depuis 2026
        </p>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 pb-24 lg:pb-32 w-full">
        <div className="max-w-5xl">
          <h1 className="font-display font-light text-[clamp(2.5rem,7vw,6.5rem)] leading-[1.02] tracking-tight text-cream">
            Le design <em className="text-gold not-italic font-normal">comme trajectoire,</em>
            <br />
            l'expérience <em className="text-gold not-italic font-normal">comme destination.</em>
          </h1>

          <div className="mt-12 flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
            <p className="text-cream/70 text-base lg:text-lg max-w-md leading-relaxed font-light">
              Nous concevons des espaces qui ne se visitent pas — qui se vivent.
              Stands, showrooms, pop-up, roadshows. En France et partout où vos
              marques ont besoin d'exister.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#histoire"
                className="text-[11px] uppercase tracking-extra-wide text-cream/80 hover:text-gold transition-colors flex items-center gap-3 group"
              >
                Découvrir
                <span className="block w-12 h-px bg-cream/40 group-hover:bg-gold transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats footer */}
        <div className="mt-20 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-cream/10">
          {[
            { n: "15+", l: "années d'expérience" },
            { n: "150+", l: "partenaires France & international" },
            { n: "30+", l: "designers freelance" },
            { n: "5", l: "typologies d'espaces maîtrisées" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-3xl lg:text-4xl text-gold font-light">
                {s.n}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-extra-wide text-cream/50">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
