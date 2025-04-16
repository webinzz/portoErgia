import { useState } from "react";
import HeroSection from "./HeroSection";
import ProjectList from "./ProjectList";
import SertificatList from "./Certificate";
// import ProjectList from '../components/Project/ProjectList'

function Project() {
   const [isProjectList, setIsProjectList] = useState(true);

  return (
    <>
      <HeroSection />
      <div className="bg-white dark:bg-slate-900 dark:border-t-2 dark:border-slate-800" >
        <div className="w-full  flex text-slate-700 dark:text-slate-200 pt-5">
          <button onClick={()=> setIsProjectList(true)} className={`w-1/2 text-center text-xl p-5 hover:bg-slate-100 dark:hover:bg-slate-700  transition-colors duration-200 ${isProjectList ? "border-sky-300 border-b-2" : ""} `}>Project</button>
          <button onClick={()=> setIsProjectList(false)} className={`w-1/2 text-center text-xl p-5 hover:bg-slate-100 dark:hover:bg-slate-700  transition-colors duration-200 ${!isProjectList ? "border-sky-300 border-b-2" : ""} `}>Certifacate</button>
        </div>
        {isProjectList ? (
          <ProjectList />
        ) : (
          <SertificatList />
        )}
      </div>
    </>
  );
}

export default Project;
