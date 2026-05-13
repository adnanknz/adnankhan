export interface Service {
  n: string;
  title: string;
  short: string;
  long: string[];
  idealFor: string;
  pricing: string;
}

export const services: Service[] = [
  {
    n: "01",
    title: "Marketing mix modelling",
    short: "Privacy-compliant, cookie-free MMM via Stitch Predict. 6-10 week builds. ±6-10% variance.",
    long: [
      "Marketing mix modelling is the privacy-first measurement standard for 2026 and beyond. With cookies deprecated and walled gardens over-attributing, MMM uses aggregated, anonymous business data to isolate the causal impact of every marketing dollar — without tracking individuals.",
      "Through Stitch Predict, deployments are typically 6 to 10 weeks with ±6-10% variance — sophisticated MMM accessible to brands of any media budget.",
      "Engagements include readiness assessment, data audit, model build, calibration with experiment data, scenario planning and ongoing measurement-as-a-service.",
    ],
    idealFor: "CMOs at $20M+ revenue brands evaluating measurement infrastructure.",
    pricing: "Engagements from NZD $25,000.",
  },
  {
    n: "02",
    title: "Customer data platforms",
    short: "Tealium-first, vendor-agnostic. CDP audit, selection, deployment.",
    long: [
      "A CDP is the linchpin of modern, privacy-first marketing — but only if it's chosen and deployed with strategic intent.",
      "I lead CDP discovery, vendor selection, deployment and operationalisation, primarily on Tealium (Stitch is Tealium's Primary Certified Strategic Deployment Partner in NZ) but vendor-agnostic by design.",
      "Outcomes: a single customer view, server-side measurement, consent-respecting personalisation and the foundation for first-party-data activation.",
    ],
    idealFor: "Marketing and tech leaders ready to consolidate fragmented customer data.",
    pricing: "Engagements from NZD $40,000.",
  },
  {
    n: "03",
    title: "Martech and adtech architecture",
    short: "End-to-end stack design, integration, server-side measurement.",
    long: [
      "Most martech stacks were assembled, not designed. The result is overlap, blind spots and brittle integrations.",
      "I audit existing stacks, design future-state architecture, and lead the integration work — from server-side tagging and consent management through to attribution, BI and activation.",
      "Vendor-neutral. Outcomes-led.",
    ],
    idealFor: "Brands inheriting legacy tech debt or planning a stack consolidation.",
    pricing: "Engagements from NZD $20,000.",
  },
  {
    n: "04",
    title: "AI marketing advisory",
    short: "Generative and agentic AI use cases, governance, ROI frameworks.",
    long: [
      "Most AI pilots fail to scale because they aren't tied to measurable commercial outcomes. I help marketing leaders cut through the hype.",
      "Workshops, opportunity mapping, governance frameworks and pragmatic ROI models for both generative and agentic AI in marketing operations.",
      "Drawing on my role as AI Working Group Lead at IAB New Zealand and Chair of the Marketing Association Digital SIG.",
    ],
    idealFor: "Executive teams setting an AI marketing roadmap for 2026 and beyond.",
    pricing: "Engagements from NZD $15,000.",
  },
  {
    n: "05",
    title: "Speaking and workshops",
    short: "Keynotes, panel moderation, executive workshops.",
    long: [
      "Keynotes and workshops on marketing mix modelling, AI marketing, agentic AI, customer data platforms, privacy-first measurement and the future of marketing technology.",
      "Past venues include IAB NZ, the Marketing Association of NZ, The Icehouse Owner Manager Program, Google NZ, Marketo Summit San Francisco and DOMO City Tours across ANZ.",
      "Available for keynotes, panels, executive offsites and bespoke workshops.",
    ],
    idealFor: "Conference programmers, association leads, executive teams.",
    pricing: "Speaking fees on enquiry.",
  },
];