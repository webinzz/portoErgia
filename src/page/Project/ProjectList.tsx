import ProjectCard from "./ProjectCard";
import {projects} from "./Data";

function ProjectList() {
   
  return (
    <div className="grid w-screen md:grid-cols-2 gap-5 space-y-6  md:p-16 p-4 pt-10 md:py-10  " >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project}/>
        ))}
    </div>
  )
}

export default ProjectList
