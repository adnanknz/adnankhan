import Layout from "@/components/Layout";
import { Award, Briefcase, GraduationCap, Users } from "lucide-react";

const careerTimeline = [
  {
    period: "2019 - Present",
    role: "Co-Founder & Managing Partner",
    company: "Stitch",
    description:
      "Co-founded Stitch to address the increasingly fragmented customer experience landscape. Evolved from media agency and consultancy to media agency, consultancy, and software company. Named one of NZ's 'Globally Brilliant Agencies' by the Marketing Association alongside Colenso BBDO, DDB Group, and FCB Aotearoa.",
  },
  {
    period: "2023 - Present",
    role: "Co-Founder",
    company: "Stitch Predict",
    description:
      "Launched a SaaS marketing mix modelling platform to democratise sophisticated, privacy-compliant marketing measurement for businesses of all sizes. Foundation clients include Turners Auto Retail Division and RestoreMe Clinic.",
  },
  {
    period: "2014 - 2019",
    role: "Head of BD & Innovation / Head of Digital, Founding Partner",
    company: "krunch.co",
    description:
      "One of the first three founding partners. Built and managed the digital team, generating sustained revenue growth. Produced the world's first marketing automation, digital media, people-based attribution and BI integration case study for Cisco Global.",
  },
  {
    period: "2009 - 2014",
    role: "Account Planner to Country Manager, New Zealand",
    company: "Meta / Facebook",
    description:
      "5th Facebook employee in all of APAC and one of the first 200 sales employees globally. Progressed from junior account manager to leading New Zealand operations, opening the startup Facebook NZ HQ in Auckland. Scaled NZ from startup to established market presence.",
  },
  {
    period: "2008 - 2009",
    role: "Technical Account Manager",
    company: "Microsoft Australia",
    description:
      "Managed premium strategic partnership accounts and agencies across the MSN audience. Developed ad products and consulted on best practices, creative, and analytics.",
  },
  {
    period: "2007 - 2008",
    role: "Digital Media Planner & Buyer",
    company: "Initiative Media",
    description:
      "Responsible for devising digital strategy and consolidating client media spend, helping top-tier brands achieve increased sales, brand awareness, and direct acquisition.",
  },
];

const industryRoles = [
  {
    role: "Chair, Digital Special Interest Group",
    org: "Marketing Association NZ",
    period: "2021 - Present",
  },
  {
    role: "AI Working Group Lead",
    org: "IAB New Zealand Emerging Technology Council",
    period: "2024 - Present",
  },
  {
    role: "Innovation & Technology Group Member",
    org: "Independent Media Agencies NZ (IMANZ)",
    period: "2024 - Present",
  },
  {
    role: "Board Member & Investor",
    org: "ListingLogic (700% return, successful exit)",
    period: "2013 - 2020",
  },
];

const certifications = [
  "Meta Certified Media Buying Professional",
  "Certified Agency Partner (Meta)",
  "Growth-Driven Design Agency Certification",
  "Tealium iQ Technical Certification",
  "Tealium iQ Basic Certification",
];

