export interface Service {
  n: string;
  slug: string;
  title: string;
  short: string;
  long: string[];
  introLink?: { label: string; href: string };
  lead: string;
  included: string[];
  relatedWork: { label: string; href: string }[];
}

export const services: Service[] = [
  {
    n: "01", slug: "digital-transformation",
    lead: "Digital transformation connects data, technology and media with a strategy, skills and operating model that help a business work as one.",
    included: ["Digital transformation strategy", "Capability build", "Operating model design", "Connecting data, technology and media"],
    relatedWork: [{"label": "Turners", "href": "/casestudies#turners"}, {"label": "Cisco", "href": "/casestudies#cisco"}],
    title: "Digital transformation",
    short: "Strategy, capability build, operating model.",
    long: [
      "Strategy, capability build, operating model. End-to-end programmes that move brands from disconnected channels to a coordinated data, technology and media stack.",
    ],
  },
  {
    n: "02", slug: "customer-data-platforms",
    lead: "A customer data platform unifies first-party customer data into persistent profiles that marketing and other systems can use in real time.",
    included: ["CDP selection, implementation and activation", "Real-time data unification", "Audience activation", "Tealium, mParticle, Segment, Salesforce CDP, Adobe Real-Time CDP and ActionIQ"],
    relatedWork: [{"label": "Mr Apple", "href": "/casestudies#mr-apple"}],
    title: "Customer data platforms",
    short: "CDP selection, implementation, and activation.",
    long: [
      "CDP selection, implementation, and activation. Tealium, mParticle, Segment, Salesforce CDP, Adobe Real-Time CDP, ActionIQ. Real-time data unification and audience activation.",
    ],
  },
  {
    n: "03", slug: "marketing-technology",
    lead: "Marketing technology brings together the software and data a business uses to automate marketing and manage customer relationships.",
    included: ["Martech stack design", "Marketing automation", "Lifecycle programmes", "Marketo, HubSpot, Braze, Klaviyo and Iterable"],
    relatedWork: [{"label": "Comvita", "href": "/casestudies#comvita"}],
    title: "Marketing technology",
    short: "Martech stack design and lifecycle programmes.",
    long: [
      "Martech stack design, Marketo, HubSpot, Braze, Klaviyo, Iterable. Marketing automation and lifecycle programmes that pay for themselves.",
    ],
  },
  {
    n: "04", slug: "media-and-advertising",
    lead: "Media and advertising combines paid media strategy and execution to reach audiences and drive measurable revenue.",
    included: ["Paid media strategy", "Paid media execution", "Meta, Google and TikTok", "Programmatic and retail media"],
    relatedWork: [{"label": "AA Smartfuel", "href": "/casestudies#aa-smartfuel"}],
    title: "Media and advertising",
    short: "Paid media strategy and execution.",
    long: [
      "Paid media strategy and execution. Meta, Google, TikTok, programmatic, retail media. Optimised for measurable revenue, not vanity.",
    ],
  },
  {
    n: "05", slug: "marketing-mix-modelling",
    lead: "Marketing mix modelling estimates how marketing channels and outside factors contribute to business outcomes using aggregated historical data.",
    included: ["Stitch Predict marketing mix modelling", "Cookieless, privacy-safe causal attribution using machine learning", "6 to 10 weeks to deploy, with ±6 to 10% variance", "2 to 3 years of weekly variable data"],
    relatedWork: [{"label": "Stitch Predict", "href": "https://stitchpredict.com"}],
    title: "Marketing mix modelling",
    short: "Stitch Predict: cookieless, privacy-safe causal attribution.",
    introLink: { label: "Stitch Predict", href: "https://stitchpredict.com" },
    long: [
      "Stitch Predict. Cookieless, privacy-safe causal attribution using ML. Models take 6 to 10 weeks to deploy, with ±6 to 10% variance, on 2 to 3 years of weekly variable data.",
    ],
  },
];
