import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Thinking", to: "/thinking" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

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

          <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-[13px] tracking-[0.06em] uppercase font-medium link-underline ${
                    isActive ? "text-oxblood" : "text-ink"
                  }`
                }
              >
                {l.label}
              </NavLink>
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
          <nav className="flex-1 flex flex-col justify-center gap-6 px-8" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-serif text-5xl font-bold"
                style={{ fontVariationSettings: '"opsz" 96' }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="mono text-paper/60 px-8 pb-8">AUCKLAND -36.85°, 174.76°</p>
        </div>
      )}
    </>
  );
};

export default Navbar;
