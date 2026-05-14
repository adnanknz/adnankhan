import SEO from "@/components/SEO";
import { SITE } from "@/data/site";
import ContactForm from "@/components/sections/Contact";
import { faqs } from "@/data/faqs";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Contact = () => (
  <>
    <SEO
      title="Contact Adnan Khan — Auckland, New Zealand"
      description="Email adnan.khan@me.com. Phone +64 27 513 0110. Auckland-based. Available for digital transformation, AI strategy, martech, MMM, and advisory work."
      path="/contact"
      jsonLd={[faqJsonLd]}
      breadcrumbs={[
        { name: "Home", url: `${SITE.url}/` },
        { name: "Contact", url: `${SITE.url}/contact` },
      ]}
    />
    <article className="pt-32 pb-12 px-5 lg:px-8">
      <div className="container mx-auto">
        <p className="eyebrow mb-6">Contact</p>
        <h1 className="font-display-1 text-ink mb-8 max-w-[18ch]" style={{ fontSize: "clamp(56px, 9vw, 144px)" }}>
          Get in touch.
        </h1>
        <p className="text-ink/85 text-[18px] leading-[1.6] max-w-[64ch] mb-12">
          Auckland-based, working globally. Available for digital transformation, AI strategy, martech, customer data, MMM and advisory work.
        </p>

        <div className="grid grid-cols-12 gap-x-6 gap-y-3 max-w-[68ch] mb-12 text-[15px]">
          {[
            ["EMAIL", SITE.email, `mailto:${SITE.email}`, false],
            ["PHONE", SITE.phone, `tel:${SITE.phoneTel}`, false],
            ["LINKEDIN", "linkedin.com/in/adnan2", SITE.linkedin, true],
            ["FACEBOOK", "facebook.com/khan", SITE.facebook, true],
            ["STITCH", "stitchtech.co", SITE.stitch, true],
            ["STITCH PREDICT", "stitchpredict.com", SITE.stitchPredict, true],
          ].map(([k, v, h, ext]) => (
            <div key={k as string} className="col-span-12 md:col-span-6 grid grid-cols-[110px_1fr] gap-4 items-baseline hairline-b pb-2">
              <span className="mono text-ink/70">{k as string}</span>
              <a
                href={h as string}
                target={ext ? "_blank" : undefined}
                rel={ext ? "noopener noreferrer" : undefined}
                className="link-underline text-ink font-medium"
              >
                {v as string}
              </a>
            </div>
          ))}
        </div>
      </div>
    </article>
    <ContactForm />
    <div className="px-5 lg:px-8 pb-20">
      <div className="container mx-auto">
        <p className="mono text-ink/65 text-[13px]">
          Ground Floor, 295 Parnell Road, Parnell, Auckland 1052, New Zealand.
        </p>
      </div>
    </div>
  </>
);

export default Contact;
