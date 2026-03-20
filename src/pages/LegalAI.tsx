import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileSearch,
  FileText,
  Shield,
  Scale,
  BookOpen,
  Users,
  AlertTriangle,
} from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "AI Readiness Assessment",
    description:
      "Evaluate your firm's current workflows, technology maturity, and team readiness for AI adoption. Receive a prioritised roadmap tailored to your practice areas and risk tolerance.",
  },
  {
    icon: FileText,
    title: "AI Strategy & Implementation",
    description:
      "Custom AI strategy aligned with the NZ Law Society's Generative AI Guidance for Lawyers, from tool selection through deployment, training, and ongoing optimisation.",
  },
  {
    icon: Shield,
    title: "Compliance & Data Governance",
    description:
      "Ensure AI use complies with the NZ Privacy Act 2020, client confidentiality obligations, and your firm's ethical duties. Practical policies, not theoretical frameworks.",
  },
  {
    icon: Users,
    title: "Team Training & Change Management",
    description:
      "Hands-on workshops and training programmes that build AI literacy across your firm, from partners to associates. Designed to overcome the adoption barriers that stall most implementations.",
  },
];

const useCases = [
  "Document review and due diligence acceleration",
  "Contract analysis, clause extraction, and risk scoring",
  "Legal research and precedent analysis",
  "Client intake and matter management automation",
  "Knowledge management and institutional memory",
  "Billing optimisation and workflow efficiency",
];

const whyAdnan = [
  {
    title: "Technology operator, not just advisor",
    description:
      "16+ years in technology roles at Meta, Microsoft, and two companies I co-founded. I understand both the strategic and implementation sides of technology transformation.",
  },
  {
    title: "NZ market knowledge",
    description:
      "Based in Auckland, deeply connected to NZ's legal, technology, and business communities. I understand the local regulatory landscape and the practical realities of NZ firms.",
  },
  {
    title: "AI and data expertise",
    description:
      "Co-Founder of Stitch Predict (SaaS marketing mix modelling), Chair of Marketing Association NZ's Digital SIG, and AI Working Group Lead at IAB New Zealand. AI is my core practice, not a sideline.",
  },
  {
    title: "Measurement-driven approach",
    description:
      "Everything I do is grounded in measurable outcomes. Two Gold Effie Awards and a Supreme TVNZ Marketing Award demonstrate that rigorous measurement produces better results.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Deep dive into your firm's current workflows, technology stack, practice areas, and strategic objectives. Identify the highest-impact opportunities for AI.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Custom AI roadmap aligned with the NZ Law Society guidance, your firm's risk tolerance, budget, and culture. Practical recommendations, not theoretical frameworks.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Hands-on deployment support including tool selection, vendor evaluation, data governance setup, team training, and change management.",
  },
  {
    step: "04",
    title: "Optimisation",
    description:
      "Ongoing support with model refinement, workflow adjustment, ROI measurement, and team upskilling as AI capabilities evolve.",
  },
];

const LegalAI = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-accent mb-4">Services</p>
        <h1 className="font-display text-display-md lg:text-display-lg font-semibold mb-6">
          AI Consulting for Law Firms
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Practical AI strategy and implementation for New Zealand law firms. I help you move from
          experimentation to measurable results, aligned with the NZ Law Society's guidance and your
          firm's ethical obligations.
        </p>
        <p className="text-sm text-muted-foreground max-w-2xl">
          The NZ Law Society released its first Generative AI Guidance for Lawyers in 2024, and
          their AI workshops in Auckland have sold out entirely. The demand for AI adoption is real.
          The question isn't whether to adopt, but how to do it well.
        </p>
      </div>
    </section>

    {/* NZ Context Banner */}
    <section className="py-12 px-6 lg:px-8 bg-muted/40 border-y border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-start gap-4">
          <BookOpen className="text-accent shrink-0 mt-1" size={20} />
          <div>
            <p className="text-sm font-medium text-foreground">
              NZ Law Society AI Guidance Aligned
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              All recommendations are designed to align with the NZ Law Society's Generative AI
              Guidance, the NZ Privacy Act 2020, and the Courts of NZ AI guidelines. I stay current
              with the Law Society's AI Research Project and evolving best practice.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-display-sm font-semibold mb-12">How I help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((s) => (
            <div key={s.title} className="bg-card border border-border p-8 rounded-lg">
              <s.icon className="text-accent mb-4" size={24} />
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Use Cases */}
    <section className="py-24 px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-display-sm font-semibold mb-12">
          Common AI use cases for law firms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {useCases.map((uc) => (
            <div key={uc} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="text-sm text-muted-foreground">{uc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Adnan */}
    <section className="py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-display-sm font-semibold mb-12">
          Why work with me
        </h2>
        <div className="space-y-8">
          {whyAdnan.map((item) => (
            <div key={item.title} className="flex gap-6">
              <div className="w-1.5 h-12 bg-accent/30 rounded-full shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-24 px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-display-sm font-semibold mb-12">Process</h2>
        <div className="space-y-10 mb-16">
          {processSteps.map((s) => (
            <div key={s.step} className="flex gap-6">
              <span className="text-3xl font-display font-semibold text-accent/30">
                {s.step}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-display-sm font-semibold mb-6">
          Explore AI for your firm
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Book a free 30-minute discovery call to discuss your firm's AI readiness, current
          challenges, and where the highest-impact opportunities lie.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">
            Book a discovery call <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default LegalAI;
