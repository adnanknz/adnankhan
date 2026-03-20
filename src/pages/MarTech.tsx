import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, PieChart, Layers, TrendingUp, Database, Zap, BarChart3 } from "lucide-react";

const services = [
  {
    icon: PieChart,
    title: "Marketing Mix Modelling",
    company: "via Stitch Predict",
    description:
      "Privacy-first marketing measurement through our SaaS MMM platform. Quantify the incremental impact of each marketing channel, optimise budget allocation, and forecast ROI across scenarios. Built because sophisticated measurement shouldn't require a multi-million-dollar budget.",
  },
  {
    icon: Database,
    title: "Customer Data Platforms",
    company: "Primary Tealium Partner NZ",
    description:
      "As New Zealand's primary certified Tealium deployment partner, we architect, implement, and integrate CDPs that unify your customer data across every touchpoint. From vendor selection through deployment and ongoing optimisation.",
  },
  {
    icon: Layers,
    title: "MarTech Stack Strategy",
    company: "via Stitch",
    description:
      "Audit, architect, and integrate your marketing technology stack. We work across CDPs, CRMs, analytics platforms, automation tools, and media systems to create a unified, efficient martech ecosystem.",
  },
  {
    icon: TrendingUp,
    title: "Performance & Attribution",
    company: "via Stitch",
    description:
      "Advanced attribution modelling, customer lifetime value analysis, first-party data strategy, and server-side tracking implementation. Privacy-first measurement for the post-cookie era.",
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

const MarTech = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-accent mb-4">Services</p>
        <h1 className="font-display text-display-md lg:text-display-lg font-semibold mb-6">
          MarTech, CDPs & Marketing Mix Modelling
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Data-driven marketing strategy through{" "}
          <strong className="text-foreground">Stitch</strong> (consultancy) and{" "}
          <strong className="text-foreground">Stitch Predict</strong> (SaaS MMM platform). We help
          CMOs and marketing leaders make confident investment decisions backed by rigorous
          measurement.
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

    {/* Services */}
    <section className="py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-display-sm font-semibold mb-12">What we do</h2>
        <div className="space-y-12 mb-24">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col md:flex-row gap-6 md:gap-10 py-8 border-b border-border"
            >
              <s.icon className="text-accent shrink-0" size={32} />
              <div>
                <h3 className="font-display text-xl font-semibold mb-1">{s.title}</h3>
                <p className="text-xs text-accent font-medium mb-3">{s.company}</p>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stitch Predict Spotlight */}
    <section className="py-24 px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <BarChart3 className="text-accent" size={24} />
          <h2 className="font-display text-display-sm font-semibold">Stitch Predict</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
          Our SaaS marketing mix modelling platform democratises sophisticated marketing
          measurement. We built Stitch Predict to answer a simple question: why should
          privacy-compliant marketing measurement only be accessible to businesses with
          multi-million-dollar budgets?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <Zap className="text-accent mb-3" size={20} />
            <h3 className="font-display text-sm font-semibold mb-1">Machine Learning Driven</h3>
            <p className="text-xs text-muted-foreground">
              Causality identification and incrementality forecasting
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <Zap className="text-accent mb-3" size={20} />
            <h3 className="font-display text-sm font-semibold mb-1">Privacy-First</h3>
            <p className="text-xs text-muted-foreground">
              No cookies or PII required. Built for the post-cookie era
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <Zap className="text-accent mb-3" size={20} />
            <h3 className="font-display text-sm font-semibold mb-1">Accessible Pricing</h3>
            <p className="text-xs text-muted-foreground">
              Sophisticated measurement for businesses of all sizes
            </p>
          </div>
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
          Improve your marketing measurement
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Whether you need a full martech transformation, a CDP implementation, or want to explore
          marketing mix modelling, let's find the right starting point.
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
