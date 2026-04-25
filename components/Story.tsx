import SectionHeader from "./SectionHeader";

export default function Story() {
  return (
    <section id="histoire" className="relative bg-cream text-ink py-28 lg:py-40">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <SectionHeader
          num="01"
          eyebrow="Notre histoire"
          title={
            <>
              Une vision, <em className="text-bronze not-italic">avant un métier.</em>
            </>
          }
          invert
        />

        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-5 lg:col-start-4">
            <p className="text-ink/80 text-lg lg:text-xl leading-relaxed font-light">
              Il y a des entreprises qui naissent d'un métier. Et d'autres,
              plus rares, qui naissent d'une vision.
            </p>
            <p className="mt-6 text-ink/80 text-lg lg:text-xl leading-relaxed font-light">
              <span className="font-medium">Novaus appartient</span> à cette
              seconde catégorie.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <p className="text-ink/70 text-base leading-relaxed">
              Novaus est né d'un constat simple : dans un monde saturé d'images,
              de messages et de signaux, ce qui manque n'est pas l'information…
              <span className="block mt-4 text-ink font-display italic text-2xl lg:text-3xl text-bronze">
                c'est l'expérience.
              </span>
            </p>
            <p className="mt-6 text-ink/60 text-sm leading-relaxed">
              Fondée par Nicolas Revel, Novaus capitalise sur plus de 15 années
              de conception et de pilotage de projets pour des marques
              internationales — Valeo, JVC, Sagemcom, NH Industries, Delta —
              au sein d'agences de référence du design d'espaces.
            </p>
          </div>
        </div>

        {/* Big quote band */}
        <div className="mt-32 border-t border-ink/10 pt-16">
          <p className="font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.15] text-ink/90 max-w-5xl">
            « Et si un stand devenait <em className="text-bronze">autre chose</em> qu'une structure&nbsp;? Une rencontre. Un chemin. Une émotion. Un moment qui change quelque chose, même brièvement, chez celui qui le traverse. »
          </p>
        </div>
      </div>
    </section>
  );
}
