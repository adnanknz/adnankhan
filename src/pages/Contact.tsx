import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be under 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(150, "Subject must be under 150 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [botcheck, setBotcheck] = useState("");
  const [lastSubmit, setLastSubmit] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side throttle to deter rapid repeat submissions
    const now = Date.now();
    if (now - lastSubmit < 5000) {
      toast({
        title: "Please wait",
        description: "You can only send one message every few seconds.",
        variant: "destructive",
      });
      return;
    }

    // Honeypot — real users won't fill this hidden field
    if (botcheck) {
      return;
    }

    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Please check your input";
      toast({
        title: "Invalid input",
        description: firstError,
        variant: "destructive",
      });
      return;
    }

    setSending(true);
    setLastSubmit(now);

    const WEB3FORMS_KEY = "1b6b76cb-2e33-43e6-9c08-77f081fdf043";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: parsed.data.name,
          email: parsed.data.email,
          subject: parsed.data.subject,
          message: parsed.data.message,
          botcheck: "",
          from_name: "adnan.co.nz Contact Form",
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent",
          description: "Thank you! I'll be in touch shortly.",
        });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try emailing me directly at adnan.khan@me.com",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try emailing me directly at adnan.khan@me.com",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <SEO title="Contact Adnan Khan | Auckland NZ Consultant" description="Get in touch about digital transformation, martech, AI consulting, or speaking engagements. Based in Auckland, New Zealand." path="/contact" />
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-display-md lg:text-display-lg font-semibold mb-6">
            Get in touch
          </h1>
          <p className="text-lg text-muted-foreground mb-16">
            Whether you're a law firm exploring AI or a brand looking to improve marketing
            measurement, I'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      maxLength={100}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      maxLength={255}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    maxLength={150}
                    placeholder="How can I help?"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    maxLength={2000}
                    rows={5}
                    placeholder="Tell me about your project or challenge..."
                  />
                </div>
                {/* Honeypot field — hidden from real users, bots will fill it */}
                <input
                  type="text"
                  name="botcheck"
                  value={botcheck}
                  onChange={(e) => setBotcheck(e.target.value)}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <Button variant="hero" size="lg" type="submit" disabled={sending}>
                  {sending ? "Sending..." : "Send message"} <ArrowRight size={16} />
                </Button>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-8">
              {/* TODO: Set up Cal.com and replace with your booking link */}
              <div>
                <h3 className="font-display text-lg font-semibold mb-4">Book a call</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer to schedule directly? Book a free 30-minute discovery call.
                </p>
                {/* TODO: Replace with actual Cal.com link, e.g. https://cal.com/adnankhan/30min */}
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  Schedule a call <ArrowRight size={14} />
                </a>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold mb-4">Contact details</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <a
                    href="mailto:adnan.khan@me.com"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Mail size={14} className="text-accent" /> adnan.khan@me.com
                  </a>
                  <a
                    href="tel:+64275130110"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Phone size={14} className="text-accent" /> +64 27 513 0110
                  </a>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-accent" /> Auckland, New Zealand
                  </div>
                  <a
                    href="https://linkedin.com/in/adnan2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Linkedin size={14} className="text-accent" /> linkedin.com/in/adnan2
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold mb-4">Companies</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Stitch</strong> - MarTech consultancy
                  </p>
                  <p>
                    <strong className="text-foreground">Stitch Predict</strong> - SaaS marketing
                    mix modelling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
