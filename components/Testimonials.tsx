const testimonials = [
  {
    quote:
      "Une équipe qui ne se contente pas d'exécuter — elle interroge le brief, propose, défend. Le stand a transformé notre présence salon en vraie destination.",
    author: "Directrice Marketing",
    company: "Industrie cosmétique",
  },
  {
    quote:
      "Un partenaire d'une rigueur rare. Du concept à la livraison, chaque jalon a été tenu. Et le résultat dépasse ce qu'on avait imaginé.",
    author: "Responsable Communication",
    company: "Groupe industriel",
  },
  {
    quote:
      "Ils pensent comme des stratèges et livrent comme des ingénieurs. Le ROI de notre dernier salon a doublé.",
    author: "Brand Director",
    company: "Tech B2B",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-cream text-ink py-28 lg:py-40">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-baseline gap-4">
              <span className="section-num text-2xl text-bronze">07</span>
              <span className="text-[10px] uppercase tracking-widest text-ink/50">
                Ils en parlent
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-display font-light text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-ink">
              La meilleure preuve <em className="text-bronze not-italic">— c'est eux.</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {testimonials.map((t, i) => (
            <figure key={i} className="bg-cream p-10 lg:p-12 flex flex-col">
              <div className="text-bronze font-display text-5xl leading-none mb-6">
                "
              </div>
              <blockquote className="font-display text-xl text-ink/85 leading-snug font-light flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-ink/10">
                <p className="text-sm text-ink font-medium">{t.author}</p>
                <p className="text-xs text-ink/50 mt-0.5">{t.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-xs text-ink/40 italic max-w-2xl">
          Témoignages anonymisés. Références clients communicables sur demande.
        </p>
      </div>
    </section>
  );
}
