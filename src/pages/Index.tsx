import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import ClientWall from "@/components/sections/ClientWall";
import AwardsStrip from "@/components/sections/AwardsStrip";
import SelectedWork from "@/components/sections/SelectedWork";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import StitchBlocks from "@/components/sections/StitchBlocks";
import Thinking from "@/components/sections/Thinking";
import Press from "@/components/sections/Press";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import SiteFooter from "@/components/sections/SiteFooter";

const Index = () => (
  <>
    <Navbar />
    <main id="main" className="relative z-10">
      <Hero />
      <Marquee />
      <ClientWall />
      <AwardsStrip />
      <SelectedWork />
      <About />
      <Services />
      <StitchBlocks />
      <Thinking />
      <Press />
      <Testimonials />
      <Contact />
    </main>
    <SiteFooter />
  </>
);

export default Index;
