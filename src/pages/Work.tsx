import Layout from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = ["All", "MarTech", "Performance", "AI & Automation"];

const projects = [
  {
    title: "Brand Transformation & Performance Marketing",
    category: "Performance",
    client: "Turners Group NZ",
    results: [
      "-68% cost per lead",
      "5.3x increase in lead volume",
      "+38% post-lead interaction",
    ],
    description:
      "Implemented Facebook native lead generation with LeadsBridge automation, transforming Turners' digital acquisition strategy. This work contributed to the 'Tina from Turners' campaign winning the Supreme Award at the TVNZ-NZ Marketing Awards 2022 and two Gold Effie Awards.",
    awards: "Supreme TVNZ Marketing Award, 2x Gold Effie, Global Effie Finalist",
  },
  {
    title: "E-Commerce & Lead Conversion Optimisation",
    category: "Performance",
    client: "Comvita",
    results: ["480% increase in lead conversion", "255% avg sale value increase"],
    description:
      "Accelerated digital transformation through adtech and martech integration, driving significant improvements in conversion rates and average sale values across Comvita's e-commerce channels.",
  },
  {
    title: "COVID Drive-In Cinema Campaign",
    category: "Performance",
    client: "AA Smartfuel",
    results: ["8x ROAS", "8,000 tickets sold"],
    description:
      "Developed and executed a high-impact campaign during COVID-19 restrictions, achieving exceptional return on ad spend through targeted digital media strategy.",
  },
  {
    title: "Global Digital Marketing Engagement",
    category: "MarTech",
    client: "ABB",
    results: ["$279,292 USD Year 1 engagement", "Global digital marketing programme"],
    description:
      "Comprehensive global digital marketing engagement spanning strategy, execution, and measurement across multiple markets.",
  },
  {
    title: "CDP Vendor Selection & Braze Implementation",
    category: "MarTech",
    client: "Serko",
    results: ["CDP vendor selection completed", "Braze implementation delivered"],
    description:
      "Led the CDP vendor evaluation process and implemented Braze as the core customer engagement platform, enabling personalised, data-driven communications at scale.",
  },
  {
    title: "Tealium CDP Implementation",
    category: "MarTech",
    client: "Bayleys",
    results: ["Full Tealium CDP deployment", "Unified customer data layer"],
    description:
      "Implemented Tealium's customer data platform as NZ's primary certified deployment partner, creating a unified view of customer interactions across Bayleys' digital ecosystem.",
  },
  {
    title: "World-First Marketing Automation Case Study",
    category: "MarTech",
    client: "Cisco (Global)",
    results: [
      "World's first MA/attribution/BI integration",
      "Global case study published",
    ],
    description:
      "Produced the world's first ever marketing automation, digital media, people-based attribution and BI integration case study for Cisco Global, presented at Marketo Summit San Francisco 2018.",
  },
  {
    title: "AI Chatbot Development",
    category: "AI & Automation",
    client: "Skills Group",
    results: ["Custom AI chatbot deployed", "Operational efficiency gains"],
    description:
      "Developed and deployed a custom AI chatbot solution to improve customer engagement and operational efficiency.",
  },
  {
    title: "Meta Paid Media (Multi-Market)",
    category: "Performance",
    client: "MyHR",
    results: ["NZ, AU & CA market expansion", "Meta paid media management"],
    description:
      "Managing Meta paid media across New Zealand, Australia, and Canada, driving customer acquisition across multiple markets.",
  },
];

const Work = () => {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-display text-display-md lg:text-display-lg font-semibold mb-6">
            Work
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Selected case studies and project outcomes from Stitch, Stitch Predict, and earlier
            career work.
          </p>

          <div className="flex gap-3 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm rounded-md border transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((p) => (
              <div
                key={p.title}
                className="bg-card border border-border p-8 rounded-lg hover:border-accent transition-colors group"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  {p.category}
                </span>
                <h3 className="font-display text-lg font-semibold mt-2 mb-1 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mb-3">{p.client}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="space-y-1">
                  {p.results.map((r) => (
                    <div key={r} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-sm font-medium text-foreground">{r}</span>
                    </div>
                  ))}
                </div>
                {p.awards && (
                  <p className="text-xs text-accent mt-4 font-medium">{p.awards}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-6">
              Additional clients include Hyundai, BNZ, Harvey Norman, and others across
              automotive, financial services, FMCG, and real estate.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Discuss your project <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
