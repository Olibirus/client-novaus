import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Novaus.fr",
  robots: { index: false },
};

export default function Page() {
  return (
    <main className="bg-ink text-cream">
      <Nav variant="page" />
      <article className="max-w-3xl mx-auto px-6 lg:px-12 pt-40 pb-32">
        <p className="text-[10px] uppercase tracking-widest text-gold mb-4">
          Informations légales
        </p>
        <h1 className="font-display font-light text-5xl lg:text-6xl mb-12">
          Mentions <em className="text-gold not-italic">légales</em>
        </h1>

        <div className="space-y-10 text-cream/80 leading-relaxed">
          <Block title="Éditeur du site">
            <p>Novaus</p>
            <p>Représentant légal&nbsp;: Nicolas Revel</p>
            <p>Email&nbsp;: n.revel@novaus.fr</p>
            <p>Téléphone&nbsp;: +33 (0)6 32 75 07 73</p>
            <p className="text-cream/50 italic text-sm mt-2">
              [SIRET, adresse postale et forme juridique à compléter par le client.]
            </p>
          </Block>

          <Block title="Directeur de la publication">
            <p>Nicolas Revel</p>
          </Block>

          <Block title="Hébergement">
            <p>Vercel Inc.</p>
            <p>340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
            <p>https://vercel.com</p>
          </Block>

          <Block title="Conception & développement">
            <p>
              Site conçu et développé par{" "}
              <a
                href="https://www.olibriusweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Olibrius
              </a>{" "}
              — agence digitale.
            </p>
          </Block>

          <Block title="Propriété intellectuelle">
            <p>
              L'ensemble des contenus présents sur ce site (textes, images,
              graphismes, logo, vidéos, photographies de réalisations) sont la
              propriété exclusive de Novaus ou de leurs ayants droit respectifs.
              Toute reproduction, représentation, modification, publication,
              transmission, dénaturation, totale ou partielle du site ou de son
              contenu, par quelque procédé que ce soit, et sur quelque support
              que ce soit est interdite sans l'autorisation écrite préalable de
              Novaus.
            </p>
          </Block>

          <Block title="Responsabilité">
            <p>
              Les informations contenues sur ce site sont aussi précises que
              possible. Cependant, Novaus ne saurait être tenu responsable des
              omissions, des inexactitudes ou des carences dans la mise à jour,
              qu'elles soient de son fait ou du fait des tiers partenaires.
            </p>
          </Block>

          <Block title="Liens hypertextes">
            <p>
              Les liens hypertextes mis en place dans le cadre du présent site
              en direction d'autres ressources présentes sur le réseau internet
              ne sauraient engager la responsabilité de Novaus.
            </p>
          </Block>

          <Block title="Droit applicable">
            <p>
              Le présent site et ses mentions légales sont régis par le droit
              français. En cas de litige, les tribunaux français seront seuls
              compétents.
            </p>
          </Block>
        </div>
      </article>
      <Footer />
    </main>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl text-gold mb-4 font-light">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
