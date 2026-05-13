import { Link } from "react-router-dom";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/data/services";

const Services = () => (
  <section id="services" className="py-24 lg:py-40 px-5 lg:px-8 bg-paper">
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-x-6 mb-16">
        <p className="eyebrow col-span-12 lg:col-span-3 mb-4 lg:mb-0">What I do</p>
        <h2 className="col-span-12 lg:col-span-9 font-display-2" style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>
          Five engagements, one practice.
        </h2>
      </div>

      <Accordion type="single" collapsible className="border-t border-oxblood/30">
        {services.map((s) => (
          <AccordionItem key={s.n} value={s.n} className="border-b border-oxblood/30">
            <AccordionTrigger className="py-8 hover:no-underline group">
              <div className="flex items-baseline gap-6 lg:gap-12 text-left flex-1">
                <span className="font-serif font-bold text-oxblood" style={{ fontSize: "clamp(28px, 3vw, 48px)" }}>
                  {s.n}
                </span>
                <span
                  className="font-serif font-bold text-ink group-hover:text-oxblood transition-colors flex-1"
                  style={{ fontSize: "clamp(22px, 2.6vw, 36px)", letterSpacing: "-0.02em" }}
                >
                  {s.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-8">
              <div className="pl-0 lg:pl-[120px] max-w-[60ch]">
                <p className="text-ink/80 text-[16px] leading-relaxed">{s.short}</p>
                <Link to="/services" className="mt-4 inline-block link-underline text-oxblood mono">
                  Read more →
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default Services;
