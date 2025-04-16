import ExperienceSection from "./ExperienceSection";
import SkillSection from "./SkillSection";
import AboutMeSection from "./AboutMeSection";
import HeroSection from "./HeroSection";

function About() {
  return (
    <>
      <HeroSection/>
      <div className="bg-white dark:bg-slate-900 dark:border-t-2 px-3 dark:border-slate-800">
        <AboutMeSection />
        <ExperienceSection />
        <SkillSection />
      </div>
    </>
  );
}

export default About;
