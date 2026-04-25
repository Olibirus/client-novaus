import SectionHeader from "./SectionHeader";

const spaces = [
  {
    name: "Stand traditionnel",
    desc: "Liberté totale, formes sur-mesure, narration immersive.",
    keywords: "Sur-mesure · Signature · Architecture",
  },
  {
    name: "Stand modulaire",
    desc: "Agile, durable, scalable et optimisé pour des déploiements multiples.",
    keywords: "Réutilisable · Éco-conçu · Adaptable",
  },
  {
    name: "Roadshows",
    desc: "L'expérience qui se déplace vers l'audience. Chaque ville devient une nouvelle scène.",
    keywords: "Tournée · Mobile · Logistique",
  },
  {
    name: "Showrooms & boutiques",
    desc: "L'expérience continue, chaque jour, de manière cohérente et directionnelle.",
    keywords: "Permanent · Retail · Brand land",
  },
  {
    name: "Pop-up & corners",
    desc: "Créativité condensée, émotion instantanée. Un format court, un impact long.",
    keywords: "Éphémère · Capsule · Impact",
  },
  {
    name: "Sourcing & ingénierie",
    desc: "Réseau de 150+ partenaires, 30+ designers freelance. Production maîtrisée partout.",
    keywords: "Production · Veille · Partenaires",
  },
];

export default function Spaces() {
  return (
    <section id="espaces" className="relative bg-cream text-ink py-28 lg:py-40">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <SectionHeader
          num="04"
          eyebrow="Typologies d'espaces"
          title={
            <>
              La <em className="text-bronze not-italic">grammaire</em> Novaus.
            </>
          }
          invert
        />

        <p className="max-w-2xl text-ink/70 text-lg leading-relaxed font-light mb-16 lg:mb-24">
          Pour répondre à tous les enjeux, Novaus maîtrise toute la diversité
          des espaces — chaque projet en est la langue.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
          {spaces.map((s, i) => (
            <div
              key={s.name}
              className="bg-cream p-10 lg:p-12 group hover:bg-cream-warm transition-colors min-h-[280px] flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="section-num text-sm">
                  0{i + 1}
                </span>
                <span className="text-ink/30 group-hover:text-bronze transition-colors">
                  →
                </span>
              </div>
              <h3 className="mt-8 font-display text-3xl text-ink font-light">
                {s.name}
              </h3>
              <p className="mt-4 text-ink/70 leading-relaxed flex-1">{s.desc}</p>
              <p className="mt-6 text-[10px] uppercase tracking-widest text-bronze">
                {s.keywords}
              </p>
            </div>
          ))}
        </div>

        {/* Reach band */}
        <div className="mt-24 lg:mt-32 grid grid-cols-12 gap-6 items-center border-t border-ink/10 pt-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[10px] uppercase tracking-widest text-ink/50">
              Une portée nationale & internationale
            </p>
            <h3 className="mt-4 font-display text-3xl lg:text-5xl text-ink font-light">
              Là où les marques <em className="text-bronze not-italic">en ont besoin.</em>
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="text-ink/70 text-lg leading-relaxed font-light">
              Novaus n'est pas un atelier isolé. C'est une organisation complète,
              agile, distribuée — capable d'accompagner les marques partout, de
              garantir une continuité logistique maîtrisée et d'offrir une
              présence rassurante pour les équipes locales et internationales.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <p className="font-display text-4xl text-bronze font-light">150+</p>
                <p className="mt-1 text-xs uppercase tracking-extra-wide text-ink/50">
                  Partenaires France & international
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-bronze font-light">30+</p>
                <p className="mt-1 text-xs uppercase tracking-extra-wide text-ink/50">
                  Designers freelance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
