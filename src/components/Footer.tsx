import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-muted/50">
    <div className="container mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-lg font-semibold mb-4">Consultant</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Helping organizations harness AI for legal operations and marketing technology.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Navigation</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "About", href: "/about" },
              { label: "Legal AI Services", href: "/legal-ai" },
              { label: "MarTech Services", href: "/martech" },
              { label: "Work", href: "/work" },
              { label: "Insights", href: "/insights" },
              { label: "Speaking", href: "/speaking" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Connect</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Twitter / X</a>
            <Link to="/contact" className="hover:text-accent transition-colors">Get in touch</Link>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Consultant. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
