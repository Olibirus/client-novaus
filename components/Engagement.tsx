import SectionHeader from "./SectionHeader";
import ImagePlaceholder from "./ImagePlaceholder";

const principles = [
  { tag: "Système", title: "Éco-conception & circularité" },
  { tag: "Engagement", title: "Limitation des déchets" },
  { tag: "Choix permanent", title: "Matériaux responsables" },
  { tag: "Alliance", title: "Partenariats solidaires" },
  { tag: "Discipline", title: "Modularité & réutilisation" },
];

export default function Engagement() {
  return (
    <section
      id="engagement"
      className="relative bg-ink py-28 lg:py-40 border-t border-line"
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <SectionHeader
          num="05"
          eyebrow="Notre engagement"
          title={
            <>
              La conscience <em className="text-gold not-italic">comme fondation.</em>
            </>
          }
        />

        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left image */}
          <div className="col-span-12 lg:col-span-5">
            <ImagePlaceholder
              id="engagement-materials"
              ratio="aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[520px]"
              label="Matériaux durables, échantillons, recyclage"
              prompt="Still-life of sustainable construction samples on a raw concrete surface. Stacked recycled wood blocks, cork tiles, eco-resin panels with green plant fibers visible, brushed brass tag with handwritten label. Soft natural daylight from above, no people, no text, no logos. Premium editorial photography, vertical 4:5, warm earthy palette."
            />
          </div>

          {/* Right text + principles */}
          <div className="col-span-12 lg:col-span-7 flex flex-col">
            <p className="text-cream/75 text-lg lg:text-xl leading-relaxed font-light max-w-xl">
              La responsabilité n'est pas un sujet additionnel. C'est une
              boussole. Chaque décision design intègre l'éco-conception, le
              sourcing responsable et la modularité.
            </p>

            <ul className="mt-10 divide-y divide-line border-y border-line">
              {principles.map((p, i) => (
                <li
                  key={p.title}
                  className="grid grid-cols-12 gap-4 py-5 px-2 hover:bg-ink-soft/40 transition-colors group"
                >
                  <div className="col-span-2 lg:col-span-1">
                    <span className="section-num text-sm">0{i + 1}</span>
                  </div>
                  <div className="col-span-4 lg:col-span-3">
                    <p className="text-[10px] uppercase tracking-widest text-bronze">
                      {p.tag}
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-8">
                    <h4 className="font-display text-xl text-cream font-light">
                      {p.title}
                    </h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
