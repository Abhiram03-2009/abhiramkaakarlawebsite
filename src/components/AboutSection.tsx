import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Brain, Microscope, Cpu } from "lucide-react";
import abhiramHero from "@/assets/abhiram-hero.jpeg";

const pillars = [
  { icon: Brain, title: "AI & Machine Learning", desc: "Designing neural architectures for real-world problems — from autonomous navigation to cancer gene prediction." },
  { icon: Microscope, title: "Computational Biology", desc: "Applying deep learning to DNA sequence analysis, bioinformatics research, and healthcare-driven science." },
  { icon: Cpu, title: "Robotics & Systems", desc: "Building embedded systems with computer vision and neural networks for autonomous decision-making." },
];

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="section-container">
      <SectionHeading label="01 / About" title="Curiosity-driven, impact-focused." />

      <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
        <AnimatedSection delay={0.1} className="md:w-2/3">
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a high school student with a deep intellectual curiosity for understanding complex systems — from the molecular mechanisms of cancer to the mathematics of neural networks. My work sits at the intersection of AI, biology, and engineering, driven by a belief that interdisciplinary thinking unlocks the most meaningful innovations. I'm passionate about applying artificial intelligence to healthcare and science, turning research into real-world impact.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="md:w-1/3">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            <img
              src={abhiramHero}
              alt="Abhiram Kaakarla"
              className="relative w-full rounded-2xl border border-white/[0.08] object-cover aspect-[3/4] shadow-lg shadow-black/40"
            />
          </div>
        </AnimatedSection>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <AnimatedSection key={p.title} delay={0.15 + i * 0.1}>
            <div className="glass-card-hover p-6 h-full">
              <p.icon size={24} className="text-primary mb-4" />
              <h3 className="text-foreground font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
