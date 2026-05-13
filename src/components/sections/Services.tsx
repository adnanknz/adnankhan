import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    n: "01",
    title: "Digital transformation.",
    body: "Strategy and execution that turns a marketing technology stack into commercial outcomes. Cultural change, not just tooling.",
  },
  {
    n: "02",
    title: "Customer data platforms.",
    body: "Selection, integration, and operationalisation of CDPs. Single customer view as the linchpin of attribution.",
  },
  {
    n: "03",
    title: "Marketing technology.",
    body: "Audit, architecture, and stitched delivery across martech and adtech.",
  },
  {
    n: "04",
    title: "Media and advertising.",
    body: "Performance planning, buying, and measurement across paid channels.",
  },
  {
    n: "05",
    title: "Marketing mix modelling.",
    body: "Modern, automated MMM via Stitch Predict for brands at any media budget.",
  },
];

const Services = () => (
  <section id="services" className="py-24 lg:py-40 px-5 lg:px-8 bg-paper">
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-x-6 mb-16">
        <p className="eyebrow col-span-12 lg:col-span-3 mb-4 lg:mb-0">What I work on</p>
        <h2 className="col-span-12 lg:col-span-9 font-display-2" style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>
          Priorities, in order.
        </h2>
      </div>

      <Accordion type="single" collapsible className="border-t border-oxblood/30">
        {services.map((s) => (
          <AccordionItem key={s.n} value={s.n} className="border-b border-oxblood/30">
            <AccordionTrigger className="py-8 hover:no-underline group">
              <div className="flex items-baseline gap-6 lg:gap-12 text-left flex-1">
                <span className="mono text-oxblood/70">{s.n}</span>
                <span
                  className="font-serif font-bold text-ink group-hover:text-oxblood transition-colors flex-1"
                  style={{ fontSize: "clamp(22px, 2.6vw, 36px)", letterSpacing: "-0.02em" }}
                >
                  {s.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-8">
              <p className="text-ink/80 text-[16px] leading-relaxed max-w-[60ch] pl-0 lg:pl-[100px]">
                {s.body}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default Services;
