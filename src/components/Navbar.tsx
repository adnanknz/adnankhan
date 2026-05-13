import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Thinking", href: "#thinking" },
  { label: "About", href: "#about" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-paper/85 backdrop-blur-md hairline-b py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-5 lg:px-8">
          <Link to="/" className="group inline-flex items-baseline" aria-label="Adnan Khan — home">
            <span
              className="font-serif font-black text-oxblood text-2xl leading-none relative"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1' }}
            >
              AK
              <span className="absolute left-0 right-0 -bottom-1 h-px bg-sienna" />
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] tracking-[0.06em] uppercase font-medium text-ink link-underline"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="lg:hidden text-ink"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-oxblood text-paper flex flex-col">
          <div className="flex items-center justify-between px-5 lg:px-8 py-4">
            <span
              className="font-serif font-black text-paper text-2xl"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1' }}
            >
              AK
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-paper">
              <X size={28} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center gap-6 px-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-5xl font-bold"
                style={{ fontVariationSettings: '"opsz" 96' }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <p className="mono text-paper/60 px-8 pb-8">AUCKLAND -36.85°, 174.76°</p>
        </div>
      )}
    </>
  );
};

export default Navbar;
