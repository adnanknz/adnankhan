import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-display text-display-md lg:text-display-lg font-semibold mb-8">About</h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              With over 15 years at the intersection of technology, law, and marketing, I've helped organizations navigate the complexities of AI adoption—turning uncertainty into competitive advantage.
            </p>
            <p>
              My career began in legal technology at a top-tier law firm, where I saw firsthand how manual processes consumed valuable attorney time. That experience sparked a mission: to bring intelligent automation to knowledge-intensive industries.
            </p>
            <p>
              Today, I work with law firms, marketing teams, and enterprises to design and deploy AI solutions that are practical, ethical, and measurable. My approach is rooted in deep domain expertise, not just technical knowledge.
            </p>
            <h2 className="font-display text-xl font-semibold text-foreground pt-4">Credentials</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>J.D., Georgetown University Law Center</li>
              <li>M.S. Data Science, Columbia University</li>
              <li>Certified AI Practitioner (MIT Professional Education)</li>
              <li>Former Senior Consultant, McKinsey Digital</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Photo</span>
            </div>
            <div className="mt-8 space-y-4">
              <h3 className="font-display text-lg font-semibold">Values</h3>
              {["Rigor over hype", "Outcomes over outputs", "Ethics by design", "Clarity in complexity"].map((v) => (
                <div key={v} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-sm text-muted-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
