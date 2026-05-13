import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SiteFooter = () => {
  const wordmark = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (!wordmark.current) return;
      gsap.from(wordmark.current, {
        yPercent: 60,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: wordmark.current, start: "top 90%", once: true },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <footer className="hairline-t bg-paper relative overflow-hidden">
      <div className="container mx-auto px-5 lg:px-8 pt-16 pb-8 grid grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <p className="eyebrow mb-4">Sitemap</p>
          <ul className="space-y-2 mono text-ink/80">
            {["Work", "Thinking", "About", "Speaking", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="link-underline">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Social</p>
          <ul className="space-y-2 mono text-ink/80">
            <li><a className="link-underline" href="https://linkedin.com/in/adnan2" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="link-underline" href="https://x.com" target="_blank" rel="noopener noreferrer">X</a></li>
            <li><a className="link-underline" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Colophon</p>
          <p className="mono text-ink/80 leading-relaxed max-w-[28ch]">
            Built in Auckland. Type set in Fraunces and Inter. © {new Date().getFullYear()} Adnan Khan.
          </p>
        </div>
      </div>
      <div ref={wordmark} className="px-5 lg:px-8 -mb-[6vw]">
        <p
          className="font-display-1 text-oxblood leading-[0.85] whitespace-nowrap"
          style={{ fontSize: "clamp(96px, 22vw, 320px)" }}
        >
          ADNAN KHAN
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
