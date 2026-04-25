import SectionHeader from "./SectionHeader";
import ImagePlaceholder from "./ImagePlaceholder";

const spaces = [
  {
    id: "stand-traditionnel",
    name: "Stand traditionnel",
    desc: "Liberté totale, formes sur-mesure, narration immersive.",
    keywords: "Sur-mesure · Signature · Architecture",
    prompt:
      "Custom-built exhibition stand with sculptural curved walls, walnut wood and brass details, integrated lighting, no people, no logos. Editorial wide shot 3:2.",
  },
  {
    id: "stand-modulaire",
    name: "Stand modulaire",
    desc: "Agile, durable, scalable. Optimisé pour des déploiements multiples.",
    keywords: "Réutilisable · Éco-conçu · Adaptable",
    prompt:
      "Modular aluminum-framed exhibition stand with interchangeable panels in cream and bronze tones, clean geometric grid, soft daylight, no people, no logos. 3:2.",
  },
  {
    id: "roadshow",
    name: "Roadshows",
    desc: "L'expérience qui se déplace vers l'audience. Chaque ville, une nouvelle scène.",
    keywords: "Tournée · Mobile · Logistique",
    prompt:
      "Travel cases stacked beside a partially built mobile pop-up structure on a city plaza at dusk. Warm streetlight glow, no faces, no logos, cinematic 3:2.",
  },
  {
    id: "showroom",
    name: "Showrooms & boutiques",
    desc: "L'expérience continue, chaque jour, cohérente et directionnelle.",
    keywords: "Permanent · Retail · Brand land",
    prompt:
      "Premium retail showroom interior, polished concrete floor, warm wood display modules, brass accents, soft suspended lighting, no people, no logos. Wide editorial shot 3:2.",
  },
  {
    id: "popup",
    name: "Pop-up & corners",
    desc: "Créativité condensée, émotion instantanée. Un format court, un impact long.",
    keywords: "Éphémère · Capsule · Impact",
    prompt:
      "Compact pop-up corner inside a department store, sculptural pedestal, single product display, dramatic spotlight, dark cream background, no people, no logos. 3:2.",
  },
  {
    id: "sourcing",
    name: "Sourcing & ingénierie",
    desc: "Réseau de 150+ partenaires, 30+ designers freelance. Production maîtrisée partout.",
    keywords: "Production · Veille · Partenaires",
    prompt:
      "Workshop scene, hands assembling a modular stand frame, sparks from welding in background, rich amber lighting, warm metal and wood tones, no faces visible, no logos. 3:2.",
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

        <p className="max-w-2xl text-ink/70 text-lg leading-relaxed font-light mb-16 lg:mb-20">
          Pour répondre à tous les enjeux, Novaus maîtrise la diversité des
          espaces. Chaque projet en est la langue.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {spaces.map((s, i) => (
            <article
              key={s.id}
              className="bg-cream group flex flex-col"
            >
              <ImagePlaceholder
                id={`space-${s.id}`}
                ratio="aspect-[3/2]"
                invert
                label={s.name}
                prompt={s.prompt}
              />
              <div className="mt-5 flex flex-col flex-1">
                <div className="flex items-center justify-between">
                  <span className="section-num text-sm text-bronze">
                    0{i + 1}
                  </span>
                  <span className="text-ink/30 group-hover:text-bronze transition-colors">
                    →
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl text-ink font-light">
                  {s.name}
                </h3>
                <p className="mt-2 text-ink/70 leading-relaxed text-sm flex-1">
                  {s.desc}
                </p>
                <p className="mt-4 text-[10px] uppercase tracking-widest text-bronze">
                  {s.keywords}
                </p>
              </div>
            </article>
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
              Novaus n'est pas un atelier isolé. C'est une organisation
              complète, agile, distribuée. Nous accompagnons les marques
              partout et garantissons une continuité logistique maîtrisée.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center">
                <p className="font-display text-4xl text-bronze font-light">150+</p>
                <p className="mt-1 text-xs uppercase tracking-extra-wide text-ink/50">
                  Partenaires France & international
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
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
