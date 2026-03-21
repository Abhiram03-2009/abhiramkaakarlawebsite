import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const categories = [
  { label: "Languages", items: ["Python", "Java", "C++", "JavaScript", "TypeScript"] },
  { label: "Web", items: ["React", "Next.js", "Node.js", "Tailwind CSS", "HTML/CSS"] },
  { label: "AI / ML", items: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "LLMs"] },
  { label: "Tools & More", items: ["Biopython", "Data Analysis", "Git", "Embedded Systems", "REST APIs"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 md:py-32">
    <div className="section-container">
      <SectionHeading label="05 / Skills" title="Technical toolkit." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.label} delay={0.05 + i * 0.08}>
            <div className="glass-card p-6">
              <h3 className="text-xs font-mono tracking-widest uppercase text-primary mb-4">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="tech-tag">{item}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
