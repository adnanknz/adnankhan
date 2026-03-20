import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileSearch, FileText, Shield, Scale } from "lucide-react";

const useCases = [
  { icon: FileSearch, title: "Document Review", description: "AI-assisted review reducing time and cost by up to 70% while improving accuracy." },
  { icon: FileText, title: "Contract Analysis", description: "Automated clause extraction, risk scoring, and obligation tracking across portfolios." },
  { icon: Shield, title: "Compliance Monitoring", description: "Real-time regulatory change detection and impact assessment for your practice areas." },
  { icon: Scale, title: "Legal Research", description: "Semantic search and precedent analysis powered by purpose-trained language models." },
];

const processSteps = [
  { step: "01", title: "Assessment", description: "Deep dive into your current workflows, pain points, and strategic objectives." },
  { step: "02", title: "Strategy", description: "Custom AI roadmap aligned with your firm's culture, risk tolerance, and budget." },
  { step: "03", title: "Implementation", description: "Hands-on deployment with training, change management, and quality assurance." },
  { step: "04", title: "Optimization", description: "Ongoing monitoring, model refinement, and ROI measurement." },
];

const LegalAI = () => (
  <Layout>
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-accent mb-4">Services</p>
        <h1 className="font-display text-display-md lg:text-display-lg font-semibold mb-6">Legal AI</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Purpose-built AI solutions for law firms and legal departments. I help you move from experimentation to enterprise-grade deployment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {useCases.map((uc) => (
            <div key={uc.title} className="bg-card border border-border p-8 rounded-lg">
              <uc.icon className="text-accent mb-4" size={24} />
              <h3 className="font-display text-lg font-semibold mb-2">{uc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-display-sm font-semibold mb-12">Process</h2>
        <div className="space-y-10 mb-16">
          {processSteps.map((s) => (
            <div key={s.step} className="flex gap-6">
              <span className="text-3xl font-display font-semibold text-accent/30">{s.step}</span>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Discuss your project <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default LegalAI;
