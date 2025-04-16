
function AboutMeSection() {
  return (
      <section className="flex md:flex-row flex-col justify-between min-h-[130vh] w-full py-10 mb-10 lg:px-24 md:px-5 px-2 gap-16 items-center" style={{ "scrollSnapAlign": "end" }}>
        <div
          className="w-2/5 md:block hidden  h-[500px] border-4 rounded-2xl border-dashed border-sky-300"
          style={{ backgroundImage: `url("./image/HeroSections/me1.jpg")`, backgroundSize: "cover" }}
        >
          .
        </div>

        <div className="md:w-1/2  md:text-start ">
          <h3 className="text-4xl font-semibold text-slate-600 dark:text-slate-100">
            Hello👋 i am <span className="text-sky-300">Ergia Buccharelli</span>
          </h3>
          <h3 className="mb-2 md:text-3xl text-2xl font-medium text-slate-600 dark:text-slate-100">
            A Web Developer 🧑‍💻 in Indonesia🌏
          </h3>
          <p className="border-y-4 text-lg border-slate-300 dark:text-white py-9  mb-2">
            Hello everyone! I am Ergia buccharelli, a fullstack website
            developer. I am a intermediate experienced and I hope with this I
            can always learning something new to be able to invent digital
            applications that can help many people in the future. Could work
            independently or in a team.
          </p>

          <div className="w-full flex  md:flex-row flex-col flex-wrap justify-start">
            <div
              className="border-sky-300 border p-6 md:w-1/3 mt-2 rounded shadow-sm text-center"
            >
              <h3 className="text-4xl my-3 text-sky-300 font-semibold">2+</h3>
              <p className="text-slate-500 dark:text-slate-100">
                Years Of Experience
              </p>
            </div>
            <div
              className="border-sky-300 border md:w-1/3 p-6 mt-2 rounded shadow-sm text-center"
            >
              <h3 className="text-4xl my-3 text-sky-300 font-semibold">10+</h3>
              <p className="text-slate-500 dark:text-slate-100">
                Framework & Tech Stack Used
              </p>
            </div>
            <div
              className="border-sky-300 border md:w-1/3 p-6 mt-2 rounded shadow-sm text-center"
            >
              <h3 className="text-4xl my-3 text-sky-300 font-semibold">10+</h3>
              <p className="text-slate-500 dark:text-slate-100">
                Successed Projects
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutMeSection
