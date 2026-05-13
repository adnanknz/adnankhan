export interface CaseStudy {
  slug: "turners" | "aa-smartfuel" | "mr-apple";
  client: string;
  headline: string;
  metrics: string[];
  body: string;
  recognition?: string[];
  tag: string;
  externalLink?: { label: string; href: string };
  metaTitle: string;
  metaDescription: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "turners",
    client: "Turners Automotive Group",
    headline: "A national auto retailer, transformed.",
    metrics: [
      "+5.3x lead volume",
      "−68% cost per lead",
      "+38% post-lead interaction",
    ],
    body:
      "A groundbreaking campaign for Turners Cars that leveraged marketing technology, customer data platforms and rich casting and storytelling to transform the company's brand and boost revenue.",
    recognition: [
      "TVNZ Marketing Awards 2022 (triple win including Supreme)",
      "Part of team that won 2x Gold Effies 2022",
      "Global Effie Finalist 2023",
    ],
    tag:
      "Strategy · digital media · offline attribution · marketing automation · email and two-way SMS nurture",
    metaTitle: "Turners Automotive · Case Study · Adnan Khan",
    metaDescription:
      "How marketing technology, CDPs and storytelling transformed Turners Cars. Triple TVNZ Marketing Award winner including Supreme. 2x Gold Effie 2022.",
  },
  {
    slug: "aa-smartfuel",
    client: "AA Smartfuel",
    headline: "A pop-up drive-in cinema, built in a fortnight.",
    metrics: [
      "8x return on ad spend",
      "Sold out within weeks",
      "Saved jobs through lockdown",
    ],
    body:
      "During COVID, AA Smartfuel turned a pop-up drive-in cinema in the heart of Auckland into an emergency revenue lifeline. We integrated disjointed website and ticketing platforms to optimise against real-time transaction revenue, delivering 8x ROAS and selling out every screening. The initiative also saved staff from redundancies and kept partners operating through the lockdown.",
    tag: "Crisis response · real-time optimisation · integration",
    externalLink: {
      label: "News article",
      href: "https://ecommercenews.co.nz/",
    },
    metaTitle: "AA Smartfuel Drive-In Cinema · Case Study · Adnan Khan",
    metaDescription:
      "Real-time integration and optimisation that turned a COVID pop-up drive-in cinema into an 8x ROAS, sold-out lifeline.",
  },
  {
    slug: "mr-apple",
    client: "Mr Apple",
    headline: "150% database growth and India's first e-commerce launch.",
    metrics: [
      "+150% customer database",
      "First Indian e-commerce campaign",
      "First third-party retailer direct-ROAS measurement",
    ],
    body:
      "Stitch worked with Mr Apple (Scales Corporation) and Tealium to unify customer data across global markets and pioneer direct return-on-ad-spend measurement with a third-party retailer.",
    tag: "Tealium · global CDP · first-party data · ANZ to India",
    externalLink: {
      label: "Read the Tealium case study",
      href: "https://tealium.com/resource/case-study/mr-apple-propels-global-growth-with-tealium-and-stitch/",
    },
    metaTitle: "Mr Apple · Global Growth with Tealium · Case Study",
    metaDescription:
      "Stitch + Tealium + Mr Apple: 150% database growth, India e-commerce launch, and first third-party retailer direct-ROAS measurement.",
  },
];

export const caseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);