import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const upcoming = [
  { title: "AI & The Future of Legal Practice", event: "LegalTech NYC 2026", date: "Apr 15, 2026", location: "New York, NY" },
  { title: "Marketing Mix Modeling Masterclass", event: "MarTech Summit", date: "May 8, 2026", location: "San Francisco, CA" },
];

const past = [
  { title: "Responsible AI in Legal Operations", event: "ILTACON 2025", date: "Aug 2025", location: "Nashville, TN" },
  { title: "Data-Driven Marketing Strategy", event: "Growth Summit", date: "Jun 2025", location: "Austin, TX" },
  { title: "The AI Governance Imperative", event: "World AI Congress", date: "Mar 2025", location: "London, UK" },
];

const topics = [
  "AI adoption strategy for law firms",
  "Marketing mix modeling & budget optimization",
  "Responsible AI governance & ethics",
  "Legal technology transformation",
  "Data-driven decision making for executives",
];

const Speaking = () => (
  <Layout>
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-display text-display-md lg:text-display-lg font-semibold mb-6">Speaking</h1>
        <p className="text-lg text-muted-foreground mb-16">Keynotes, panels, and workshops on AI, legal tech, and marketing analytics.</p>

        <h2 className="font-display text-display-sm font-semibold mb-8">Upcoming</h2>
        <div className="space-y-6 mb-20">
          {upcoming.map((e) => (
            <div key={e.title} className="bg-card border border-border p-8 rounded-lg">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">{e.event}</span>
              <h3 className="font-display text-lg font-semibold mt-2">{e.title}</h3>
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar size={14} /> {e.date}</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> {e.location}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-display-sm font-semibold mb-8">Past events</h2>
        <div className="space-y-4 mb-20">
          {past.map((e) => (
            <div key={e.title} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-border">
              <div>
                <h3 className="font-display font-medium">{e.title}</h3>
                <span className="text-sm text-muted-foreground">{e.event}</span>
              </div>
              <span className="text-sm text-muted-foreground mt-1 sm:mt-0">{e.date}</span>
            </div>
          ))}
        </div>

        <h2 className="font-display text-display-sm font-semibold mb-6">Topics</h2>
        <ul className="space-y-3 mb-12">
          {topics.map((t) => (
            <li key={t} className="flex items-center gap-3 text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t}
            </li>
          ))}
        </ul>

        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Book me to speak <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Speaking;
