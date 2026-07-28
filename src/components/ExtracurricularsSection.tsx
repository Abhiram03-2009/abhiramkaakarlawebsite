import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const activities = [
  "PABC research intern — EDS therapy development",
  "Hive Markets Co-Founder & COO — AI product development",
  "Open-source development with startups",
  "CS Honors Society leadership",
  "Selective research programs",
  "Tutoring leadership — Kumon, BC Mentors",
];

const ExtracurricularsSection = () => (
  <section className="py-24 md:py-32">
    <div className="section-container">
      <SectionHeading label="06 / Extracurriculars" title="College-ready activities." subtitle="A curated view of top-tier involvement." />

      <AnimatedSection delay={0.1}>
        <div className="glass-card p-6 md:p-8">
          <ul className="space-y-3">
            {activities.map((a, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ExtracurricularsSection;
