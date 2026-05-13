export interface ThinkingPost {
  slug: string;
  title: string;
  date: string; // ISO
  dateLabel: string;
  source: string;
  excerpt: string;
  body: string[];
  externalUrl: string;
}

export const thinkingPosts: ThinkingPost[] = [
  {
    slug: "2025-wrapped-marketing-insights",
    title: "2025 Wrapped: Marketing Insights from MA's Digital SIG",
    date: "2025-12-05",
    dateLabel: "5 Dec 2025",
    source: "Marketing Association NZ",
    excerpt:
      "A retrospective on the themes that shaped 2025 — from agentic AI moving from demo to production, to the long-overdue mainstreaming of MMM in NZ.",
    body: [
      "Across a year of Digital SIG events, three themes recurred: agentic AI moving from demo to production, the long-overdue mainstreaming of marketing mix modelling in New Zealand, and the gap between privacy-first ambition and operational reality.",
      "This piece pulls together the most useful provocations from the year, the practitioners who advanced the field, and the questions every CMO should be asking heading into 2026.",
      "Read the full piece on the Marketing Association resource hub.",
    ],
    externalUrl: "https://marketing.org.nz/resource-hub/author/adnan-khan",
  },
  {
    slug: "research-challenges-marketing-wisdom",
    title: "New Research Challenges Traditional Marketing Wisdom",
    date: "2024-10-15",
    dateLabel: "15 Oct 2024",
    source: "Marketing Association NZ",
    excerpt:
      "Recent research from Ehrenberg-Bass and others is challenging long-held marketing assumptions on brand vs. performance, attention, and the elasticity of advertising.",
    body: [
      "The 95/5 rule, the limits of category-entry-point thinking, the new attention metrics — there is more new evidence reshaping marketing in the last 24 months than in the prior decade.",
      "I unpack the studies that genuinely change practice, separate them from the ones that simply confirm priors, and outline what NZ marketers should do differently as a result.",
      "Read the full piece on the Marketing Association resource hub.",
    ],
    externalUrl: "https://marketing.org.nz/resource-hub/author/adnan-khan",
  },
  {
    slug: "beyond-attribution-advanced-measurement",
    title: "Beyond Attribution: Why Modern Marketers Need Advanced Measurement",
    date: "2024-09-11",
    dateLabel: "11 Sep 2024",
    source: "Marketing Association NZ",
    excerpt:
      "Last-click is dead. Multi-touch is unreliable. The future of measurement is a triangulation of MMM, incrementality testing and consented first-party data.",
    body: [
      "Cookie deprecation, mobile privacy and walled-garden over-attribution have broken digital attribution. Yet most NZ marketers still optimise to numbers no one believes.",
      "This piece lays out the modern measurement triangle: MMM for strategic allocation, incrementality testing for tactical decisions, and consented first-party data for activation. With practical examples from the Stitch and Stitch Predict client base.",
      "Read the full piece on the Marketing Association resource hub.",
    ],
    externalUrl: "https://marketing.org.nz/resource-hub/author/adnan-khan",
  },
];

export const postBySlug = (slug: string) =>
  thinkingPosts.find((p) => p.slug === slug);