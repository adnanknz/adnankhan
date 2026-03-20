import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, BarChart3, Scale, Database, Award, Quote } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "AI Consulting for Legal",
    description:
      "Helping NZ law firms navigate AI adoption with practical strategy, implementation support, and compliance-aligned solutions.",
    href: "/legal-ai",
  },
  {
    icon: BarChart3,
    title: "Marketing Mix Modelling",
    description:
      "Privacy-first measurement through Stitch Predict, our SaaS MMM platform making sophisticated marketing analytics accessible to all.",
    href: "/martech",
  },
  {
    icon: Database,
    title: "CDPs & MarTech Strategy",
    description:
      "Customer data platforms, martech stack architecture, and integration consulting. Primary Tealium deployment partner in New Zealand.",
    href: "/martech",
  },
  {
    icon: Brain,
    title: "Digital Transformation",
    description:
      "End-to-end digital transformation strategy for brands and enterprises, from assessment through implementation and change management.",
    href: "/martech",
  },
];

const clients = [
  "Turners",
  "ABB",
  "Comvita",
  "Bayleys",
  "Serko",
  "Cisco",
  "Harvey Norman",
  "BNZ",
  "AA Smartfuel",
  "Hyundai",
];

const awards = [
  { label: "3x TVNZ Marketing Awards", year: "2022" },
  { label: "2x Gold Effie Awards", year: "2022" },
  { label: "Global Effie Finalist", year: "2023" },
  { label: '"Globally Brilliant Agencies"', year: "Marketing Association NZ" },
];

const testimonials = [
  {
    quote:
      "Adnan really understands marketing from every angle. His strategic thinking and technical depth are rare to find in one person.",
    name: "Justin Flitter",
    role: "Founder, ValocityGlobal",
  },
  {
    quote:
      "Stitch transformed how we think about marketing measurement. The results speak for themselves.",
    name: "Dan Hesson",
    role: "Harvey Norman",
  },
  {
    quote:
      "One of the smartest people in the industry. Adnan brings a level of rigour and clarity that elevates every project.",
    name: "Andy Schick",
    role: "Shine",
  },
];

const blogPreviews = [
  {
    title: "Future of AI 2026: What NZ Marketers Need to Know",
    date: "Mar 2026",
    tag: "AI & Marketing",
    href: "https://marketing.org.nz",
  },
  {
    title: "Beyond Attribution: Why Modern Marketers Need Advanced Measurement Strategies",
    date: "Sept 2024",
    tag: "MarTech",
    href: "https://marketing.org.nz",
  },
  {
    title: "Marketing Masters Podcast: The Art and Science of Modern Marketing",
    date: "May 2024",
    tag: "Podcast",
    href: "https://podcasts.apple.com/nz/podcast/marketing-master-adnan-khan-speaks-with-zania-guy/id1731231116?i=1000656575942",
  },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 lg:py-40 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-display text-display-md lg:text-display-lg font-semibold text-foreground mb-6 animate-fade-in">
          Making marketing measurable
          <br />
          <span className="text-accent">and AI practical.</span>
        </h1>
        <p
          className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in"
          style={{ animationDelay: "0.15s" }}
        >
          From founding Facebook's NZ operations to building Effie Award-winning strategies, I help
          law firms adopt AI and brands measure what matters. Co-Founder of Stitch and Stitch
          Predict, based in Auckland.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Book a consultation <ArrowRight size={16} />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/work">View case studies</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Awards Strip */}
    <section className="py-12 px-6 lg:px-8 border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {awards.map((a) => (
            <div key={a.label}>
              <p className="font-display text-sm font-semibold text-foreground">{a.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{a.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Who I Work With */}
    <section className="py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-display-sm lg:text-display-md font-semibold text-foreground mb-4 text-center">
          Who I work with
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Two audiences, one mission: helping organisations use AI and data to drive measurable
          outcomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            to="/legal-ai"
            className="group bg-card p-10 rounded-lg border border-border hover:border-accent transition-colors"
          >
            <Scale className="text-accent mb-4" size={32} />
            <h3 className="font-display text-xl font-semibold mb-3">For Law Firms</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              AI readiness assessments, implementation strategy, compliance-aligned solutions, and
              training for legal teams navigating the AI transition.
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
              Learn more <ArrowRight size={14} />
            </span>
          </Link>
          <Link
            to="/martech"
            className="group bg-card p-10 rounded-lg border border-border hover:border-accent transition-colors"
          >
            <BarChart3 className="text-accent mb-4" size={32} />
            <h3 className="font-display text-xl font-semibold mb-3">For Brands & CMOs</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Marketing mix modelling, CDP implementation, martech strategy, and performance
              analytics through Stitch and Stitch Predict.
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
              Learn more <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-24 px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-display-sm lg:text-display-md font-semibold text-foreground mb-16 text-center">
          What I do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              className="group bg-card p-8 rounded-lg border border-border hover:border-accent transition-colors"
            >
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

    {/* Social Proof / Client Logos */}
    <section className="py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-10">
          Trusted by leading organisations
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 items-center">
          {clients.map((name) => (
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

    {/* Testimonials */}
    <section className="py-24 px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-display-sm font-semibold mb-16 text-center">
          What people say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card p-8 rounded-lg border border-border">
              <Quote className="text-accent/30 mb-4" size={24} />
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Blog Preview */}
    <section className="py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-display-sm font-semibold">Latest insights</h2>
          <Link to="/insights" className="text-sm text-accent hover:underline">
            View all
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          {blogPreviews.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-border hover:border-accent transition-colors"
            >
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  {post.tag}
                </span>
                <h3 className="font-display text-lg font-medium mt-1 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
              </div>
              <span className="text-sm text-muted-foreground mt-2 sm:mt-0">{post.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Industry Roles */}
    <section className="py-24 px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-display text-display-sm font-semibold mb-12">Industry leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-sm font-semibold text-foreground">
              Chair, Digital Special Interest Group
            </p>
            <p className="text-xs text-muted-foreground mt-1">Marketing Association NZ</p>
            <p className="text-xs text-muted-foreground">2021 - Present</p>
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-foreground">
              AI Working Group Lead
            </p>
            <p className="text-xs text-muted-foreground mt-1">IAB New Zealand</p>
            <p className="text-xs text-muted-foreground">2024 - Present</p>
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-foreground">
              Innovation & Technology Group
            </p>
            <p className="text-xs text-muted-foreground mt-1">IMANZ</p>
            <p className="text-xs text-muted-foreground">2024 - Present</p>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-display-sm lg:text-display-md font-semibold mb-6">
          Ready to talk?
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Whether you're a law firm exploring AI or a brand looking to measure marketing impact,
          let's find the right approach for your organisation.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">
            Get in touch <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;
