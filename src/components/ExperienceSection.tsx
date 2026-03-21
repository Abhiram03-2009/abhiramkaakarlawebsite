import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    org: "Pennsylvania Biotechnology Center",
    role: "Wet Lab & Computational Research Intern",
    detail: "2-year research program developing a CNP-based therapy to strengthen dysregulated signaling in Hypermobile Ehlers-Danlos Syndrome. Hybrid wet lab/computational project with publication.",
    tags: ["Wet Lab", "Computational Biology", "Ehlers-Danlos Syndrome", "Therapy Development"],
  },
  {
    org: "Dyne Research",
    role: "Computational Biology Researcher",
    detail: "Used convolutional neural networks to analyze DNA sequences and predict cancer gene mutations.",
    tags: ["CNNs", "DNA Analysis", "Cancer Research"],
  },
  {
    org: "FlairDev",
    role: "AI/ML Engineering Intern",
    detail: "NLP and LLM work — GPT-4 API integration, chatbot development. Full-stack with Node.js, Next.js, Tailwind CSS. Additional C2C internship.",
    tags: ["NLP", "GPT-4", "Next.js", "Node.js"],
  },
  {
    org: "Building-U / Headstarter",
    role: "Software Developer & AI Engineering Resident",
    detail: "Frontend and backend development with open-source contributions. AI engineering fellowship.",
    tags: ["React", "Open Source", "AI Engineering"],
  },
  {
    org: "New York Academy of Sciences",
    role: "Computational Sustainability Researcher",
    detail: "Applied machine learning to environmental challenges including solar energy optimization.",
    tags: ["ML", "Sustainability", "Solar Optimization"],
  },
];

const programs = "Selective programs: Dyne Research AI/ML • NYAS • EDIT AI at Dartmouth Cancer Center (Ph.D. mentorship) • Publications in NHSJS & ACL";

const ExperienceSection = () => (
  <section id="experience" className="py-24 md:py-32">
    <div className="section-container">
      <SectionHeading label="02 / Experience" title="Research & industry." subtitle="From university labs to startup engineering teams." />

      <div className="space-y-5">
        {experiences.map((exp, i) => (
          <AnimatedSection key={exp.org} delay={0.05 + i * 0.07}>
            <div className="glass-card-hover p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-foreground">{exp.org}</h3>
                  <p className="text-sm text-primary font-medium">{exp.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.detail}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.6}>
        <p className="mt-8 text-xs text-muted-foreground font-mono text-center tracking-wide">{programs}</p>
      </AnimatedSection>
    </div>
  </section>
);

export default ExperienceSection;
