import SectionHeader from "./SectionHeader";
import ImagePlaceholder from "./ImagePlaceholder";

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

        {/* Two clean columns: text left, image right */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-6 lg:col-start-1 space-y-8">
            <p className="text-ink/80 text-lg lg:text-xl leading-relaxed font-light">
              Il y a des entreprises qui naissent d'un métier. Et d'autres,
              plus rares, qui naissent d'une vision. Novaus appartient à cette
              seconde catégorie.
            </p>
            <p className="text-ink/70 text-base lg:text-lg leading-relaxed">
              Novaus est né d'un constat simple. Dans un monde saturé d'images
              et de signaux, ce qui manque n'est pas l'information, c'est
              l'expérience.
            </p>
            <p className="text-ink/70 text-base lg:text-lg leading-relaxed">
              Fondée par Nicolas Revel, Novaus capitalise sur plus de 15 années
              de conception et de pilotage de projets pour des marques
              internationales au sein d'agences de référence.
            </p>

            {/* Signature stat */}
            <div className="pt-6 border-t border-ink/15">
              <p className="font-display text-5xl lg:text-6xl text-bronze font-light">
                15<span className="text-3xl lg:text-4xl">+</span>
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-ink/50">
                Années d'expérience capitalisées
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <ImagePlaceholder
              id="histoire-portrait"
              ratio="aspect-[4/5]"
              invert
              label="Portrait éditorial du fondateur"
              prompt="Editorial portrait, half-body, Nicolas Revel in quiet workshop or empty exhibition hall at dawn. Warm cream and bronze lighting, soft shadows, looking off-camera, hand resting on a wooden material sample. Cinematic, fashion-magazine grade, 4:5 vertical, neutral background, no logos."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
