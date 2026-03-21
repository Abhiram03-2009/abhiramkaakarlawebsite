import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ label, title, subtitle }: SectionHeadingProps) => (
  <AnimatedSection className="mb-12 md:mb-16">
    <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-3">{label}</p>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance gradient-text-subtle leading-tight">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl text-balance leading-relaxed">{subtitle}</p>}
  </AnimatedSection>
);

export default SectionHeading;
