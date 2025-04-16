// import Button from "../../components/Ui/Button";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";

function Dashboard() {
  return (
    <>
      <HeroSection />
      <div className="bg-[#f7f7f7] dark:bg-slate-900 dark:border-t-2 dark:border-slate-800" >
        <AboutSection/>
        <ProjectSection />
        <ExperienceSection />
        <ContactSection />
        {/* <Button/> */}
      </div>
    </>
  );
}

export default Dashboard;
