import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 border-b border-white/[0.06]"
          : "py-5"
      }`}
      style={{
        background: scrolled ? "hsla(225, 25%, 6%, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="section-container flex items-center justify-between">
        <button onClick={() => handleClick("#hero")} className="text-lg font-bold tracking-tight gradient-text">
          AK
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l.href} onClick={() => handleClick(l.href)} className="nav-link">
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-white/[0.06]"
            style={{ background: "hsla(225, 25%, 6%, 0.95)", backdropFilter: "blur(20px)" }}
          >
            <div className="section-container py-4 flex flex-col gap-3">
              {links.map((l) => (
                <button key={l.href} onClick={() => handleClick(l.href)} className="nav-link text-left py-2">
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
