import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const values = [
  { title: "Growth Mindset", desc: "Every challenge is a chance to learn. Failure is data, not defeat." },
  { title: "Curiosity Over Perfection", desc: "I'd rather ask a great question than have a polished answer." },
  { title: "Interdisciplinary Thinking", desc: "The best breakthroughs happen at the borders of fields." },
  { title: "Technology for Impact", desc: "Building things that matter — tools that improve lives and advance science." },
];

const PhilosophySection = () => (
  <section className="py-24 md:py-32">
    <div className="section-container">
      <SectionHeading label="08 / Philosophy" title="What drives me." />

      <div className="grid sm:grid-cols-2 gap-6">
        {values.map((v, i) => (
          <AnimatedSection key={v.title} delay={0.05 + i * 0.08}>
            <div className="glass-card p-6">
              <h3 className="text-foreground font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PhilosophySection;
