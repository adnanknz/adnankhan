import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const clients = [
  "Turners", "AA Smartfuel", "Comvita", "Trilogy", "Tourism New Zealand",
  "Cardrona", "RealNZ", "Lexus Urban Polo", "Merck Sharp & Dohme", "Coastguard NZ",
  "Mr Apple", "Juliette Hogan", "Kate Sylvester", "Placemakers", "Skills Group",
  "Spirit of Adventure", "Harrison Grierson",
];

const ClientWall = () => {
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cells = grid.current?.querySelectorAll(".cell");
      if (!cells) return;
      gsap.from(cells, {
        opacity: 0,
        y: 8,
        duration: 0.6,
        stagger: 0.04,
        ease: "power2.out",
        scrollTrigger: { trigger: grid.current, start: "top 75%" },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="py-24 lg:py-32 px-5 lg:px-8">
      <div className="container mx-auto">
        <p className="eyebrow mb-8">Trusted by</p>
        <div ref={grid} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 hairline-t hairline-l">
          {clients.map((c) => (
            <div
              key={c}
              className="cell hairline-r hairline-b px-6 py-10 flex items-center justify-center text-center"
            >
              <span className="font-sans font-semibold text-ink text-[15px] tracking-tight">{c}</span>
            </div>
          ))}
        </div>
        <p className="mono mt-8">
          Heritage clients via krunch.co: Cisco · Canon · Hyundai · Toyota · Honda · BNZ.
        </p>
      </div>
    </section>
  );
};

export default ClientWall;
