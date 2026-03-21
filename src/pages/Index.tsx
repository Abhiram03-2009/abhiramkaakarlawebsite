import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import LeadershipSection from "@/components/LeadershipSection";
import SkillsSection from "@/components/SkillsSection";
import ExtracurricularsSection from "@/components/ExtracurricularsSection";
import AwardsSection from "@/components/AwardsSection";
import PhilosophySection from "@/components/PhilosophySection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <LeadershipSection />
    <SkillsSection />
    <ExtracurricularsSection />
    <AwardsSection />
    <PhilosophySection />
    <FooterSection />
  </div>
);

export default Index;
