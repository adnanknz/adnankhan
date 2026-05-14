import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/sections/SiteFooter";
import { SITE } from "@/data/site";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}/#person`,
  name: "Adnan Khan",
  givenName: "Adnan",
  familyName: "Khan",
  jobTitle: "Co-Founder & Managing Partner, Stitch | Co-Founder, Stitch Predict",
  email: `mailto:${SITE.email}`,
  telephone: SITE.phoneTel,
  url: `${SITE.url}/`,
  image: `${SITE.url}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ground Floor, 295 Parnell Road",
    addressLocality: "Parnell, Auckland",
    postalCode: "1052",
    addressCountry: "NZ",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of New South Wales",
    sameAs: "https://www.unsw.edu.au/",
  },
  worksFor: [
    { "@type": "Organization", name: "Stitch", url: SITE.stitch },
    { "@type": "Organization", name: "Stitch Predict", url: SITE.stitchPredict },
  ],
  memberOf: [
    { "@type": "Organization", name: "IAB New Zealand", url: SITE.iab },
    { "@type": "Organization", name: "Marketing Association of New Zealand", url: "https://marketing.org.nz/" },
    { "@type": "Organization", name: "IMANZ", url: "https://www.imanz.co.nz/" },
  ],
  award: [
    "TVNZ Marketing Awards 2022 — Supreme Award Winner",
    "TVNZ Marketing Awards 2022 — Excellence in Brand Transformation Strategy",
    "TVNZ Marketing Awards 2022 — Excellence in Consumer Products & Services Strategy",
    "Gold Effie 2022 — Strategic Thinking",
    "Gold Effie 2022 — Retail",
    "Global Effie Finalist 2023",
    "LinkedIn Top Voice — Digital Marketing",
  ],
  knowsAbout: [
    "Digital Transformation",
    "Customer Data Platforms",
    "Marketing Technology",
    "Media and Advertising",
    "Marketing Mix Modelling",
    "Artificial Intelligence",
    "Marketing Automation",
    "Attribution",
  ],
  sameAs: [
    SITE.linkedin,
    SITE.facebook,
    SITE.aboutMe,
    SITE.stitch,
    SITE.stitchPredict,
    SITE.imanz,
    SITE.maHub,
    SITE.iab,
  ],
};

const stitchLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://stitchtech.co/#org",
  name: "Stitch",
  url: SITE.stitch,
  founder: { "@id": `${SITE.url}/#person` },
  foundingDate: "2019-05",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ground Floor, 295 Parnell Road",
    addressLocality: "Parnell, Auckland",
    postalCode: "1052",
    addressCountry: "NZ",
  },
  sameAs: [SITE.imanz],
};

const stitchPredictLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://stitchpredict.com/#org",
  name: "Stitch Predict",
  url: SITE.stitchPredict,
  founder: { "@id": `${SITE.url}/#person` },
  foundingDate: "2023-10",
  description:
    "Marketing mix modelling SaaS that isolates the impact of each marketing activity on business outcomes, using large data and machine learning. Cookieless, privacy-safe attribution.",
};

const professionalServiceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Adnan Khan Consulting",
  url: `${SITE.url}/`,
  image: `${SITE.url}/og-image.jpg`,
  founder: { "@id": `${SITE.url}/#person` },
  areaServed: ["NZ", "AU", "Global"],
  telephone: SITE.phoneTel,
  email: `mailto:${SITE.email}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ground Floor, 295 Parnell Road",
    addressLocality: "Parnell, Auckland",
    postalCode: "1052",
    addressCountry: "NZ",
  },
  serviceType: [
    "Digital Transformation",
    "Customer Data Platforms",
    "Marketing Technology",
    "Media & Advertising",
    "Marketing Mix Modelling",
    "AI Strategy",
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: `${SITE.url}/`,
  name: "Adnan Khan",
  description: "Digital transformation, AI and marketing consultant — Auckland, New Zealand.",
  publisher: { "@id": `${SITE.url}/#person` },
  inLanguage: "en-NZ",
};

const SiteLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Helmet>
      <html lang="en-NZ" />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta httpEquiv="content-language" content="en-NZ" />
      <meta name="theme-color" content="#6B1F2A" />
      <meta name="author" content="Adnan Khan" />
      <link rel="alternate" hrefLang="en-NZ" href={`${SITE.url}/`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE.url}/`} />
      <script type="application/ld+json">{JSON.stringify(personLd)}</script>
      <script type="application/ld+json">{JSON.stringify(stitchLd)}</script>
      <script type="application/ld+json">{JSON.stringify(stitchPredictLd)}</script>
      <script type="application/ld+json">{JSON.stringify(professionalServiceLd)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteLd)}</script>
    </Helmet>
    <a href="#main" className="skip-link">Skip to content</a>
    <Navbar />
    <main id="main" className="relative z-10">{children}</main>
    <SiteFooter />
  </>
);

export default SiteLayout;
