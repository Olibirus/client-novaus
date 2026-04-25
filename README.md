# Novaus — Site officiel

Site web de l'agence Novaus — design d'espaces événementiels (stands, showrooms, pop-up, roadshows).

> Le design comme trajectoire, l'expérience comme destination.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- **Fonts**: Fraunces (display) + Inter (sans)

## Structure

```
app/
  page.tsx                  # Homepage one-page (Hero, Histoire, Mission, Approche, Espaces, Engagement, Réalisations, Témoignages, Contact)
  paris/                    # SEO city page
  lyon/
  marseille/
  lille/
  rennes/
  mentions-legales/
  politique-confidentialite/
  api/contact/              # Contact form endpoint
components/                 # Reusable sections
lib/cities.ts               # SEO city content
public/assets/              # Logo + project photos
```

## Développement

```bash
npm install
npm run dev   # http://localhost:3000
```

## Build production

```bash
npm run build
npm start
```

## TODO court terme

- Brancher le formulaire de contact à un service email (Resend / Brevo)
- Remplacer les témoignages génériques par les vrais avis client (Google My Business API)
- Ajouter les animations Framer Motion une fois le contenu validé
- Ajouter les vraies photos HD des réalisations Novaus

---

Conçu et développé par [Olibrius](https://www.olibriusweb.com).
