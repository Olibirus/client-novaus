import SectionHeader from "./SectionHeader";
import ImagePlaceholder from "./ImagePlaceholder";

const pillars = [
  { label: "Design", text: "Faire du design une promesse tenue." },
  { label: "Espace", text: "Faire de l'espace une expérience." },
  { label: "Expérience", text: "Faire de l'expérience un levier stratégique." },
  { label: "Ambassadeur", text: "Faire de chaque visiteur un ambassadeur." },
];

const values = [
  "Pragmatisme",
  "Responsabilité",
  "Honnêteté",
  "Ingéniosité",
  "Curiosité",
];

export default function Mission() {
  return (
    <section id="mission" className="relative bg-ink py-28 lg:py-40 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <SectionHeader
          num="02"
          eyebrow="Notre mission"
          title={
            <>
              Créer des expériences <em className="text-gold not-italic">construites,</em>
              <br />
              sensibles et mémorables.
            </>
          }
        />

        {/* Image left, four pillars right */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="col-span-12 lg:col-span-5">
            <ImagePlaceholder
              id="mission-detail"
              ratio="aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[600px]"
              label="Détail matière, lumière, structure"
              prompt="Close-up architectural detail of an exhibition stand corner. Brushed aluminum frame meeting warm walnut wood and a backlit translucent panel. Moody dramatic side-lighting (warm gold + cool key light), shallow depth of field, no people, no logos, vertical 4:5. Premium editorial photography, sharp on the joinery, slight haze in background."
            />
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line h-full">
              {pillars.map((p, i) => (
                <div
                  key={p.label}
                  className="bg-ink p-10 lg:p-12 group hover:bg-ink-soft transition-colors flex flex-col justify-between min-h-[220px]"
                >
                  <span className="section-num text-sm">0{i + 1}</span>
                  <div className="mt-auto">
                    <h3 className="font-display text-3xl lg:text-4xl text-cream font-light">
                      {p.label}
                    </h3>
                    <p className="mt-3 text-cream/60 leading-relaxed text-sm">
                      {p.text}
                    </p>
                    <div className="mt-6 w-8 h-px bg-gold/50 group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values band (compact, single line) */}
        <div className="mt-20 lg:mt-28 pt-10 border-t border-line">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
            <p className="text-[10px] uppercase tracking-widest text-cream/40 lg:w-48 shrink-0">
              Cinq valeurs fondatrices
            </p>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {values.map((v, i) => (
                <li key={v} className="flex items-center gap-3">
                  <span className="text-gold text-xs">·</span>
                  <span className="font-display text-xl lg:text-2xl text-cream font-light">
                    {v}
                  </span>
                  {i < values.length - 1 && (
                    <span className="hidden lg:inline-block w-6 h-px bg-line ml-5" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
