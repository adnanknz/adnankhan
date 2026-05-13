import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { SITE } from "@/data/site";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

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

const Services = () => (
  <>
    <SEO
      title="Services · MMM, CDP, Martech & AI Consulting · Adnan Khan"
      description="Marketing mix modelling, customer data platforms, martech strategy, Tealium implementation and AI marketing advisory for NZ and AU brands. Book a consultation."
      path="/services"
      jsonLd={[faqJsonLd]}
      breadcrumbs={[
        { name: "Home", url: `${SITE.url}/` },
        { name: "Services", url: `${SITE.url}/services` },
      ]}
    />
    <article className="pt-32 pb-24 px-5 lg:px-8">
      <div className="container mx-auto">
        <p className="eyebrow mb-6">Services</p>
        <h1 className="font-display-1 text-ink mb-16 max-w-[18ch]" style={{ fontSize: "clamp(56px, 9vw, 168px)" }}>
          Five engagements, one practice.
        </h1>

        <div className="space-y-20">
          {services.map((s) => (
            <section key={s.n} className="grid grid-cols-12 gap-x-6 gap-y-6 hairline-t pt-10">
              <div className="col-span-12 lg:col-span-3">
                <p className="font-serif font-bold text-oxblood text-5xl">{s.n}</p>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <h2 className="font-display-2 text-ink mb-6" style={{ fontSize: "clamp(28px, 3.6vw, 52px)" }}>
                  {s.title}
                </h2>
                <div className="space-y-4 text-ink/85 text-[16px] leading-relaxed max-w-[64ch]">
                  {s.long.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[64ch]">
                  <div className="hairline-t pt-3">
                    <p className="eyebrow mb-1">Ideal for</p>
                    <p className="text-ink/85 text-[14px]">{s.idealFor}</p>
                  </div>
                  <div className="hairline-t pt-3">
                    <p className="eyebrow mb-1">Pricing</p>
                    <p className="text-ink/85 text-[14px]">{s.pricing}</p>
                  </div>
                </div>
                <Link to="/contact" className="mt-8 inline-flex link-underline text-oxblood font-medium">
                  Book a conversation →
                </Link>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-24">
          <p className="eyebrow mb-3">Frequently asked</p>
          <h2 className="font-display-2 text-ink mb-12" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            Twelve plain answers.
          </h2>
          <Accordion type="single" collapsible className="border-t border-hairline">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-hairline">
                <AccordionTrigger className="py-6 hover:no-underline group text-left">
                  <h3 className="font-serif font-bold text-ink group-hover:text-oxblood transition-colors text-[18px] lg:text-[22px] flex-1 text-left">
                    {f.q}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-ink/80 text-[16px] leading-relaxed max-w-[72ch]">{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </article>
  </>
);

export default Services;