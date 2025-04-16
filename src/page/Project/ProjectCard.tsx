import { motion } from "motion/react"

type ProjectType = {
    title: string
    description: string
    image: string
    bg: string
    technologies: string[]
}

function ProjectCard(props: ProjectType) {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{ duration: 0.5 }}
      className="group col-span-1 flex  md:h-96 h-72 rounded   relative p-5   dark:bg-slate-900  text-slate-500 shadow-lg overflow-hidden bg-[url(/img/mountains.jpg)] bg-cover bg-center  "
      style={{ backgroundImage: `url(${props.bg})`,
       }}
    > 
      

      
      <div className="absolute  left-0 top-0 group-hover:translate-y-full translate-y-0 flex flex-col gap-3 justify-center items-center p-5   w-full h-full bg-slate-100/90  dark:bg-slate-900/70 z-10  transition-all duration-1000">
              <p  className="text-3xl font-extrabold text-slate-700 dark:text-slate-100">{props.title}</p>
              <p  className="text-xl dark:text-slate-100 ">{props.description}</p>
            <img  src={props.image} className="object-contain  z-10   w-1/2 h-1/2 " alt="" />
            <div className="flex gap-2">
              {props.technologies.map((tech, index) => (
              <p key={index} className="w-max p-1 px-4 bg-slate-700 text-white font-semibold">{tech}</p>
              ))}
            </div>

        </div>

    </motion.div>
  )
}

export default ProjectCard
