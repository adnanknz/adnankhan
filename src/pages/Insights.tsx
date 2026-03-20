import Layout from "@/components/Layout";
import { useState } from "react";

const tags = ["All", "Legal AI", "MarTech", "Strategy", "Industry"];

const articles = [
  { title: "How AI Is Reshaping Legal Discovery in 2026", date: "Mar 12, 2026", tag: "Legal AI", excerpt: "The latest generation of AI tools is transforming eDiscovery from a cost center into a strategic advantage." },
  { title: "Marketing Mix Modeling: A CFO's Guide", date: "Feb 28, 2026", tag: "MarTech", excerpt: "Why marketing mix modeling is becoming the go-to framework for aligning marketing spend with business outcomes." },
  { title: "The Case for Augmented Intelligence in Law", date: "Feb 14, 2026", tag: "Legal AI", excerpt: "Moving beyond automation to augmentation—how AI can enhance rather than replace legal judgment." },
  { title: "Building a Modern MarTech Stack", date: "Jan 30, 2026", tag: "MarTech", excerpt: "A practical framework for evaluating, selecting, and integrating marketing technology." },
  { title: "AI Governance for the Enterprise", date: "Jan 15, 2026", tag: "Strategy", excerpt: "Establishing guardrails that enable innovation while managing risk across the organization." },
  { title: "The Future of Legal Tech Investment", date: "Jan 2, 2026", tag: "Industry", excerpt: "Analyzing trends in legal technology venture funding and what they mean for law firm adoption." },
];

const Insights = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? articles : articles.filter((a) => a.tag === filter);

  return (
    <Layout>
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-display-md lg:text-display-lg font-semibold mb-6">Insights</h1>
          <p className="text-lg text-muted-foreground mb-12">Perspectives on AI, legal technology, and marketing analytics.</p>

          <div className="flex gap-3 mb-12 flex-wrap">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 text-sm rounded-md border transition-colors ${
                  filter === tag
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="space-y-0">
            {filtered.map((post) => (
              <article key={post.title} className="py-8 border-b border-border group cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">{post.tag}</span>
                    <h2 className="font-display text-xl font-semibold mt-1 group-hover:text-accent transition-colors">{post.title}</h2>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-lg">{post.excerpt}</p>
                  </div>
                  <span className="text-sm text-muted-foreground shrink-0">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
