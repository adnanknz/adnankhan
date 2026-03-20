import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "Thank you! I'll be in touch shortly." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-display-md lg:text-display-lg font-semibold mb-6">Contact</h1>
          <p className="text-lg text-muted-foreground mb-16">Let's discuss how I can help your organization.</p>

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
                    placeholder="How can I help?"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Tell me about your project…"
                  />
                </div>
                <Button variant="hero" size="lg" type="submit">
                  Send message <ArrowRight size={16} />
                </Button>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-lg font-semibold mb-4">Book a call</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer to schedule directly? Use the booking link below to find a time that works.
                </p>
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  Schedule on Cal.com <ArrowRight size={14} />
                </a>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold mb-4">Details</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Mail size={14} className="text-accent" /> hello@consultant.com</div>
                  <div className="flex items-center gap-2"><MapPin size={14} className="text-accent" /> New York, NY</div>
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
