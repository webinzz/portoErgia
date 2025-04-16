import Experience from "../../components/Ui/Experience";

function ExperienceSection() {
    const experiences = [
        { title: "SMK BAKTINUSANTARA 6", description: "Software Engineer", year: "2023 - 2025" },
        { title: "Vice President of Coding Organization", description: "Grid Coding Community", year: "2024 - 2025" },
      ];
      
      const internships = [
        { title: "Internship at PT. Qtasnim", description: "Junior Web Developer", year: "2025" },
        { title: "Dicoding Bootcamp", description: "Build Web Applications", year: "2024" },
        { title: "Telkom Digiup Bootcamp", description: "Content Digital", year: "2024" },
      ];
  return (
    <div className="flex md:flex-row flex-col justify-between w-full py-10   lg:px-24 md:px-3 gap-10 min-h-screen mb-52" style={{ "scrollSnapAlign": "end" }}>
          <div
            className="md:w-1/3 text-slate-700 dark:text-slate-100  flex-col flex p-2 "
          >
            <h1 className=" text-4xl font-bold ">Educations🎓</h1>
            <h1 className="text-sky-300 mb-2 text-4xl font-bold">
              and Experience🏆
            </h1>
            <p>
              There are some tech stack and tools that ive learned and
              experienced
            </p>
          </div>

          <div className="md:w-2/3 bg-white dark:bg-slate-900 border-2 border-sky-400 shadow-xl rounded flex md:flex-row flex-col p-5 md:p-8 gap-8">
            {/* school */}
            <div className="md:w-1/2 flex flex-col gap-6">
              <h1
                data-aos="fade-up"
                className="font-bold text-slate-100 px-5 -mb-2 p-2 bg-sky-300 rounded text-xl w-40 text-center"
              >
                School
              </h1>
              {experiences.map((experience)=>(
                <Experience
                title={experience.title}
                description={experience.description}
                year={experience.year}
              />
              ))}
              
              
            </div>

            {/* bootcamp */}
            <div className="md:w-1/2 flex flex-col gap-6">
              <h1
                data-aos="fade-up"
                className="font-bold text-white px-5 -mb-2 p-2 bg-sky-300 rounded text-xl w-40 text-center"
              >
                Experience
              </h1>
              {internships.map((internship)=>(
                <Experience
                title={internship.title}
                description={internship.description}
                year={internship.year}
              />
              ))}
              
             
            </div>
          </div>
        </div>
  )
}

export default ExperienceSection
