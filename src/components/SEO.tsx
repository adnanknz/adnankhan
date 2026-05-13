import { Helmet } from "react-helmet-async";
import { SITE } from "@/data/site";

interface Crumb { name: string; url: string; }

interface Props {
  title: string;
  description: string;
  path: string; // route, e.g. "/about"
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  jsonLd?: Record<string, any>[];
  breadcrumbs?: Crumb[];
}

const SEO = ({
  title,
  description,
  path,
  ogType = "website",
  ogImage,
  jsonLd = [],
  breadcrumbs,
}: Props) => {
  const url = SITE.url + path;
  const image = ogImage ?? `${SITE.url}/og${path === "/" ? "/home" : path}.jpg`;

  const allLd: Record<string, any>[] = [...jsonLd];
  if (breadcrumbs && breadcrumbs.length) {
    allLd.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    });
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_NZ" />
      <meta property="og:site_name" content="Adnan Khan" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content="Adnan Khan, Auckland marketing technology pioneer"
      />
      {allLd.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;