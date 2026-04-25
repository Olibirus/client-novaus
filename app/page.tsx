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

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Story />
      <Mission />
      <Approach />
      <Spaces />
      <Engagement />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
