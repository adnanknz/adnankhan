import SEO from "@/components/SEO";
import { SITE } from "@/data/site";
import ContactSection from "@/components/sections/Contact";

const Contact = () => (
  <>
    <SEO
      title="Contact Adnan Khan · Martech Consultant, Auckland"
      description="Email adnan.khan@me.com or connect on LinkedIn. Consulting, speaking, Stitch and Stitch Predict enquiries. Auckland, New Zealand."
      path="/contact"
      breadcrumbs={[
        { name: "Home", url: `${SITE.url}/` },
        { name: "Contact", url: `${SITE.url}/contact` },
      ]}
    />
    <div className="pt-24">
      <ContactSection />
    </div>
  </>
);

export default Contact;
