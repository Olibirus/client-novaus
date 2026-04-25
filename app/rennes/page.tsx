import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { cities } from "@/lib/cities";

const city = cities.rennes;

export const metadata: Metadata = {
  title: city.title,
  description: city.description,
  alternates: { canonical: `https://novaus.fr/${city.slug}/` },
  openGraph: { title: city.title, description: city.description, url: `https://novaus.fr/${city.slug}/` },
};

export default function Page() {
  return <CityPage city={city} />;
}
