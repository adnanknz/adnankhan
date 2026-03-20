import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  PieChart,
  Layers,
  TrendingUp,
  Database,
  Zap,
  BarChart3,
  Megaphone,
  Globe,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Digital Transformation",
    description:
      "Helping brands modernise how they acquire, engage, and retain customers. From strategy through execution, I work across your entire digital ecosystem to drive commercial growth: channel architecture, technology selection, team capability building, and change management. This is about fundamentally upgrading how your organisation operates, not just adding tools.",
    tags: ["Strategy", "Change Management", "Growth"],
  },
  {
    icon: Database,
    title: "Customer Data Infrastructure",
    company: "Primary Tealium Partner NZ",
    description:
      "Your customer data is your most valuable asset, but only if it's connected. As New Zealand's primary certified Tealium deployment partner, I architect and implement customer data platforms that unify your first-party data across every touchpoint. From CDP vendor selection to server-side tracking, identity resolution, and audience activation.",
    tags: ["Tealium", "CDPs", "First-Party Data", "Server-Side Tracking"],
  },
  {
    icon: Layers,
    title: "MarTech Stack Consulting",
    description:
      "Most brands are using 10% of the tools they're paying for and missing 50% of the tools they actually need. I audit, architect, and integrate marketing technology stacks end to end: CRMs, automation platforms, analytics tools, CDPs, and everything in between. The goal is a connected ecosystem where data flows and teams can actually use what they have.",
    tags: ["Integration", "CRM", "Automation", "Analytics"],
  },
  {
    icon: Megaphone,
    title: "Media & Advertising Strategy",
    description:
      "Paid social, programmatic, search, and performance media, planned and executed with the same data-driven rigour that won two Gold Effie Awards and the Supreme TVNZ Marketing Award. I don't just buy media. I build the strategy, measurement framework, and creative approach that makes every dollar work harder.",
    tags: ["Paid Media", "Social", "Programmatic", "Performance"],
  },
  {
    icon: BarChart3,
    title: "Marketing Mix Modelling",
    company: "via Stitch Predict",
    description:
      "Our SaaS MMM platform quantifies the incremental impact of each marketing channel so you can optimise budget allocation with confidence. Privacy-first, no cookies required. Built because sophisticated marketing measurement shouldn't need a multi-million-dollar budget.",
    tags: ["Stitch Predict", "MMM", "Attribution", "Privacy-First"],
  },
];

const techPartners = [
  "Tealium",
  "Braze",
  "Salesforce",
  "Customer.io",
  "Segment",
  "Meta",
  "Google",
  "LeadsBridge",
];

const results = [
  {
    metric: "-68%",
    label: "Cost per lead",
    client: "Turners Group NZ",
  },
  {
    metric: "5.3x",
    label: "Increase in lead volume",
    client: "Turners Group NZ",
  },
  {
    metric: "480%",
    label: "Lead conversion increase",
    client: "Comvita",
  },
  {
    metric: "8x",
    label: "Return on ad spend",
    client: "AA Smartfuel",
  },
  {
    metric: "255%",
    label: "Avg sale value increase",
    client: "Comvita",
  },
  {
    metric: "2x Gold",
    label: "Effie Awards 2022",
    client: "Turners / Stitch",
  },
];

const transformationAreas = [
  {
    icon: Globe,
    title: "Assess",
    description:
      "Audit your current digital ecosystem: technology stack, data flows, media performance, team capabilities, and vendor relationships. Identify the gaps between where you are and where you need to be.",
  },
  {
    icon: Settings,
    title: "Architect",
    description:
      "Design a connected strategy across media, technology, and data. Select the right platforms, define integration architecture, and build a phased roadmap your team can actually execute.",
  },
  {
    icon: Zap,
    title: "Activate",
    description:
      "Implement, integrate, and launch. From CDP deployment and media campaign execution to martech configuration and team training. Hands-on delivery, not just slide decks.",
  },
  {
    icon: TrendingUp,
    title: "Optimise",
    description:
      "Continuous improvement through marketing mix modelling, performance analytics, A/B testing frameworks, and regular technology reviews. Measure what matters and double down on what works.",
  },
];

const MarTech = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-accent mb-4">Services</p>
        <h1 className="font-display text-display-md lg:text-display-lg font-semibold mb-6">
          Media, Technology & Digital Transformation
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Through <strong className="text-foreground">Stitch</strong> (agency + consultancy) and{" "}
          <strong className="text-foreground">Stitch Predict</strong> (SaaS MMM platform), I help
          brands build the digital infrastructure, media strategies, and data capabilities that
          drive real commercial growth.
        </p>
        <p className="text-sm text-muted-foreground max-w-2xl">
          New Zealand's primary certified Tealium deployment partner. Multiple Effie Award and TVNZ
          Marketing Award winners. Serving Fortune 500 clients across multiple continents.
        </p>
      </div>
    </section>

    {/* Results Grid */}
    <section className="py-16 px-6 lg:px-8 bg-muted/40 border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {results.map((r) => (
            <div key={r.label} className="text-center">
              <p className="font-display text-display-sm lg:text-display-md font-semibold text-accent">
                {r.metric}
              </p>
              <p className="text-sm font-medium text-foreground mt-1">{r.label}</p>
              <p className="text-xs text-muted-foreground">{r.client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How I Work */}
    <section className="py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-display-sm font-semibold mb-4 text-center">
          How I work
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Whether it's a full digital transformation or a targeted project, the approach follows
          the same discipline.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {transformationAreas.map((area) => (
            <div key={area.title} className="text-center">
              <area.icon className="text-accent mx-auto mb-4" size={28} />
              <h3 className="font-display text-lg font-semibold mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Detail */}
    <section className="py-24 px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-display-sm font-semibold mb-16">Service areas</h2>
        <div className="space-y-12">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border p-8 lg:p-10 rounded-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <s.icon className="text-accent shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  {s.company && (
                    <p className="text-xs text-accent font-medium mt-1">{s.company}</p>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Technology Partners */}
    <section className="py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-10">
          Technology partnerships
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 items-center">
          {techPartners.map((name) => (
            <span
              key={name}
              className="text-lg font-display text-muted-foreground/50 font-semibold"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-display-sm font-semibold mb-6">
          Let's grow your brand
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Whether you need a full digital transformation, a CDP implementation, a media strategy
          overhaul, or just a clear-eyed assessment of where you stand, let's talk.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">
            Start a conversation <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default MarTech;
