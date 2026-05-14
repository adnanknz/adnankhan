export interface CaseStudy {
  slug: string;
  client: string;
  headline: string;
  metrics: string[];
  body: string;
  recognition?: string[];
  tag?: string;
  externalLink?: { label: string; href: string };
  metaTitle: string;
  metaDescription: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "comvita",
    client: "Comvita",
    headline: "Marketing automation transformation.",
    metrics: [
      "+480% new lead conversion (6 months)",
      "+255% AOV uplift on nurture",
      "Email = #2 revenue source online",
    ],
    body:
      "In six months of digital transformation with marketing automation and nurture, Comvita achieved a 480% increase in new lead conversion, average sale value up 255% when part of a lead nurture campaign, and email marketing became the second highest revenue generator across all online activities. Marketo lead nurturing achieved one of the highest conversion rates of any online activity. The programme pioneered Comvita's pathway to digital transformation, with smart data speaking to the customer at each stage of the journey and tracking revenue into the future.",
    tag: "Marketo · digital transformation · nurture · attribution (krunch.co era)",
    metaTitle: "Comvita Marketing Automation Transformation · Adnan Khan",
    metaDescription: "Comvita Marketo transformation: 480% lift in new lead conversion, 255% AOV uplift on nurture, email as #2 revenue source online.",
  },
  {
    slug: "aa-smartfuel",
    client: "AA Smartfuel",
    headline: "A pop-up drive-in cinema, built in eight days.",
    metrics: [
      "8x return on ad spend",
      "8,000 tickets sold",
      "Built in 8 days · sold out",
    ],
    body:
      "During COVID, AA Smartfuel needed a way to keep staff in roles and partner businesses operating. We built a pop-up drive-in cinema in the heart of Auckland in 8 days. Digital media plus offline attribution plus multi-channel marketing automation plus email and two-way SMS nurture, integrating multiple disjointed website and ticketing platforms to measure and optimise against transaction-driven revenue in real time. The result: 8x return on ad spend, 8,000 tickets sold within a fortnight, all tickets sold out with no other marketing, jobs saved, partners kept operating.",
    tag: "Crisis response · real-time optimisation · integration",
    externalLink: { label: "News article", href: "https://ecommercenews.co.nz/" },
    metaTitle: "AA Smartfuel Drive-In Cinema · Case Study · Adnan Khan",
    metaDescription: "Real-time integration and optimisation that turned a COVID pop-up drive-in cinema into an 8x ROAS, sold-out lifeline.",
  },
  {
    slug: "turners",
    client: "Turners Cars / Tina from Turners",
    headline: "A national auto retailer, transformed.",
    metrics: [
      "TVNZ Marketing Awards · Supreme Winner",
      "2x Gold Effie 2022",
      "Global Effie Finalist 2023",
    ],
    body:
      "A groundbreaking campaign for Turners Cars that combined marketing technology, customer data and rich storytelling to transform the brand and lift revenue. Recognised with the TVNZ Marketing Awards Supreme Award Winner 2022, Excellence in Brand Transformation Strategy, Excellence in Consumer Products & Services Strategy, and 2x Gold Effie 2022 (Strategic Thinking, Retail). Global Effie Finalist 2023.",
    recognition: [
      "TVNZ Marketing Awards 2022 — Supreme Winner",
      "TVNZ Marketing Awards 2022 — Excellence in Brand Transformation Strategy",
      "TVNZ Marketing Awards 2022 — Excellence in Consumer Products & Services Strategy",
      "Gold Effie 2022 — Strategic Thinking",
      "Gold Effie 2022 — Retail",
      "Global Effie Finalist 2023",
    ],
    tag: "Strategy · digital media · CDP · marketing automation",
    metaTitle: "Turners / Tina from Turners · Case Study · Adnan Khan",
    metaDescription: "How marketing technology, customer data and storytelling transformed Turners Cars. Triple TVNZ winner including Supreme. 2x Gold Effie 2022.",
  },
  {
    slug: "mr-apple",
    client: "Mr Apple",
    headline: "Tealium + Stitch global growth.",
    metrics: [
      "+150% customer database",
      "First e-commerce campaign in India",
      "First third-party retailer direct-ROAS measurement",
    ],
    body:
      "Working with Tealium and Mr Apple, we transformed first-party data into actionable real-time engagement and unlocked global growth, including Mr Apple's first e-commerce campaign in India. Adnan: \"Our collaboration with Tealium and Mr Apple enabled us to fully realise the value of a data-driven approach, transforming first-party data into actionable insights for real-time engagement. Together, we're pioneering new growth avenues in the primary industry export market.\" Customer database grew by 150%.",
    tag: "Tealium · global CDP · first-party data · ANZ to India",
    externalLink: {
      label: "Read the Tealium case study",
      href: "https://tealium.com/resource/case-study/mr-apple-propels-global-growth-with-tealium-and-stitch/",
    },
    metaTitle: "Mr Apple · Global Growth with Tealium · Case Study",
    metaDescription: "Stitch + Tealium + Mr Apple: 150% database growth, India e-commerce launch, first third-party retailer direct-ROAS measurement.",
  },
  {
    slug: "cisco",
    client: "Cisco",
    headline: "World's first integrated transformation case study.",
    metrics: [
      "World-first integration",
      "Global rollout",
      "Digital + Automation + Attribution + BI",
    ],
    body:
      "Produced the world's first global integrated digital transformation, marketing automation, digital media, people-based attribution and business intelligence case study for Cisco. Delivered through krunch.co, pre-Stitch.",
    tag: "Cisco Global · krunch.co era",
    metaTitle: "Cisco World-First Integrated Case Study · Adnan Khan",
    metaDescription: "World's first global integrated digital transformation, marketing automation, media, attribution and BI case study, for Cisco.",
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
