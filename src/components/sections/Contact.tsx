import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import MagneticButton from "@/components/MagneticButton";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(1).max(2000),
});

type Field = "name" | "email" | "company" | "message";

const FloatField = ({
  id, label, type = "text", value, onChange, multiline, maxLength,
}: {
  id: Field; label: string; type?: string;
  value: string; onChange: (v: string) => void;
  multiline?: boolean; maxLength: number;
}) => {
  const [focus, setFocus] = useState(false);
  const float = focus || value.length > 0;
  const common = {
    id,
    name: id,
    value,
    maxLength,
    "aria-label": label,
    onChange: (e: any) => onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    className:
      "block w-full bg-transparent border-0 border-b border-hairline focus:border-b-2 focus:border-oxblood outline-none text-ink py-3 text-[17px] font-sans transition-all",
  };
  return (
    <div className="relative pt-6">
      <label
        htmlFor={id}
        className={`absolute left-0 mono pointer-events-none transition-all ${
          float ? "top-0 text-[10px] text-oxblood" : "top-7 text-[12px] text-hairline"
        }`}
      >
        {label}
      </label>
      {multiline ? <textarea rows={4} {...common} /> : <input type={type} {...common} />}
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [botcheck, setBotcheck] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [last, setLast] = useState(0);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - last < 5000) {
      toast({ title: "Please wait", description: "Try again in a moment.", variant: "destructive" });
      return;
    }
    if (botcheck) return;
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Check your details",
        description: parsed.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }
    setSending(true);
    setLast(now);
    try {
      const fd = new FormData();
      fd.append("access_key", "1b6b76cb-2e33-43e6-9c08-77f081fdf043");
      fd.append("subject", "New enquiry from adnan.co.nz");
      fd.append("name", parsed.data.name);
      fd.append("email", parsed.data.email);
      if (parsed.data.company) fd.append("company", parsed.data.company);
      fd.append("message", parsed.data.message);
      fd.append("from_name", "adnan.co.nz");
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) setDone(true);
      else throw new Error("send failed");
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please email adnan.khan@me.com directly.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-40 px-5 lg:px-8 bg-paper">
      <div className="container mx-auto">
        <p className="eyebrow mb-6">Let's talk</p>
        <h2
          className="font-display-1 text-ink mb-16 lg:mb-24"
          style={{ fontSize: "clamp(56px, 11vw, 180px)" }}
        >
          Get in touch.
        </h2>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-5 space-y-10">
            <p className="font-lede text-ink/85 max-w-[28ch]" style={{ fontSize: "clamp(22px, 2.4vw, 34px)" }}>
              Reply within 24 hours, usually faster. Auckland based, working globally.
            </p>
            <div className="space-y-3 text-[15px]">
              {[
                ["EMAIL", "adnan.khan@me.com", "mailto:adnan.khan@me.com"],
                ["PHONE", "+64 27 513 0110", "tel:+64275130110"],
                ["LINKEDIN", "linkedin.com/in/adnan2", "https://linkedin.com/in/adnan2"],
              ].map(([k, v, h]) => (
                <div key={k} className="grid grid-cols-[90px_1fr] gap-4 items-baseline">
                  <span className="mono">{k}</span>
                  <a href={h} className="link-underline text-ink font-medium">{v}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            {done ? (
              <div className="py-12">
                <p
                  className="font-display-2 text-ink"
                  style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
                >
                  Thanks. I'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-2">
                <FloatField id="name" label="NAME" value={form.name} onChange={(v) => setForm({ ...form, name: v })} maxLength={100} />
                <FloatField id="email" label="EMAIL" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} maxLength={255} />
                <FloatField id="company" label="COMPANY (OPTIONAL)" value={form.company} onChange={(v) => setForm({ ...form, company: v })} maxLength={120} />
                <FloatField id="message" label="MESSAGE" multiline value={form.message} onChange={(v) => setForm({ ...form, message: v })} maxLength={2000} />
                <input
                  type="text" name="botcheck" value={botcheck}
                  onChange={(e) => setBotcheck(e.target.value)}
                  tabIndex={-1} autoComplete="off" aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px" }}
                />
                <div className="pt-8">
                  <MagneticButton type="submit" variant="primary" fullWidth disabled={sending}>
                    <span className="font-serif font-bold text-[18px] tracking-normal normal-case">
                      {sending ? "Sending…" : "Send →"}
                    </span>
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
