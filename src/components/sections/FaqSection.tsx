import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

const FaqSection = () => (
  <section id="faq" className="py-24 lg:py-32 px-5 lg:px-8 bg-paper">
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-x-6 mb-12">
        <p className="eyebrow col-span-12 lg:col-span-3 mb-4 lg:mb-0">Frequently asked</p>
        <h2 className="col-span-12 lg:col-span-9 font-display-2" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
          Twelve plain answers.
        </h2>
      </div>
      <Accordion type="single" collapsible className="border-t border-hairline">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-b border-hairline">
            <AccordionTrigger className="py-6 hover:no-underline group text-left">
              <h3 className="font-serif font-bold text-ink group-hover:text-oxblood transition-colors text-[18px] lg:text-[22px] flex-1 text-left" style={{ letterSpacing: "-0.01em" }}>
                {f.q}
              </h3>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <p className="text-ink/80 text-[16px] leading-relaxed max-w-[72ch]">{f.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;