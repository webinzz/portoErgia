
interface TypeHero {
  title: string;
  description: string;
  image: string;
  
}
function HeroSectionLay({title, description, image}: TypeHero) {
  return (
    <div id="HeroSection" className="sticky  -top-32 -z-10  text-center  h-[110vh] overflow-hidden -mt-10  flex md:flex-row flex-col-reverse items-center  justify-center bg-white dark:bg-slate-900" style={{ "scrollSnapAlign": "start" }} >
      
    <div className="md:w-1/2 hidden md:block ps-24 text-center md:text-start text-slate-600 dark:text-slate-100  px-4" >
       <h3 className="text-4xl sm:text-6xl text-slate-600 dark:text-slate-100 font-bold">
          {title == "Project" || title == 'Educations ' ? <span className="text-sky-300">Our</span> : ""}
          {title}
          {title != "Project" && title != 'Educations ' ? <span className="text-sky-300">Me</span> : ""}
        </h3>

        <p className="mb-5 mt-2 text-lg text-slate-600 dark:text-slate-100">
          {description}
        </p>

    </div>

    <div className="md:w-1/2 w-full  h-full flex flex-col justify-center bg items-center relative bg-slate-200 overflow-hidden ">
      <img src={image} alt="jsjsjsj" className="absolute object-cover h-full w-full md:brightness-100 brightness-50" />
      <div className="w-4/5 md:hidden  z-10 py-10">
        <h3 className="text-4xl sm:text-6xl text-white md:text-slate-600 dark:text-slate-100  py-2 font-bold">
            {title == "Project" || title == 'Educations ' ? <span className="text-sky-300">Our</span> : ""}
            {title}
            {title != "Project" && title != 'Educations ' ? <span className="text-sky-300">Me</span> : ""}
          </h3>

          <p className="mb-5 mt-2 md:text-lg text-xl text-white md:text-slate-600 dark:text-slate-100  p-3">
            {description}
          </p>
      </div>
      
    </div>

  </div>
  )
}

export default HeroSectionLay