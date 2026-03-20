import Layout from "@/components/Layout";
import { useState } from "react";

const categories = ["All", "Legal AI", "MarTech", "Strategy"];

const projects = [
  { title: "AI-Powered Contract Review Platform", category: "Legal AI", client: "Am Law 50 Firm", result: "70% reduction in review time" },
  { title: "Marketing Mix Model for DTC Brand", category: "MarTech", client: "Series B Startup", result: "32% improvement in ROAS" },
  { title: "Enterprise AI Adoption Roadmap", category: "Strategy", client: "Fortune 500 Company", result: "18-month transformation plan" },
  { title: "Regulatory Compliance Engine", category: "Legal AI", client: "Financial Services Firm", result: "Real-time compliance monitoring" },
  { title: "CDP Implementation & Unification", category: "MarTech", client: "Global Retailer", result: "360° customer view across 12 channels" },
  { title: "Legal Research Augmentation", category: "Legal AI", client: "Boutique Litigation Firm", result: "3x faster case preparation" },
];

const Work = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-display text-display-md lg:text-display-lg font-semibold mb-6">Work</h1>
          <p className="text-lg text-muted-foreground mb-12">Selected case studies and project outcomes.</p>

          <div className="flex gap-3 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm rounded-md border transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((p) => (
              <div key={p.title} className="bg-card border border-border p-8 rounded-lg hover:border-accent transition-colors group">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">{p.category}</span>
                <h3 className="font-display text-lg font-semibold mt-2 mb-3 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.client}</p>
                <p className="text-sm font-medium text-foreground">{p.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
