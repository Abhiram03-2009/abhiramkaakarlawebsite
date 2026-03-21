import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const FooterSection = () => (
  <footer id="contact" className="py-20 border-t border-white/[0.06]">
    <div className="section-container text-center">
      <AnimatedSection>
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-4">Get in Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text-subtle mb-4">Let's connect.</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Open to research collaborations, internship opportunities, and conversations about AI, science, and building things that matter.
        </p>

        <a href="mailto:abhiramkaakarla@gmail.com" className="btn-primary mb-10 inline-flex">
          <Mail size={16} /> Say Hello
        </a>

        <div className="flex items-center justify-center gap-5 mb-12">
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
        </div>
      </AnimatedSection>

      <p className="text-xs text-muted-foreground font-mono">
        Built with curiosity and code. © {new Date().getFullYear()} Abhiram Kaakarla
      </p>
    </div>
  </footer>
);

export default FooterSection;
