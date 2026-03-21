import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Award } from "lucide-react";
import abhiramDeca from "@/assets/abhiram-deca.jpeg";
import abhiramResearch from "@/assets/abhiram-research.jpeg";

const awards = [
  "Amazon Future Engineer Scholarship & Internship",
  "Trinity College of Cambridge — Grade 7, Ranked Distinction",
  "Congressional Award Bronze Medal",
  "USACO Gold Division",
  "DECA ICDC Qualifier",
  "TSA Nationals Qualifier",
  "3rd Place, Biochemistry — Delaware Valley Science Fair (DVSF)",
  "3rd Place, Biochemistry — Bucks County Science Research Competition (BCSRC)",
];

const AwardsSection = () => (
  <section id="awards" className="py-24 md:py-32 relative">
    <div className="glow-dot w-[350px] h-[350px] -left-40 top-1/4 animate-pulse-glow" style={{ background: "hsl(230, 80%, 45%)" }} />

    <div className="section-container relative z-10">
      <SectionHeading label="07 / Awards" title="Recognition & achievements." />

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
          {awards.map((a, i) => (
            <AnimatedSection key={i} delay={0.05 + i * 0.06}>
              <div className="glass-card-hover p-5 flex items-start gap-3 h-full">
                <Award size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{a}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="lg:w-1/3 flex flex-col gap-5">
          <AnimatedSection delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <img
                src={abhiramDeca}
                alt="Abhiram at DECA competition"
                className="relative w-full rounded-2xl border border-white/[0.08] object-cover aspect-[3/4] shadow-lg shadow-black/40"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <img
                src={abhiramResearch}
                alt="Abhiram presenting research at science fair"
                className="relative w-full rounded-2xl border border-white/[0.08] object-cover aspect-[4/5] shadow-lg shadow-black/40"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default AwardsSection;
