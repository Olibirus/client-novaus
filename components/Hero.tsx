export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
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

      {/* Hero content — title block left-aligned, "Découvrir" centered on full width */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 min-h-screen flex flex-col justify-center pt-40 pb-40 lg:pb-44 w-full">
        <div className="max-w-5xl">
          <h1 className="font-display font-light text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-cream">
            Le design <em className="text-gold not-italic font-normal">comme trajectoire,</em>
            <br />
            l'expérience <em className="text-gold not-italic font-normal">comme destination.</em>
          </h1>

          <p className="mt-12 text-cream/95 text-base lg:text-lg max-w-2xl leading-relaxed font-light">
            Nous concevons des espaces qui ne se visitent pas, qui se vivent.
            Stands, showrooms, pop-up, roadshows. En France et partout où vos
            marques ont besoin d'exister.
          </p>
        </div>

        {/* Découvrir — horizontally centered on the page, below the title block */}
        <div className="mt-16 lg:mt-24 flex justify-center">
          <a
            href="#histoire"
            className="text-[11px] uppercase tracking-extra-wide text-cream/90 hover:text-gold transition-colors flex items-center gap-3 group"
          >
            Découvrir
            <span className="block w-12 h-px bg-cream/50 group-hover:bg-gold transition-colors" />
          </a>
        </div>
      </div>

      {/* Stats — pinned to the bottom of the hero */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 pb-10 lg:pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-cream/15">
            {[
              { n: "15+", l: "années d'expérience" },
              { n: "150+", l: "partenaires France & international" },
              { n: "30+", l: "designers freelance" },
              { n: "5", l: "typologies d'espaces maîtrisées" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center text-center">
                <p className="font-display text-3xl lg:text-4xl text-gold font-light">
                  {s.n}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-extra-wide text-cream/60 max-w-[14ch]">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
