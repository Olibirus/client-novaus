import SectionHeader from "./SectionHeader";

const pillars = [
  {
    label: "Design",
    text: "Faire du design une promesse tenue.",
  },
  {
    label: "Espace",
    text: "Faire de l'espace une expérience.",
  },
  {
    label: "Expérience",
    text: "Faire de l'expérience un levier stratégique.",
  },
  {
    label: "Ambassadeur",
    text: "Faire de chaque visiteur un client puis un ambassadeur.",
  },
];

const values = [
  { name: "Pragmatisme", desc: "Faire simple, juste, efficace." },
  { name: "Responsabilité", desc: "En design, en production, en impact." },
  { name: "Honnêteté", desc: "Transparence, clarté, fluidité des échanges." },
  { name: "Ingéniosité", desc: "Trouver des solutions élégantes dans la contrainte." },
  { name: "Curiosité", desc: "Explorer ce qui n'existe pas encore." },
];

export default function Mission() {
  return (
    <section id="mission" className="relative bg-ink py-28 lg:py-40">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <SectionHeader
          num="02"
          eyebrow="Notre mission"
          title={
            <>
              Créer des expériences <em className="text-gold not-italic">construites,</em>
              <br />
              sensibles, utiles et mémorables.
            </>
          }
        />

        {/* Four pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line mb-32">
          {pillars.map((p, i) => (
            <div
              key={p.label}
              className="bg-ink p-10 lg:p-12 group hover:bg-ink-soft transition-colors"
            >
              <span className="section-num text-sm">
                0{i + 1}
              </span>
              <h3 className="mt-6 font-display text-3xl text-cream font-light">
                {p.label}
              </h3>
              <p className="mt-4 text-cream/60 leading-relaxed">{p.text}</p>
              <div className="mt-8 w-8 h-px bg-gold/50 group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Five values */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-3">
            <p className="text-[10px] uppercase tracking-widest text-cream/40">
              Cinq piliers fondateurs
            </p>
            <h3 className="mt-4 font-display text-3xl lg:text-4xl text-cream font-light">
              Nos valeurs
            </h3>
            <p className="mt-6 text-cream/60 leading-relaxed text-sm">
              Elles ne sont pas affichées. Elles sont incarnées : dans un volume,
              une lumière, une circulation, une matière, un choix technique ou
              narratif.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <ul className="divide-y divide-line border-y border-line">
              {values.map((v, i) => (
                <li
                  key={v.name}
                  className="grid grid-cols-12 gap-4 py-7 group hover:bg-ink-soft/30 transition-colors px-2"
                >
                  <div className="col-span-2 lg:col-span-1">
                    <span className="section-num text-sm">0{i + 1}</span>
                  </div>
                  <div className="col-span-10 lg:col-span-4">
                    <h4 className="font-display text-xl lg:text-2xl text-cream font-light">
                      {v.name}
                    </h4>
                  </div>
                  <div className="col-span-12 lg:col-span-7">
                    <p className="text-cream/60 leading-relaxed">{v.desc}</p>
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
