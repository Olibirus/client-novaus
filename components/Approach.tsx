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

        {/* Process timeline */}
        <div className="relative">
          <div className="absolute top-3 left-0 right-0 h-px bg-line hidden lg:block" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {steps.map((s) => (
              <div key={s.num} className="relative">
                <div className="flex items-center gap-4 lg:block">
                  <div className="w-6 h-6 rounded-full border border-gold bg-ink flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </div>
                  <p className="lg:mt-8 text-[10px] uppercase tracking-widest text-cream/40">
                    Étape {s.num}
                  </p>
                </div>
                <h4 className="mt-4 lg:mt-3 font-display text-2xl text-cream font-light">
                  {s.label}
                </h4>
                <p className="mt-3 text-sm text-cream/60 leading-relaxed">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
