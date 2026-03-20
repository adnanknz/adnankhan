import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const recentEvents = [
  {
    title: "The Future of AI in Marketing",
    event: "Marketing Association NZ 'Brainy Breakfast'",
    date: "Feb 2026",
    location: "Auckland, NZ",
    notes:
      "Panel discussion on agentic commerce, commercial liquidity in AI data readiness, and the shift from marketing funnels to adaptive loops.",
  },
  {
    title: "Future of Marketing & AI",
    event: "IAB New Zealand",
    date: "2025",
    location: "Auckland, NZ",
    notes: "Contributed to IAB NZ's exploration of AI's impact on media and marketing industries.",
  },
];

const pastEvents = [
  {
    title: "Marketing Automation & Attribution Integration",
    event: "Marketo Summit",
    date: "2018",
    location: "San Francisco, CA",
  },
  {
    title: "Digital Transformation & Data-Driven Marketing",
    event: "Domo City Tours",
    date: "2018",
    location: "Sydney & Melbourne, AU",
  },
  {
    title: "Marketing Technology Innovation",
    event: "Marketo Success Forum",
    date: "2018",
    location: "Auckland, NZ",
  },
  {
    title: "Data-Driven Decision Making",
    event: "DOMO NZ Breakfast",
    date: "2018",
    location: "Auckland, NZ",
  },
  {
    title: "Enterprise Digital Transformation",
    event: "Enterprise Digital Transformation Conference",
    date: "2018",
    location: "Auckland, NZ",
  },
  {
    title: "Digital Disruption Course Facilitator",
    event: "The Icehouse Owner Manager Programme & Leadership Development Programme",
    date: "2017 - 2018",
    location: "Auckland, NZ",
  },
];

const topics = [
  "AI adoption strategy for organisations",
  "AI for legal firms: practical approaches and NZ Law Society alignment",
  "Marketing mix modelling and privacy-first measurement",
  "Customer data platforms and first-party data strategy",
  "The future of martech: post-cookie measurement",
  "Digital transformation for traditional industries",
  "Agentic AI and the future of B2B commerce",
  "Building measurement-driven marketing cultures",
];

const quotableInsights = [
  {
    quote:
      "You don't need a perfect data lake. You need 'Commercial Liquidity' - the right data, flowing to the right decisions, at the right time.",
    context: "On AI data readiness",
  },
  {
    quote:
      "We've moved from a Funnel to an Adaptive Loop. The purchase journey isn't linear anymore, and neither should your measurement be.",
    context: "On agentic commerce reshaping marketing",
  },
  {
    quote:
      "If you aren't agent-ready, I think you will be filtered out of the RFP before a human even sees your name.",
    context: "On the urgency of AI adoption in B2B",
  },
];

const Speaking = () => (
  <Layout>
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-display text-display-md lg:text-display-lg font-semibold mb-6">
          Speaking
        </h1>
        <p className="text-lg text-muted-foreground mb-16">
          Keynotes, panels, and workshops on AI, marketing technology, and data-driven
          transformation. Available for conferences, corporate events, and industry forums.
        </p>

        {/* Recent Events */}
        <h2 className="font-display text-display-sm font-semibold mb-8">Recent events</h2>
        <div className="space-y-6 mb-20">
          {recentEvents.map((e) => (
            <div key={e.title} className="bg-card border border-border p-8 rounded-lg">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                {e.event}
              </span>
              <h3 className="font-display text-lg font-semibold mt-2">{e.title}</h3>
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {e.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {e.location}
                </span>
              </div>
              {e.notes && (
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{e.notes}</p>
              )}
            </div>
          ))}
        </div>

        {/* Quotable Insights */}
        <h2 className="font-display text-display-sm font-semibold mb-8">Perspectives</h2>
        <div className="space-y-6 mb-20">
          {quotableInsights.map((q) => (
            <div key={q.context} className="border-l-2 border-accent/30 pl-6 py-2">
              <p className="font-display text-lg text-foreground italic leading-relaxed">
                "{q.quote}"
              </p>
              <p className="text-xs text-muted-foreground mt-2">{q.context}</p>
            </div>
          ))}
        </div>

        {/* Past Events */}
        <h2 className="font-display text-display-sm font-semibold mb-8">Past events</h2>
        <div className="space-y-4 mb-20">
          {pastEvents.map((e) => (
            <div
              key={e.title + e.date}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-border"
            >
              <div>
                <h3 className="font-display font-medium">{e.title}</h3>
                <span className="text-sm text-muted-foreground">{e.event}</span>
              </div>
              <div className="flex gap-4 mt-1 sm:mt-0">
                <span className="text-sm text-muted-foreground">{e.location}</span>
                <span className="text-sm text-muted-foreground">{e.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Topics */}
        <h2 className="font-display text-display-sm font-semibold mb-6">Speaking topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
          {topics.map((t) => (
            <div key={t} className="flex items-center gap-3 text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="text-sm">{t}</span>
            </div>
          ))}
        </div>

        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">
            Book me to speak <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Speaking;
