import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Users, Bot, BookOpen, Heart } from "lucide-react";

const roles = [
  { icon: Users, title: "Co-Founder & COO, Hive Markets", desc: "Leading operations, growth strategy, and AI product development." },
  { icon: Bot, title: "Co-President, CS Honors Society", desc: "Organizing outreach to teach coding and CS concepts to middle and high school students." },
  { icon: Heart, title: "Co-President, BC Mentors", desc: "Local tutoring nonprofit supporting community students in STEM and academics." },
  { icon: BookOpen, title: "Academic & Writing Tutor", desc: "Kumon tutor and writing center tutor supporting multilingual and Hispanic students." },
  { icon: Heart, title: "Community Volunteer", desc: "Extensive volunteering with younger students and senior citizens in the community (200 hours)." },
];

const LeadershipSection = () => (
  <section id="leadership" className="py-24 md:py-32">
    <div className="section-container">
      <SectionHeading label="04 / Leadership" title="Leading & giving back." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {roles.map((r, i) => (
          <AnimatedSection key={r.title} delay={0.05 + i * 0.07}>
            <div className="glass-card-hover p-6 h-full">
              <r.icon size={20} className="text-primary mb-3" />
              <h3 className="text-foreground font-semibold text-sm mb-1">{r.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default LeadershipSection;
