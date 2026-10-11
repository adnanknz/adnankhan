import { yearsExperience } from "@/data/site";

export interface FAQ { q: string; a: string; }

export const faqs: FAQ[] = [
  {
    q: "Who is Adnan Khan?",
    a: `Adnan Khan is Co-Founder and Managing Partner of Stitch and Co-Founder of Stitch Predict, both based in Auckland, New Zealand. He has ${yearsExperience()}+ years in digital transformation, customer data, marketing technology, and AI, including senior roles at Meta (Facebook) and Microsoft. He is the IAB NZ AI Working Group Lead and Chair of the Marketing Association Digital SIG.`,
  },
  {
    q: "What does Stitch do?",
    a: "Stitch is an Auckland-based consultancy specialising in media, marketing, advertising, and data-driven technology. It builds customer data platforms, marketing automation, advanced measurement, and AI workflows for NZ and global brands including Mr Apple, Comvita, Turners, AA Smartfuel, BNZ, Bayleys and more.",
  },
  {
    q: "What is Stitch Predict?",
    a: "Stitch Predict is a marketing mix modelling SaaS platform co-founded by Adnan Khan and Simon Wedde in 2023. It isolates the causal impact of each marketing activity on business outcomes using large data and machine learning, with no reliance on cookies or device tracking.",
  },
  {
    q: "How can I contact Adnan?",
    a: "Email adnan@adnan.co.nz, phone +64 27 513 0110, or message him on LinkedIn at https://www.linkedin.com/in/adnan2/.",
  },
  {
    q: "Where is Adnan based?",
    a: "Adnan is based in Auckland, New Zealand. Stitch is at Ground Floor, 295 Parnell Road, Parnell, Auckland 1052.",
  },
  {
    q: "What services does Adnan offer?",
    a: "Adnan offers digital transformation, customer data platforms, marketing technology, media and advertising, and marketing mix modelling. He also offers AI strategy and advisory.",
  },
  {
    q: "What is marketing mix modelling (MMM)?",
    a: "Marketing mix modelling (MMM) is statistical modelling that estimates how much each marketing channel and outside factor contributes to sales or other outcomes, using aggregated historical data rather than user-level tracking. Stitch Predict models take 6 to 10 weeks to deploy, with ±6 to 10% variance, on 2 to 3 years of weekly variable data.",
  },
  {
    q: "What is a customer data platform (CDP), and which ones does Adnan work with?",
    a: "A customer data platform (CDP) is software that unifies first-party customer data from many sources into persistent profiles that marketing and other systems can use in real time. Adnan works with Tealium, mParticle, Segment, Salesforce CDP, Adobe Real-Time CDP and ActionIQ.",
  },
  {
    q: "What did Adnan do at Facebook (Meta)?",
    a: "Adnan joined Facebook in August 2009 as the 5th Facebook employee in APAC and first Account Manager in Facebook APAC, and was one of the first 200 sales employees globally. He later became Client Partner NZ and Country Manager NZ (2013 to 2014).",
  },
  {
    q: "What awards has Adnan's work won?",
    a: "Adnan's work has won the TVNZ Marketing Awards 2022 Supreme Award and three Gold Effies. Recognition also includes TVNZ Excellence in Brand Transformation Strategy and Excellence in Consumer Products & Services Strategy, 2022 Gold Effies in Strategic Thinking and Retail, Global Effie Finalist 2023, and LinkedIn Top Voice in Digital Marketing.",
  },
  {
    q: "Does Adnan speak at events?",
    a: "Yes, Adnan speaks at events, moderates industry panels and appears on podcasts. He moderated IAB NZ × Google’s “The Future of Marketing & AI” in March 2026 and the AI panel at the Marketing Association’s Digital Day Out 2025, was a University of Auckland BUSMGT 719 industry panellist, and a Marketing Masters podcast guest. Speaking enquiries are welcome via the contact page at https://adnan.co.nz/contact.",
  },
  {
    q: "What industry roles does Adnan hold?",
    a: "Adnan is IAB NZ AI Working Group Lead and Chair of the Marketing Association NZ Digital SIG. He also contributes to the IAB NZ Emerging Technology Council and the IMANZ Innovation & Technology Group.",
  },
];
