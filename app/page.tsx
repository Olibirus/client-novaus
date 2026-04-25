import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Mission from "@/components/Mission";
import Approach from "@/components/Approach";
import Spaces from "@/components/Spaces";
import Engagement from "@/components/Engagement";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WideImage from "@/components/WideImage";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Story />

      {/* Wide editorial divider 1 */}
      <WideImage
        id="divider-empty-hall"
        invert={false}
        label="Hangar d'exposition vide, ambiance cinématique"
        prompt="Wide cinematic shot of an empty exhibition hall at twilight. Long suspended LED light strips creating leading lines, polished concrete floor reflecting the lights, mist in the air. Warm gold ambient light contrasting with cool ceiling lights. No people, no logos, no text. 21:9 ultra-wide aspect, moody premium atmosphere."
      />

      <Mission />
      <Approach />

      {/* Wide editorial divider 2 (on cream background, transitioning) */}
      <WideImage
        id="divider-stand-detail"
        invert
        label="Détail architectural d'un stand premium"
        prompt="Wide architectural detail of a premium exhibition stand interior. Curved warm-wood wall meeting brushed brass trim, soft cove lighting. Visitor blurred in motion at the edge of frame (silhouette only, no face). Cream and bronze palette, editorial photography, 21:9 ultra-wide."
      />

      <Spaces />
      <Engagement />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
