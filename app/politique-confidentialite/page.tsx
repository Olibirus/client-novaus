import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et gestion des données personnelles, Novaus.fr",
  robots: { index: false },
};

export default function Page() {
  return (
    <main className="bg-ink text-cream">
      <Nav variant="page" />
      <article className="max-w-3xl mx-auto px-6 lg:px-12 pt-40 pb-32">
        <p className="text-[10px] uppercase tracking-widest text-gold mb-4">
          Données personnelles
        </p>
        <h1 className="font-display font-light text-5xl lg:text-6xl mb-12">
          Politique de <em className="text-gold not-italic">confidentialité</em>
        </h1>

        <div className="space-y-10 text-cream/80 leading-relaxed">
          <Block title="Responsable du traitement">
            <p>
              Le responsable du traitement des données collectées sur ce site
              est Nicolas Revel, fondateur de Novaus.
            </p>
            <p>Contact&nbsp;: n.revel@novaus.fr</p>
          </Block>

          <Block title="Données collectées">
            <p>
              Lorsque vous utilisez le formulaire de contact, nous collectons
              les informations que vous nous transmettez volontairement&nbsp;:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-cream/70">
              <li>Prénom et nom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Société (facultatif)</li>
              <li>Type de projet et message</li>
            </ul>
          </Block>

          <Block title="Finalités du traitement">
            <p>Vos données sont utilisées uniquement pour&nbsp;:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-cream/70">
              <li>Répondre à vos demandes de contact ou de devis</li>
              <li>Échanger sur votre projet</li>
              <li>Vous adresser des propositions commerciales adaptées</li>
            </ul>
            <p className="mt-3">
              Aucune donnée n'est vendue, louée ou transmise à des tiers à des
              fins commerciales.
            </p>
          </Block>

          <Block title="Durée de conservation">
            <p>
              Les données collectées via le formulaire sont conservées pour une
              durée de 3 ans à compter du dernier échange, conformément aux
              recommandations de la CNIL en matière de prospection commerciale
              B2B.
            </p>
          </Block>

          <Block title="Vos droits">
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez des
              droits suivants&nbsp;:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-cream/70">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à n.revel@novaus.fr. Vous
              disposez également du droit d'introduire une réclamation auprès
              de la CNIL (www.cnil.fr).
            </p>
          </Block>

          <Block title="Cookies">
            <p>
              Le site novaus.fr n'utilise actuellement aucun cookie de
              traçage, publicitaire ou de mesure d'audience tiers. Seuls des
              cookies techniques strictement nécessaires au fonctionnement du
              site peuvent être déposés.
            </p>
          </Block>

          <Block title="Sécurité">
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données contre tout accès non
              autorisé, modification, divulgation ou destruction.
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
