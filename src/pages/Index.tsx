import SEO from "@/components/SEO";
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
import Credentials from "@/components/sections/Credentials";
import FaqSection from "@/components/sections/FaqSection";
import { faqs } from "@/data/faqs";
import { SITE } from "@/data/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  about: { "@id": `${SITE.url}/#adnan` },
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const speakable = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE.url}/#webpage`,
  url: `${SITE.url}/`,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".hero-headline", ".hero-summary", ".bio-short"],
  },
};

const Index = () => (
  <>
    <SEO
      title="Adnan Khan · Martech & MMM Consultant, Auckland NZ"
      description="Auckland marketing technology pioneer. Co-founder of Stitch and Stitch Predict. Ex-Meta. TVNZ Marketing Awards Supreme winner. 2x Gold Effie 2022. Get in touch."
      path="/"
      jsonLd={[faqJsonLd, speakable]}
    />
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
    <Credentials />
    <Testimonials />
    <FaqSection />
    <Contact />
  </>
);

export default Index;
