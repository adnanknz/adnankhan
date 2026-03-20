import Layout from "@/components/Layout";
import { ExternalLink } from "lucide-react";

const articles = [
  {
    title: "Future of AI 2026: What NZ Marketers Need to Know",
    date: "Mar 2026",
    tag: "AI & Marketing",
    source: "Marketing Association NZ Resource Hub",
    description:
      "Co-authored with Richard Conway. An exploration of how AI is reshaping marketing practice in New Zealand, from agentic commerce to adaptive measurement loops.",
    href: "https://marketing.org.nz",
  },
  {
    title: "Beyond Attribution: Why Modern Marketers Need Advanced Measurement Strategies",
    date: "Sept 2024",
    tag: "MarTech",
    source: "Marketing Association NZ",
    description:
      "As digital tracking crumbles, the future of marketing measurement isn't in more tracking, it's in better modelling. A deep dive into why marketing mix modelling is the post-cookie measurement solution.",
    href: "https://marketing.org.nz",
  },
  {
    title: "The Power of Brand and Strategy",
    date: "2023",
    tag: "Strategy",
    source: "Marketing Association NZ",
    description:
      "Exploring the relationship between brand investment and long-term strategic outcomes, drawing on award-winning case study data.",
    href: "https://marketing.org.nz",
  },
  {
    title: "New Research Challenges Traditional Marketing Wisdom",
    date: "2023",
    tag: "MarTech",
    source: "Marketing Association NZ",
    description:
      "Examining new research findings that challenge conventional approaches to marketing investment and measurement.",
    href: "https://marketing.org.nz",
  },
];

const mediaAppearances = [
  {
    title: "Marketing Masters Podcast: The Art and Science of Modern Marketing",
    date: "May 2024",
    tag: "Podcast",
    source: "Apple Podcasts / Marketing Masters with Zania Guy",
    description:
      "A 75-minute conversation covering the evolution of marketing technology, the rise of marketing mix modelling, and the future of privacy-first measurement.",
    href: "https://podcasts.apple.com/nz/podcast/marketing-master-adnan-khan-speaks-with-zania-guy/id1731231116?i=1000656575942",
  },
  {
    title: "CDP Expert Commentary: LinkedIn's MarTech-AdTech Strategy",
    date: "Sept 2023",
    tag: "Industry",
    source: "Mi3 Australia",
    description:
      "Quoted as a CDP expert in Mi3 Australia's coverage of LinkedIn's rebuilding of martech-adtech bridges and upcoming CDP initiatives.",
    href: "https://www.mi-3.com.au",
  },
  {
    title: "Stitch Becomes Primary Tealium Deployment Partner in NZ",
    date: "2022",
    tag: "Industry",
    source: "IT Brief New Zealand",
    description:
      "Coverage of Stitch's strategic partnership with Tealium, becoming the primary certified deployment partner in New Zealand.",
    href: "https://itbrief.co.nz/story/stitch-becomes-primary-tealium-deployment-partner-in-nz",
  },
];

const upcomingContent = {
  title: "Agentic AI Readiness for NZ Marketers",
  date: "July 2026 (upcoming)",
  source: "Marketing Association NZ Resource Hub",
  description:
    "First draft due June 27, 2026. Exploring how NZ marketers can prepare for the agentic AI era.",
};

const Insights = () => (
  <Layout>
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-display text-display-md lg:text-display-lg font-semibold mb-6">
          Insights
        </h1>
        <p className="text-lg text-muted-foreground mb-16">
          Writing, podcasts, and media on AI, marketing technology, and measurement strategy.
        </p>

        {/* Articles */}
        <h2 className="font-display text-display-sm font-semibold mb-8">Articles</h2>
        <div className="space-y-0 mb-20">
          {articles.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-8 border-b border-border hover:border-accent transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {post.tag}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-1 group-hover:text-accent transition-colors flex items-center gap-2">
                    {post.title}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{post.source}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-lg">
                    {post.description}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground shrink-0">{post.date}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Media Appearances */}
        <h2 className="font-display text-display-sm font-semibold mb-8">
          Media & appearances
        </h2>
        <div className="space-y-0 mb-20">
          {mediaAppearances.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-8 border-b border-border hover:border-accent transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-1 group-hover:text-accent transition-colors flex items-center gap-2">
                    {item.title}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.source}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground shrink-0">{item.date}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="bg-muted/40 p-8 rounded-lg border border-border">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
            Coming soon
          </p>
          <h3 className="font-display text-lg font-semibold">{upcomingContent.title}</h3>
          <p className="text-xs text-muted-foreground mt-1">
            {upcomingContent.source} / {upcomingContent.date}
          </p>
          <p className="text-sm text-muted-foreground mt-2">{upcomingContent.description}</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Insights;
