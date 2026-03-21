import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Autonomous Neural Network Robot",
    desc: "Embedded neural network on ESP32 for real-time computer vision and autonomous navigation. Built from scratch with custom hardware and firmware.",
    tags: ["ESP32", "Computer Vision", "C++", "Neural Networks"],
    highlight: true,
  },
  {
    title: "AI Chatbot Systems",
    desc: "Designed and deployed conversational AI systems integrating GPT-4 APIs, NLP pipelines, and custom training datasets.",
    tags: ["Python", "GPT-4", "NLP", "APIs"],
    highlight: true,
  },
  {
    title: "Algorithmic Playground",
    desc: "Technical blog exploring algorithms, data structures, and computational thinking through interactive explanations.",
    tags: ["Writing", "Algorithms", "Education"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 md:py-32 relative">
    <div className="glow-dot w-[400px] h-[400px] -right-48 top-1/3 animate-pulse-glow" style={{ background: "hsl(270, 50%, 40%)" }} />

    <div className="section-container relative z-10">
      <SectionHeading label="03 / Projects" title="Things I've built." subtitle="From embedded systems to consumer apps." />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={0.05 + i * 0.08} className={p.highlight ? "md:col-span-1" : ""}>
            <div className={`glass-card-hover p-6 md:p-8 h-full flex flex-col ${p.highlight ? "border-primary/20" : ""}`}>
              {p.highlight && (
                <span className="inline-block mb-3 text-[10px] font-mono tracking-widest uppercase text-primary">Featured</span>
              )}
              <h3 className="text-foreground font-semibold text-lg mb-2 flex items-center gap-2">
                {p.title}
                <ExternalLink size={14} className="text-muted-foreground" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
