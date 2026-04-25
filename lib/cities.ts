export type CityData = {
  slug: string;
  name: string;
  region: string;
  // SEO
  title: string;
  description: string;
  // Content
  intro: string;
  hook: string;
  venues: { name: string; desc: string }[];
  fairs: { name: string; sector: string; period: string }[];
  sectors: string[];
  localContext: string;
  cta: string;
};

export const cities: Record<string, CityData> = {
  paris: {
    slug: "paris",
    name: "Paris",
    region: "Île-de-France",
    title:
      "Stand sur-mesure Paris — Design d'espaces & scénographie de salons | Novaus",
    description:
      "Agence de design de stands à Paris : sur-mesure, modulaires, pop-up, showrooms. Intervention sur Viva Technology, Maison & Objet, SIAL, Paris Air Show, Salon de l'Agriculture, Foire de Paris.",
    intro:
      "Paris concentre la plus forte densité de salons professionnels d'Europe. Porte de Versailles, Paris Expo Villepinte, Paris Nord Villepinte, Le Bourget — chaque parc accueille des événements stratégiques où votre marque se mesure à ses concurrents directs.",
    hook:
      "À Paris, le standard est haut. Votre stand doit l'être aussi.",
    venues: [
      {
        name: "Paris Expo Porte de Versailles",
        desc: "8 pavillons, 220 000 m² — Maison & Objet, Foire de Paris, Salon de l'Agriculture, Salon du Cheval, MIPIM.",
      },
      {
        name: "Paris Nord Villepinte",
        desc: "10 halls, 246 000 m² — SIAL Paris, Bijorhca, JEC World, Equipmag, Pollutec.",
      },
      {
        name: "Paris Le Bourget",
        desc: "Plus grand salon aéronautique mondial, organisé tous les deux ans.",
      },
      {
        name: "Palais des Congrès / Carrousel du Louvre",
        desc: "Conventions corporate, lancements de marque, conférences premium.",
      },
    ],
    fairs: [
      { name: "Viva Technology", sector: "Tech & innovation", period: "Juin · Porte de Versailles" },
      { name: "Maison & Objet", sector: "Design & lifestyle", period: "Janvier & Septembre · Villepinte" },
      { name: "SIAL Paris", sector: "Agroalimentaire", period: "Octobre (biennal) · Villepinte" },
      { name: "Paris Air Show", sector: "Aéronautique & défense", period: "Juin (biennal) · Le Bourget" },
      { name: "Salon de l'Agriculture", sector: "Agriculture", period: "Février-mars · Porte de Versailles" },
      { name: "JEC World", sector: "Composites & matériaux", period: "Mars · Villepinte" },
      { name: "Equip Auto", sector: "Aftermarket automobile", period: "Octobre · Villepinte" },
      { name: "Pollutec", sector: "Environnement", period: "Itinérant · Villepinte" },
    ],
    sectors: [
      "Tech & SaaS",
      "Luxe & cosmétique",
      "Agroalimentaire",
      "Aéronautique & défense",
      "Industrie",
      "Mode & retail",
    ],
    localContext:
      "Notre équipe coordonne les opérations parisiennes en lien direct avec les services techniques de Viparis, GL Events et Comexposium : passage des plans, validation sécurité, montage de nuit, gestion des accès matériel. Notre réseau d'installateurs île-de-france garantit des montages dans les fenêtres horaires les plus contraintes.",
    cta:
      "Stand sur-mesure, modulaire, pop-up ou roadshow à Paris ? Discutons de votre prochain salon.",
  },
  lyon: {
    slug: "lyon",
    name: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    title:
      "Stand & design d'espaces Lyon — Eurexpo, Sirha, Pollutec | Novaus",
    description:
      "Agence de design de stands à Lyon. Conception sur-mesure, modulaire et roadshow pour Eurexpo : Sirha, Pollutec, Global Industrie, Solutrans, Préventica.",
    intro:
      "Lyon est le second pôle d'exposition de France. Eurexpo et le Centre de Congrès accueillent des salons B2B parmi les plus stratégiques du pays — particulièrement dans l'agroalimentaire, l'industrie et l'environnement.",
    hook:
      "À Lyon, l'industrie ne pardonne pas l'à-peu-près.",
    venues: [
      {
        name: "Eurexpo Lyon",
        desc: "140 000 m² couverts, 7 halls — Sirha, Pollutec, Global Industrie, Solutrans, Piscine Global.",
      },
      {
        name: "Centre de Congrès de Lyon",
        desc: "Cité Internationale — 24 000 m², conférences corporate et lancements premium.",
      },
      {
        name: "La Sucrière / Halle Tony Garnier",
        desc: "Espaces atypiques pour pop-up, lancements de marque et événements de prestige.",
      },
    ],
    fairs: [
      { name: "Sirha Lyon", sector: "Restauration & hôtellerie", period: "Janvier (biennal) · Eurexpo" },
      { name: "Pollutec", sector: "Environnement & énergie", period: "Octobre (biennal) · Eurexpo" },
      { name: "Global Industrie", sector: "Industrie 4.0", period: "Mars (alterné Paris/Lyon)" },
      { name: "Solutrans", sector: "Transport routier", period: "Novembre (biennal) · Eurexpo" },
      { name: "Préventica", sector: "Santé & sécurité au travail", period: "Itinérant · Eurexpo" },
      { name: "BePositive", sector: "Énergies renouvelables", period: "Mars · Eurexpo" },
    ],
    sectors: [
      "Agroalimentaire & restauration",
      "Industrie & manufacturing",
      "Énergie & environnement",
      "Santé & pharmaceutique",
      "Transport & logistique",
      "Bâtiment & construction",
    ],
    localContext:
      "Notre logistique inclut un sourcing local de prestataires lyonnais (impression grand format, mobilier, fleurs et aménagement végétal), une coordination directe avec GL Events Eurexpo, et un suivi de montage sur site. Pour les exposants nationaux, nous gérons le transport stockage Île-de-France ↔ Lyon en flux tendu.",
    cta:
      "Sirha, Pollutec, Global Industrie ? Briefons votre prochain stand lyonnais.",
  },
  marseille: {
    slug: "marseille",
    name: "Marseille",
    region: "Provence-Alpes-Côte d'Azur",
    title:
      "Stand sur-mesure Marseille — Parc Chanot, salons & événements | Novaus",
    description:
      "Agence de design d'espaces à Marseille : stands, showrooms, pop-up et événements pour le Parc Chanot et les salons SMIC, Top Transport, Salon Méditerranéen de la Plaisance.",
    intro:
      "Porte d'entrée méditerranéenne de la France, Marseille concentre des salons régionaux à fort rayonnement et des événements maritimes uniques. Le Parc Chanot et le Palais du Pharo sont des écrins exigeants pour les marques qui veulent rayonner sur le sud et le bassin Med.",
    hook:
      "À Marseille, le sud impose son tempo — votre stand doit suivre.",
    venues: [
      {
        name: "Parc Chanot",
        desc: "70 000 m² — Foire de Marseille, SMIC, Top Transport, Salon des Maires PACA.",
      },
      {
        name: "Palais du Pharo",
        desc: "Conventions corporate, lancements régionaux, conférences scientifiques.",
      },
      {
        name: "MUCEM / J1",
        desc: "Espaces événementiels emblématiques pour brand activation et expositions de prestige.",
      },
    ],
    fairs: [
      { name: "SMIC — Salon Méditerranéen de l'Immobilier", sector: "Immobilier", period: "Annuel · Parc Chanot" },
      { name: "Top Transport Europe", sector: "Logistique & supply chain", period: "Biennal · Parc Chanot" },
      { name: "Foire Internationale de Marseille", sector: "Grand public B2C", period: "Septembre-octobre · Parc Chanot" },
      { name: "Salon Nautique de Marseille", sector: "Plaisance & maritime", period: "Annuel · Vieux Port" },
      { name: "Riviera Yachting Network", sector: "Yachting professionnel", period: "Annuel · Région PACA" },
    ],
    sectors: [
      "Maritime & yachting",
      "Logistique & transport",
      "Immobilier & construction",
      "Tourisme & hôtellerie",
      "Cosmétique & parfumerie",
      "Vins & spiritueux",
    ],
    localContext:
      "Marseille demande une logistique pensée pour les contraintes du Vieux-Port et du tunnel Prado-Carénage. Notre équipe coordonne montage de nuit, accès poids lourds et stockage local. Sourcing partenaires PACA (mobilier, fleuriste, traiteur) pour réduire l'empreinte carbone et les délais.",
    cta:
      "Salon, lancement, pop-up à Marseille ? Concevons un espace à la hauteur du sud.",
  },
  lille: {
    slug: "lille",
    name: "Lille",
    region: "Hauts-de-France",
    title:
      "Stand & design d'espaces Lille — Lille Grand Palais, Lille Eurexpo | Novaus",
    description:
      "Agence de design de stands à Lille : conception sur-mesure, modulaire et événementielle pour Lille Grand Palais et Lille Eurexpo. Salons CFIA, Producteurs des Hauts-de-France.",
    intro:
      "Lille est le carrefour économique du nord de l'Europe. À 1 h de Paris, 35 min de Bruxelles, 1 h 20 de Londres — la ville est devenue un hub stratégique pour les salons B2B agroalimentaires, industriels et logistiques.",
    hook:
      "À Lille, l'efficacité prime — votre stand doit transformer en quelques pas.",
    venues: [
      {
        name: "Lille Grand Palais",
        desc: "20 000 m² au cœur de la ville — CFIA Hauts-de-France, Salon des Maires, Producteurs Locaux.",
      },
      {
        name: "Lille Eurexpo (Tourcoing)",
        desc: "Espace modulable pour conventions, salons techniques et événements régionaux.",
      },
      {
        name: "La Gare Saint-Sauveur / Le Tripostal",
        desc: "Lieux atypiques pour pop-up, brand activation et événements créatifs.",
      },
    ],
    fairs: [
      { name: "CFIA Hauts-de-France", sector: "Industrie agroalimentaire", period: "Annuel · Lille Grand Palais" },
      { name: "Salon Producteurs Hauts-de-France", sector: "Agroalimentaire local", period: "Annuel · Lille Grand Palais" },
      { name: "Made in France Première Vision", sector: "Mode & textile", period: "Annuel · Lille" },
      { name: "Salon des Maires HDF", sector: "Collectivités territoriales", period: "Annuel · Lille Grand Palais" },
      { name: "Conférences santé Eurasanté", sector: "Biotech & santé", period: "Régulier · Parc Eurasanté" },
    ],
    sectors: [
      "Agroalimentaire & IAA",
      "Textile & mode",
      "Logistique & e-commerce",
      "Biotech & santé",
      "Distribution & retail",
      "Industries mécaniques",
    ],
    localContext:
      "Lille bénéficie d'un tissu d'installateurs et de fabricants nordistes très réactifs. Nous travaillons avec des partenaires locaux pour optimiser les délais de montage, réduire les transports et garantir une production éco-responsable. Coordination directe avec les équipes de Lille Grand Palais.",
    cta:
      "CFIA, Producteurs HDF, Salon des Maires ? Construisons votre présence lilloise.",
  },
  rennes: {
    slug: "rennes",
    name: "Rennes",
    region: "Bretagne",
    title:
      "Stand sur-mesure Rennes — Parc Expo Rennes Aéroport, salons bretons | Novaus",
    description:
      "Agence de design d'espaces à Rennes : stands sur-mesure, modulaires et pop-up pour le Parc Expo Rennes Aéroport. SPACE, CFIA, Salon Régional de l'Habitat.",
    intro:
      "Rennes est la capitale agricole et agroalimentaire de l'Ouest. Le Parc Expo Rennes Aéroport accueille des salons de référence — SPACE, CFIA — qui concentrent les filières élevage, productions végétales et IAA. Une scène stratégique pour qui vise le marché ouest-européen.",
    hook:
      "À Rennes, on parle aux décideurs filière — pas aux curieux.",
    venues: [
      {
        name: "Parc Expo Rennes Aéroport",
        desc: "60 000 m² — SPACE, CFIA Rennes, Salon Régional de l'Habitat, Salon de l'Agriculture Ouest.",
      },
      {
        name: "Le Couvent des Jacobins",
        desc: "Centre des congrès de Rennes Métropole — conventions corporate et lancements régionaux.",
      },
      {
        name: "Les Champs Libres",
        desc: "Espace culturel et événementiel atypique pour pop-up et activations de marque.",
      },
    ],
    fairs: [
      { name: "SPACE", sector: "Élevage & productions animales", period: "Septembre · Parc Expo Rennes" },
      { name: "CFIA Rennes", sector: "Industrie agroalimentaire", period: "Mars · Parc Expo Rennes" },
      { name: "Salon Régional de l'Habitat", sector: "Habitat & construction", period: "Annuel · Parc Expo Rennes" },
      { name: "Salon Studyrama", sector: "Formation & enseignement", period: "Janvier · Couvent des Jacobins" },
      { name: "Web2day", sector: "Tech & numérique (Nantes-Rennes)", period: "Juin · Grand Ouest" },
    ],
    sectors: [
      "Agroalimentaire & IAA",
      "Élevage & productions animales",
      "Numérique & cyber",
      "Biotech & santé",
      "Habitat & construction",
      "Formation & enseignement",
    ],
    localContext:
      "Notre couverture du Grand Ouest s'appuie sur un réseau de partenaires bretons et nantais. Nous gérons le transport Paris–Rennes, le stockage local entre deux salons, et le montage en lien direct avec les équipes du Parc Expo Rennes Aéroport. Pour SPACE, l'anticipation logistique est critique : les créneaux de montage sont serrés.",
    cta:
      "SPACE, CFIA Rennes, Salon de l'Habitat ? Pensons votre stand ouest-français.",
  },
};
