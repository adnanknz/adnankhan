import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, BarChart3, Scale } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Legal AI",
    description: "Transform your law firm's operations with purpose-built AI solutions for document review, contract analysis, and legal research.",
    href: "/legal-ai",
  },
  {
    icon: BarChart3,
    title: "MarTech & Analytics",
    description: "Marketing mix modeling, advanced analytics, and martech stack optimization to maximize your marketing ROI.",
    href: "/martech",
  },
  {
    icon: Brain,
    title: "AI Strategy",
    description: "End-to-end AI strategy consulting from assessment through implementation and organizational change management.",
    href: "/legal-ai",
  },
];

const logos = ["McKinsey", "Deloitte", "Baker McKenzie", "HubSpot", "Salesforce"];

const blogPreviews = [
  { title: "How AI Is Reshaping Legal Discovery in 2026", date: "Mar 12, 2026", tag: "Legal AI" },
  { title: "Marketing Mix Modeling: A CFO's Guide", date: "Feb 28, 2026", tag: "MarTech" },
  { title: "The Case for Augmented Intelligence in Law", date: "Feb 14, 2026", tag: "Legal AI" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 lg:py-40 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-display text-display-md lg:text-display-lg font-semibold text-foreground mb-6 animate-fade-in">
          AI consulting for<br />
          <span className="text-accent">law & marketing</span>
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          I help organizations adopt AI responsibly—delivering measurable outcomes in legal operations, marketing analytics, and enterprise strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Book a consultation <ArrowRight size={16} /></Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/work">View case studies</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-24 px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-display-sm lg:text-display-md font-semibold text-foreground mb-16 text-center">
          What I do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link key={s.title} to={s.href} className="group bg-card p-8 rounded-lg border border-border hover:border-accent transition-colors">
              <s.icon className="text-accent mb-4" size={28} />
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Social Proof */}
    <section className="py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-10">Trusted by leading organizations</p>
        <div className="flex flex-wrap justify-center gap-10 items-center">
          {logos.map((name) => (
            <span key={name} className="text-lg font-display text-muted-foreground/50 font-semibold">{name}</span>
          ))}
        </div>
      </div>
    </section>

    {/* Blog Preview */}
    <section className="py-24 px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-display-sm font-semibold">Latest insights</h2>
          <Link to="/insights" className="text-sm text-accent hover:underline">View all</Link>
        </div>
        <div className="flex flex-col gap-6">
          {blogPreviews.map((post) => (
            <Link key={post.title} to="/insights" className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-border hover:border-accent transition-colors">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-accent">{post.tag}</span>
                <h3 className="font-display text-lg font-medium mt-1 group-hover:text-accent transition-colors">{post.title}</h3>
              </div>
              <span className="text-sm text-muted-foreground mt-2 sm:mt-0">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