const About = () => (
  <Layout>
    {/* Intro */}
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-display text-display-md lg:text-display-lg font-semibold mb-8">
          About
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              With 16+ years of experience spanning Meta, Microsoft, and two companies I
              co-founded, I help brands transform how they reach, engage, and grow their customers
              through media, technology, and AI. My work covers the full spectrum: advertising and
              media strategy, customer data infrastructure, martech architecture, digital
              transformation, and marketing measurement.
            </p>
            <p>
              My career started in media planning at Initiative, before joining Microsoft Australia
              as a technical account manager. In 2009, I became one of the first five Facebook
              employees in Asia-Pacific and one of the first 200 sales employees globally. Over five
              years I progressed from account planner to Country Manager for New Zealand, opening
              Facebook's Auckland office and building operations from the ground up. That experience
              gave me a deep understanding of how media, advertising, and technology work together
              at scale.
            </p>
            <p>
              In 2014 I co-founded krunch.co, where we built digital transformation programmes for
              global brands like Cisco, Comvita, BNZ, Bayleys, and Hyundai. We developed New
              Zealand's first people-based attribution product and produced the world's first
              marketing automation and BI integration case study for Cisco Global. In 2019 I
              co-founded <strong className="text-foreground">Stitch</strong>, which has evolved from
              a media agency and consultancy into a media agency, consultancy, and software company,
              now serving Fortune 500 clients across multiple continents and recognised as one of
              NZ's "Globally Brilliant Agencies."
            </p>
            <p>
              In 2023 I launched{" "}
              <strong className="text-foreground">Stitch Predict</strong>, a SaaS marketing mix
              modelling platform, because I believe sophisticated marketing measurement shouldn't
              only be accessible to those with multi-million-dollar budgets.
            </p>
            <p>
              I also consult with legal firms on AI and digital technology, helping them navigate
              adoption with practical, compliance-aligned approaches. I chair the Marketing
              Association NZ's Digital Special Interest Group and lead IAB New Zealand's AI Working
              Group.
            </p>
          </div>
          <div className="lg:col-span-2">
            <img
              src="/adnan-khan-headshot.jpg"
              alt="Adnan Khan - AI & MarTech Consultant, Auckland NZ"
              className="aspect-[3/4] object-cover object-top rounded-lg w-full"
              width={400}
              height={533}
              loading="eager"
            />
            <div className="mt-8">
              <h3 className="font-display text-lg font-semibold mb-4">Education</h3>
              <div className="flex items-start gap-3">
                <GraduationCap size={16} className="text-accent mt-1 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Bachelor of Media & Communications</p>
                  <p className="text-xs text-muted-foreground">
                    Honours, High Distinction
                  </p>
                  <p className="text-xs text-muted-foreground">UNSW, 2003 - 2006</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-display text-lg font-semibold mb-4">Certifications</h3>
              <div className="space-y-2">
                {certifications.map((c) => (
                  <div key={c} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Awards */}
    <section className="py-24 px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-12">
          <Award className="text-accent" size={24} />
          <h2 className="font-display text-display-sm font-semibold">Recognition</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="font-display font-semibold">Supreme Award Winner</p>
            <p className="text-sm text-muted-foreground mt-1">
              TVNZ-NZ Marketing Awards 2022
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Plus Excellence in Brand Transformation Strategy & Excellence in Consumer Products
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="font-display font-semibold">2x Gold Effie Awards</p>
            <p className="text-sm text-muted-foreground mt-1">
              Best Strategic Thinking & Retail/Etail, 2022
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="font-display font-semibold">Global Effie Awards Finalist</p>
            <p className="text-sm text-muted-foreground mt-1">
              One of only two NZ finalists, 2023
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="font-display font-semibold">"Globally Brilliant Agencies"</p>
            <p className="text-sm text-muted-foreground mt-1">
              Marketing Association NZ, alongside Colenso BBDO, DDB Group & FCB Aotearoa
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Career Timeline */}
    <section className="py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-accent" size={24} />
          <h2 className="font-display text-display-sm font-semibold">Career</h2>
        </div>
        <div className="space-y-10">
          {careerTimeline.map((item) => (
            <div key={item.period} className="flex gap-6">
              <div className="w-28 shrink-0">
                <span className="text-sm text-muted-foreground">{item.period}</span>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="font-display text-lg font-semibold">{item.role}</h3>
                <p className="text-sm text-accent font-medium">{item.company}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industry Roles */}
    <section className="py-24 px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-12">
          <Users className="text-accent" size={24} />
          <h2 className="font-display text-display-sm font-semibold">Industry Roles</h2>
        </div>
        <div className="space-y-6">
          {industryRoles.map((item) => (
            <div
              key={item.role}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-border"
            >
              <div>
                <h3 className="font-display font-medium">{item.role}</h3>
                <p className="text-sm text-muted-foreground">{item.org}</p>
              </div>
              <span className="text-sm text-muted-foreground mt-1 sm:mt-0">{item.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
