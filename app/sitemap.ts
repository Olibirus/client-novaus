import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://novaus.fr";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...Object.values(cities).map((c) => ({
      url: `${base}/${c.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/mentions-legales/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/politique-confidentialite/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
