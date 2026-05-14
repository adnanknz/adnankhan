export interface ThinkingPost {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  source: string;
  kind: "Talk" | "Article" | "Podcast" | "Report" | "Panel";
  excerpt: string;
  externalUrl: string;
}

export const thinkingPosts: ThinkingPost[] = [
  {
    slug: "iab-future-of-marketing-ai-2026",
    title: "The Future of Marketing & AI",
    date: "2026-03-05",
    dateLabel: "5 Mar 2026",
    source: "IAB NZ × Google Auckland",
    kind: "Talk",
    excerpt: "Moderator. AI working group event with Google NZ.",
    externalUrl: "https://www.iab.org.nz/all-events/ai-the-future-of-marketing-event",
  },
  {
    slug: "iab-data-guide-2026",
    title: "Zero, First, Second, Third: A Plain-English Guide to Data for Everyone",
    date: "2026-02-01",
    dateLabel: "Feb 2026",
    source: "IAB NZ",
    kind: "Report",
    excerpt: "Co-author. Plain-English guide to data types for marketers.",
    externalUrl: "https://www.iab.org.nz/",
  },
  {
    slug: "auckland-busmgt-719-2026",
    title: "BUSMGT 719: Business Technology, industry panel",
    date: "2026-01-15",
    dateLabel: "2026",
    source: "University of Auckland",
    kind: "Panel",
    excerpt: "Industry panellist for the Business Technology postgraduate course.",
    externalUrl: "https://www.auckland.ac.nz/",
  },
  {
    slug: "iab-q1-2026-ai-tools-tracker",
    title: "Q1 2026 AI Tools Tracker",
    date: "2026-01-10",
    dateLabel: "Q1 2026",
    source: "IAB NZ",
    kind: "Report",
    excerpt: "Contributor.",
    externalUrl: "https://www.iab.org.nz/news-resources/q1-2026-ai-tools-tracker",
  },
  {
    slug: "ma-digital-day-out-2025",
    title: "AI panel — Digital Day Out 2025",
    date: "2025-09-01",
    dateLabel: "2025",
    source: "Marketing Association NZ · Cordis Auckland",
    kind: "Talk",
    excerpt: "Moderator, AI panel at Digital Day Out 2025.",
    externalUrl: "https://stoppress.co.nz/news/digital-day-out-2025/",
  },
  {
    slug: "iab-q4-2025-ai-tools-report",
    title: "Q4 2025 AI Tools Report",
    date: "2025-10-01",
    dateLabel: "Q4 2025",
    source: "IAB NZ",
    kind: "Report",
    excerpt: "Contributor.",
    externalUrl: "https://www.iab.org.nz/news-resources/new-q4-2025-update-ai-tools-report",
  },
  {
    slug: "iab-kiwi-search-habits-2025",
    title: "Kiwi Search Habits 2025: The Next Era of Search",
    date: "2025-05-01",
    dateLabel: "May 2025",
    source: "IAB NZ",
    kind: "Report",
    excerpt: "Contributor and quoted source.",
    externalUrl: "https://www.iab.org.nz/news-resources/kiwi-search-habits-the-next-era-of-search",
  },
  {
    slug: "marketing-master-zania-guy-2024",
    title: "Marketing Master — Adnan Khan with Zania Guy",
    date: "2024-05-24",
    dateLabel: "24 May 2024",
    source: "Marketing Masters podcast · S1E5",
    kind: "Podcast",
    excerpt: "Long-form interview on martech, MMM, and the future of measurement.",
    externalUrl: "https://podcasts.apple.com/nz/podcast/marketing-master-adnan-khan-speaks-with-zania-guy/id1731231116?i=1000656575942",
  },
  {
    slug: "ma-research-challenges-marketing-wisdom-2024",
    title: "New Research Challenges Traditional Marketing Wisdom",
    date: "2024-10-15",
    dateLabel: "15 Oct 2024",
    source: "Marketing Association NZ",
    kind: "Article",
    excerpt: "On Ehrenberg-Bass and what genuinely changes practice.",
    externalUrl: "https://marketing.org.nz/resource-hub/author/adnan-khan",
  },
  {
    slug: "ma-beyond-attribution-2024",
    title: "Beyond Attribution: Why Modern Marketers Need Advanced Measurement Strategies",
    date: "2024-09-11",
    dateLabel: "11 Sep 2024",
    source: "Marketing Association NZ",
    kind: "Article",
    excerpt: "MMM, incrementality testing, consented first-party data.",
    externalUrl: "https://marketing.org.nz/resource-hub/author/adnan-khan",
  },
];

export const postBySlug = (slug: string) => thinkingPosts.find((p) => p.slug === slug);
