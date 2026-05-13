import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/sections/SiteFooter";
import { SITE } from "@/data/site";

const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#adnan`,
      name: "Adnan Khan",
      givenName: "Adnan",
      familyName: "Khan",
      url: `${SITE.url}/`,
      image: `${SITE.url}/images/adnan-khan.jpg`,
      email: `mailto:${SITE.email}`,
      telephone: SITE.phoneTel,
      jobTitle: "Co-Founder & Managing Partner, Stitch | Co-Founder, Stitch Predict",
      description:
        "Marketing technology pioneer based in Auckland, New Zealand. Co-Founder and Managing Partner of Stitch, an independent martech and media consultancy, and Co-Founder of Stitch Predict, a marketing mix modelling SaaS platform. Ex-Meta (5th employee in APAC) and ex-Microsoft. 16+ years in marketing transformation.",
      worksFor: [
        { "@id": "https://stitchtech.co/#org" },
        { "@id": "https://stitchpredict.com/#org" },
      ],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University of New South Wales", url: "https://www.unsw.edu.au/" },
        { "@type": "Organization", name: "Meta", url: "https://about.meta.com/" },
        { "@type": "Organization", name: "Microsoft", url: "https://www.microsoft.com/" },
      ],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "Bachelor of Media & Communications (Honours)" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Meta Certified Media Buying Professional" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Meta Certified Agency Partner" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Tealium iQ Technical" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Tealium iQ Basic" },
      ],
      knowsAbout: [
        "Marketing Mix Modelling", "Media Mix Modelling", "Customer Data Platforms",
        "Marketing Technology", "Advertising Technology", "AI Marketing",
        "Agentic AI", "Privacy-First Measurement", "Tealium iQ",
        "Tealium AudienceStream", "Meta Advertising", "First-Party Data Strategy",
        "Marketing Attribution", "Marketing Effectiveness",
      ],
      knowsLanguage: ["en"],
      nationality: { "@type": "Country", name: "New Zealand" },
      address: { "@type": "PostalAddress", addressLocality: "Auckland", addressRegion: "Auckland", addressCountry: "NZ" },
      award: [
        "TVNZ Marketing Awards 2022 Supreme Award (Turners)",
        "TVNZ Marketing Awards 2022 Excellence in Brand Transformation Strategy",
        "TVNZ Marketing Awards 2022 Excellence in Consumer Products & Services Strategy",
        "Gold Effie Award New Zealand 2022 Strategic Thinking",
        "Gold Effie Award New Zealand 2022 Retail",
        "Global Effie Awards 2023 Finalist",
      ],
      memberOf: [
        { "@type": "Organization", name: "Marketing Association of New Zealand", url: "https://marketing.org.nz/" },
        { "@type": "Organization", name: "IAB New Zealand", url: "https://www.iab.org.nz/" },
        { "@type": "Organization", name: "IMANZ", url: "https://www.imanz.co.nz/" },
      ],
      sameAs: [SITE.linkedin, SITE.aboutMe, SITE.stitch, SITE.stitchPredict, SITE.imanz, SITE.maHub],
    },
    {
      "@type": "Organization",
      "@id": "https://stitchtech.co/#org",
      name: "Stitch",
      url: SITE.stitch,
      description:
        "Independent marketing technology, advertising technology and media consultancy based in Auckland, New Zealand. Tealium's Primary Certified Strategic Deployment Partner in NZ.",
      foundingDate: "2019",
      founder: [
        { "@id": `${SITE.url}/#adnan` },
        { "@type": "Person", name: "Simon Wedde" },
      ],
      address: { "@type": "PostalAddress", addressLocality: "Auckland", addressCountry: "NZ" },
      areaServed: ["NZ", "AU", { "@type": "Place", name: "Global" }],
      sameAs: ["https://nz.linkedin.com/company/stitchtechnology", SITE.imanz],
    },
    {
      "@type": "Organization",
      "@id": "https://stitchpredict.com/#org",
      name: "Stitch Predict",
      url: SITE.stitchPredict,
      description:
        "Marketing mix modelling SaaS platform. Privacy-compliant, cookie-free measurement using big data, AI and machine learning to attribute the impact of marketing activities on business outcomes.",
      foundingDate: "2023",
      founder: [
        { "@id": `${SITE.url}/#adnan` },
        { "@type": "Person", name: "Simon Wedde" },
        { "@type": "Person", name: "Alex Rowley" },
      ],
      parentOrganization: { "@id": "https://stitchtech.co/#org" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: `${SITE.url}/`,
      name: "Adnan Khan",
      description: "Marketing technology pioneer in Auckland, New Zealand.",
      publisher: { "@id": `${SITE.url}/#adnan` },
      inLanguage: "en-NZ",
    },
  ],
};

const SiteLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Helmet>
      <html lang="en-NZ" />
      <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
      <meta httpEquiv="content-language" content="en-NZ" />
      <meta name="theme-color" content="#5B1A1A" />
      <meta name="author" content="Adnan Khan" />
      <link rel="alternate" hrefLang="en-NZ" href={`${SITE.url}/`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE.url}/`} />
      <script type="application/ld+json">{JSON.stringify(siteGraph)}</script>
    </Helmet>
    <a href="#main" className="skip-link">Skip to content</a>
    <Navbar />
    <main id="main" className="relative z-10">{children}</main>
    <SiteFooter />
  </>
);

export default SiteLayout;