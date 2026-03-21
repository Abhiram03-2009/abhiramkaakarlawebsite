import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import TypingText from "./TypingText";

const HeroSection = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glows */}
      <div className="glow-dot w-[500px] h-[500px] -top-40 -left-40 animate-pulse-glow" style={{ background: "hsl(230, 80%, 50%)" }} />
      <div className="glow-dot w-[400px] h-[400px] top-1/3 right-0 animate-pulse-glow" style={{ background: "hsl(270, 50%, 45%)", animationDelay: "2s" }} />
      <div className="glow-dot w-[300px] h-[300px] bottom-20 left-1/4 animate-pulse-glow" style={{ background: "hsl(190, 80%, 45%)", animationDelay: "4s" }} />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground mb-6">
            High School Researcher & Developer
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="gradient-text">Abhiram</span>
          <br />
          <span className="text-foreground">Kaakarla</span>
        </motion.h1>

        <motion.div
          className="mb-6 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <TypingText texts={["AI/ML Researcher", "Robotics Developer", "Computational Biology Enthusiast"]} />
        </motion.div>

        <motion.p
          className="max-w-xl mx-auto text-muted-foreground leading-relaxed text-balance mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          Building intelligent systems at the intersection of AI, biology, and real-world impact.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <button onClick={() => scrollTo("#projects")} className="btn-primary">
            View Projects
          </button>
          <button onClick={() => scrollTo("#contact")} className="btn-outline">
            Contact Me
          </button>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {[
            { icon: Github, href: "https://github.com/Abhiram03-2009", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/abhiram-kaakarla-0a9829306/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:abhiramkaakarla@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/[0.08] text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_hsl(230,80%,65%,0.15)]"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.button
          onClick={() => scrollTo("#about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
