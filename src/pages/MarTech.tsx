import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, PieChart, Layers, TrendingUp } from "lucide-react";

const services = [
  {
    icon: PieChart,
    title: "Marketing Mix Modeling",
    description: "Bayesian MMM to quantify the incremental impact of each marketing channel, optimize budget allocation, and forecast ROI across scenarios.",
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Attribution modeling, customer lifetime value analysis, churn prediction, and real-time dashboarding for data-driven decisions.",
  },
  {
    icon: Layers,
    title: "MarTech Stack Consulting",
    description: "Audit, architect, and integrate your marketing technology stack—from CDPs and CRMs to analytics platforms and automation tools.",
  },
];

const MarTech = () => (
  <Layout>
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-accent mb-4">Services</p>
        <h1 className="font-display text-display-md lg:text-display-lg font-semibold mb-6">MarTech & Analytics</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Data-driven marketing strategy grounded in rigorous analytics. I help CMOs and growth leaders make confident investment decisions.
        </p>

        <div className="space-y-12 mb-24">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col md:flex-row gap-6 md:gap-10 py-8 border-b border-border">
              <s.icon className="text-accent shrink-0" size={32} />
              <div>
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Start a conversation <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default MarTech;
