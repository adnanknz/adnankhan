import { Link } from "react-router-dom";
import { SITE } from "@/data/site";

const SiteFooter = () => {
  const nav = [
    ["Home", "/"],
    ["About", "/about"],
    ["Work", "/work"],
    ["Services", "/services"],
    ["Case Studies", "/casestudies"],
    ["Thinking", "/thinking"],
    ["Notes", "/notes"],
    ["Contact", "/contact"],
    ["CV", "/cv"],
    ["Now", "/now"],
    ["Uses", "/uses"],
  ] as const;

  const social: [string, string][] = [
    ["LinkedIn", SITE.linkedin],
    ["About.me", SITE.aboutMe],
    ["Stitch", SITE.stitch],
    ["Stitch Predict", SITE.stitchPredict],
  ];

  return (
    <footer className="border-t border-hairline bg-bone text-ink">
      <div className="container mx-auto pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-semibold tracking-tight text-ink text-lg mb-3">Adnan Khan</p>
          <p className="mono text-subtle text-[13px] mb-1">
            Co-Founder, Stitch & Stitch Predict
          </p>
          <p className="mono text-subtle text-[13px] mb-6">Auckland, New Zealand</p>
          <p className="mono text-subtle text-[12px]">© {new Date().getFullYear()} Adnan Khan</p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="grid grid-cols-2 gap-y-2 mono text-ink text-[13px]">
            {nav.map(([l, h]) => (
              <li key={l}>
                <Link to={h} className="link-underline">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Elsewhere</p>
          <ul className="space-y-2 mono text-ink text-[13px]">
            {social.map(([l, h]) => (
              <li key={l}>
                <a className="link-underline" href={h} target="_blank" rel="noopener noreferrer">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mx-auto pb-10 pt-6 border-t border-hairline flex flex-wrap justify-between mono text-subtle gap-3 text-[13px]">
        <a href={`mailto:${SITE.email}`} className="link-underline">{SITE.email}</a>
        <a href={`tel:${SITE.phoneTel}`} className="link-underline">{SITE.phone}</a>
      </div>

    </footer>
  );
};

export default SiteFooter;
