import SectionHeader from "./SectionHeader";

const principles = [
  { tag: "Un système", title: "Éco-conception & circularité" },
  { tag: "Un engagement", title: "Limitation des déchets" },
  { tag: "Un choix permanent", title: "Matériaux responsables" },
  { tag: "Une alliance", title: "Partenariats solidaires" },
  { tag: "Une discipline", title: "Modularité & réutilisation" },
];

const value = [
  { title: "Décisions croisées", desc: "Design et conception alignés dès l'origine — un levier direct pour réduire les coûts." },
  { title: "Matériaux durables", desc: "Achats responsables, fournisseurs qualitatifs à prix compétitifs, recyclabilité." },
  { title: "Logistique optimisée", desc: "Mutualisation des transports, stockage rationalisé, déploiements coordonnés." },
  { title: "Efficience projet", desc: "Rentabilité maîtrisée, satisfaction client durable, valeur réelle livrée." },
];

export default function Engagement() {
  return (
    <section id="engagement" className="relative bg-ink py-28 lg:py-40 border-t border-line">
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

        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-24">
          <div className="col-span-12 lg:col-span-4">
            <p className="text-cream/70 text-lg leading-relaxed font-light">
              La responsabilité n'est pas un sujet « additionnel ». C'est une
              boussole.
            </p>
            <p className="mt-6 text-cream/60 leading-relaxed">
              Eco-conception + achats responsables + gestion des risques +
              déploiement&nbsp;= ingénierie de valeur.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line">
              {principles.map((p) => (
                <li
                  key={p.title}
                  className="bg-ink p-7 hover:bg-ink-soft transition-colors group"
                >
                  <p className="text-[10px] uppercase tracking-widest text-bronze">
                    {p.tag}
                  </p>
                  <h4 className="mt-3 font-display text-xl text-cream font-light">
                    {p.title}
                  </h4>
                  <div className="mt-5 w-6 h-px bg-gold/50 group-hover:w-12 transition-all" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Value engineering */}
        <div className="border-t border-line pt-20">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 lg:col-span-6">
              <p className="text-[10px] uppercase tracking-widest text-cream/40">
                Alignement financier
              </p>
              <h3 className="mt-4 font-display text-3xl lg:text-4xl text-cream font-light">
                Ingénierie <em className="text-gold not-italic">de valeur.</em>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {value.map((v, i) => (
              <div
                key={v.title}
                className="border border-line p-8 hover:border-gold/40 transition-colors"
              >
                <span className="section-num text-sm">0{i + 1}</span>
                <h4 className="mt-5 font-display text-xl text-cream font-light">
                  {v.title}
                </h4>
                <p className="mt-3 text-sm text-cream/60 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
