import { motion } from "motion/react";
import { Link } from "react-router-dom";

type typeSection = {
  title: string;
  description: string;
  link: string;
  linkname: string;
  bg?: string;
};
function HomeSection({
  title,
  description,
  link,
  linkname,
  bg,
}: typeSection) {
  return (
    <section
      style={{ scrollSnapAlign: "end" }}
      id={title}
      className="z-10 mx-auto min-h-screen  w-full flex md:flex-row flex-col  justify-between items-center  md:px-10 lg:px-20 py-32 md:py-0"
    >
      {/* <motion.div
         initial={{ x: -50, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         viewport={{ amount: .9  }}
         transition={{ duration: .5 }}
         
        className=" lg:w-1/2 lg:p-6 px-4   md:text-start text-center transition-all duration-500">
        
        <h3 className="text-4xl sm:text-6xl text-slate-600 dark:text-slate-100 font-bold">
          {title == "Project" || title == 'Educations ' ? <span className="text-sky-300">Our</span> : ""}
          {title}
          {title != "Project" && title != 'Educations ' ? <span className="text-sky-300">Me</span> : ""}
        </h3>

        <p className="mb-5 mt-2 text-lg text-slate-600 dark:text-slate-100">
          {description}
        </p>

        <Link to={link} className="hidden sm:block  w-max px-5 p-2 bg-slate-600 text-white rounded-lg">
          {linkname}
        </Link>

      </motion.div> */}
      <div className=" lg:w-1/2 lg:p-6 px-4   md:text-start text-center transition-all duration-500">
        <motion.h3
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl text-slate-600 dark:text-slate-100 font-bold"
        >
          {title == "Project" || title == "Educations " ? (
            <span className="text-sky-300">Our</span>
          ) : (
            ""
          )}
          {title}
          {title != "Project" && title != "Educations " ? (
            <span className="text-sky-300">Me</span>
          ) : (
            ""
          )}
        </motion.h3>

        <motion.p
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-5 mt-2 text-lg text-slate-600 dark:text-slate-100"
        >
          {description}
        </motion.p>
        <motion.button
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="hidden sm:block  w-max px-5 p-2 bg-slate-600 text-white rounded-lg"
        >
          <Link to={link}>{linkname}</Link>
        </motion.button>
      </div>

      <div className=" sm:w-1/2 w-4/5 md:h-[34rem] h-[20rem] mx-auto md:mx-0  relative  group overflow-hidden rounded-md cursor-pointer flex justify-center items-center sm:justify-end  bg-cover "
        style={{ backgroundImage: `url(${bg})` }}
      >.
      </div>

      <Link
        to={link}
        className="sm:hidden w-3/4 h-max my-10 text-center  px-5 p-2 bg-slate-600 text-white mx-auto"
      >
        {linkname}
      </Link>
    </section>
  );
}

export default HomeSection;
