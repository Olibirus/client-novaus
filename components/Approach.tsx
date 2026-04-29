import SectionHeader from "./SectionHeader";
import ImagePlaceholder from "./ImagePlaceholder";

const steps = [
  {
    num: "01",
    label: "Cahier des charges",
    sub: "Le brief devient une exploration stratégique du message.",
  },
  {
    num: "02",
    label: "Concept",
    sub: "Le concept devient un récit spatial.",
  },
  {
    num: "03",
    label: "Production",
    sub: "Une ingénierie responsable et précise.",
  },
  {
    num: "04",
    label: "Montage",
    sub: "Le montage devient une promesse tenue.",
  },
  {
    num: "05",
    label: "Livraison",
    sub: "La livraison devient un début, pas une fin.",
  },
];

export default function Approach() {
  return (
    <section id="approche" className="relative bg-ink py-28 lg:py-40 border-t border-line">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <SectionHeader
          num="03"
          eyebrow="Notre approche"
          title={
            <>
              Une expérience ne s'improvise pas.
              <br />
              <em className="text-gold not-italic">Elle se construit.</em>
            </>
          }
        />

        {/* Editorial intro with side image */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center mb-20 lg:mb-28">
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <ImagePlaceholder
              id="approche-process"
              ratio="aspect-[16/10]"
              label="Mains au travail sur plans, maquettes, échantillons"
              prompt="Top-down flat-lay of a designer's worktable. Architectural blueprints partially rolled, wood and fabric swatches, brass measuring tools, a coffee cup, designer's hands sketching with a pencil (only hands visible, no faces). Warm cream paper, brass and walnut tones. Cinematic natural light from a window, slight grain, editorial magazine quality, 16:10."
            />
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 order-1 lg:order-2">
            <p className="text-cream/70 text-lg leading-relaxed font-light">
              Cinq étapes, une chorégraphie. Du premier brief à la livraison,
              chaque geste compte.
            </p>
          </div>
        </div>

        {/* Process timeline — editorial card flow with connecting line */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-line">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="group relative bg-ink p-8 lg:p-10 hover:bg-ink-soft transition-colors flex flex-col"
              >
                {/* Big background number */}
                <p className="font-display text-7xl lg:text-8xl text-cream/[0.06] group-hover:text-gold/20 font-light leading-none transition-colors select-none">
                  {s.num}
                </p>

                {/* Eyebrow with gold dot */}
                <div className="mt-6 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <p className="text-[10px] uppercase tracking-widest text-gold">
                    Étape {s.num}
                  </p>
                </div>

                {/* Title */}
                <h4 className="mt-3 font-display text-2xl text-cream font-light leading-tight">
                  {s.label}
                </h4>

                {/* Description */}
                <p className="mt-4 text-sm text-cream/60 leading-relaxed flex-grow">
                  {s.sub}
                </p>

                {/* Arrow connector to next step (desktop only, not on last) */}
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-7 h-7 rounded-full bg-ink border border-line items-center justify-center text-cream/40 group-hover:text-gold group-hover:border-gold/50 transition-colors"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
