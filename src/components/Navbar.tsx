import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/casestudies" },
  { label: "Thinking", to: "/thinking" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 backdrop-blur-md ${
          scrolled ? "bg-bone/80 border-b border-hairline" : "bg-paper/60 border-b border-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link to="/" className="text-[17px] font-semibold tracking-tight text-ink" aria-label="Adnan Khan: home">
            Adnan Khan
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-[14px] font-medium transition-colors hover:text-ink hover:bg-surface ${
                    isActive ? "text-ink" : "text-subtle"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-3 inline-flex items-center rounded-lg bg-ink text-bone text-[14px] font-medium px-4 py-2 hover:bg-oxblood transition-colors"
            >
              Work with me
            </Link>
          </nav>

          <button
            className="lg:hidden text-ink min-h-11 min-w-11 inline-flex items-center justify-center -mr-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-bone text-ink flex flex-col" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="container mx-auto flex h-16 items-center justify-between border-b border-hairline">
            <span className="text-[17px] font-semibold tracking-tight">Adnan Khan</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="min-h-11 min-w-11 inline-flex items-center justify-center -mr-2">
              <X size={22} />
            </button>
          </div>
          <nav className="container mx-auto flex-1 flex flex-col gap-2 pt-10" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-[36px] font-semibold tracking-[-0.03em] py-1 hover:text-oxblood transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="container mx-auto mono pb-8">AUCKLAND -36.85°, 174.76°</p>
        </div>
      )}
    </>
  );
};

export default Navbar;
