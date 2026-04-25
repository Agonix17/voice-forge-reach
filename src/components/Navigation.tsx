import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav
          className={`glass rounded-2xl flex items-center justify-between px-6 py-3 transition-all ${
            scrolled ? "shadow-card" : ""
          }`}
        >
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground">
              V
            </div>
            <span className="font-bold text-lg tracking-tight">VoxLocalize</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#opportunity" className="hover:text-foreground transition-colors">Giants</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">$75 Pack</a>
            <a href="#why" className="hover:text-foreground transition-colors">Why Us</a>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition-colors shadow-glow whitespace-nowrap"
          >
            Get My Free 60s Demo
          </a>
        </nav>
      </div>
    </header>
  );
}
