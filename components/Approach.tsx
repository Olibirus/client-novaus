import SectionHeader from "./SectionHeader";

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
    sub: "La production devient une ingénierie responsable et précise.",
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

const journey = [
  { label: "Faire venir", title: "L'attraction", desc: "Capter, intriguer. Ralentir la marche du visiteur, puis l'arrêter." },
  { label: "Faire rester", title: "Faire vivre", desc: "Accueillir, orienter. Créer un climat de confiance — le visiteur se sent au bon endroit." },
  { label: "Transformer", title: "Engager", desc: "C'est le cœur du parcours. Le visiteur devient un contact, le contact devient une relation." },
  { label: "Faire durer", title: "Fidéliser", desc: "Novaus crée des espaces qui laissent une trace : un souvenir, un geste, un moment." },
  { label: "Faire savoir", title: "Évangéliser", desc: "Le visiteur devient un relais. La marque gagne en résonance." },
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
              <em className="text-gold not-italic">Elle se construit</em>, étape après étape.
            </>
          }
        />

        {/* Process timeline */}
        <div className="relative mb-32">
          <div className="absolute top-12 left-0 right-0 h-px bg-line hidden lg:block" />
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

        {/* Visitor journey */}
        <div className="border-t border-line pt-20">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <p className="text-[10px] uppercase tracking-widest text-cream/40">
                Le modèle relationnel
              </p>
              <h3 className="mt-4 font-display text-3xl lg:text-4xl text-cream font-light">
                De visiteur <em className="text-gold not-italic">à ambassadeur.</em>
              </h3>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <p className="text-cream/70 text-lg leading-relaxed font-light">
                On ne « conçoit » pas un stand. On orchestre une progression
                psychologique, une montée en engagement. Novaus traduit cette
                logique en architecture.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-line">
            {journey.map((j, i) => (
              <div key={j.title} className="bg-ink p-8 lg:p-10">
                <span className="section-num text-sm">0{i + 1}</span>
                <p className="mt-4 text-[10px] uppercase tracking-widest text-bronze">
                  {j.label}
                </p>
                <h4 className="mt-3 font-display text-2xl text-cream font-light">
                  {j.title}
                </h4>
                <p className="mt-4 text-sm text-cream/60 leading-relaxed">
                  {j.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
