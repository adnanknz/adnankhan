export interface Service {
  n: string;
  slug: string;
  title: string;
  short: string;
  long: string[];
}

export const services: Service[] = [
  {
    n: "01", slug: "digital-transformation",
    title: "Digital transformation",
    short: "Strategy, capability build, operating model.",
    long: [
      "Strategy, capability build, operating model. End-to-end programmes that move brands from disconnected channels to a coordinated data, technology and media stack.",
    ],
  },
  {
    n: "02", slug: "customer-data-platforms",
    title: "Customer data platforms",
    short: "CDP selection, implementation, and activation.",
    long: [
      "CDP selection, implementation, and activation. Tealium, mParticle, Segment, Salesforce CDP, Adobe Real-Time CDP, ActionIQ. Real-time data unification and audience activation.",
    ],
  },
  {
    n: "03", slug: "marketing-technology",
    title: "Marketing technology",
    short: "Martech stack design and lifecycle programmes.",
    long: [
      "Martech stack design, Marketo, HubSpot, Braze, Klaviyo, Iterable. Marketing automation and lifecycle programmes that pay for themselves.",
    ],
  },
  {
    n: "04", slug: "media-and-advertising",
    title: "Media and advertising",
    short: "Paid media strategy and execution.",
    long: [
      "Paid media strategy and execution. Meta, Google, TikTok, programmatic, retail media. Optimised for measurable revenue, not vanity.",
    ],
  },
  {
    n: "05", slug: "marketing-mix-modelling",
    title: "Marketing mix modelling",
    short: "Stitch Predict — cookieless, privacy-safe causal attribution.",
    long: [
      "Stitch Predict (https://stitchpredict.com). Cookieless, privacy-safe causal attribution using ML. Models take 6 to 10 weeks to deploy, with ±6 to 10% variance, on 2 to 3 years of weekly variable data.",
    ],
  },
];
