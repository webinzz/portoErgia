import Skill from "../../components/Ui/Skill";

function SkillSection() {
  const skills = [
    { name: "HTML", img: "/image/Skill/html.png", status: "Expert" },
    { name: "CSS", img: "/image/Skill/css.png", status: "Intermediate" },
    {
      name: "JavaScript",
      img: "/image/Skill/js.png",
      status: "Expert",
    },
    { name: "PHP", img: "/image/Skill/php.png", status: "Intermediate" },
    {
      name: "Bootstrap",
      img: "/image/Skill/bootstrap.png",
      status: "Intermediate",
    },
    { name: "Tailwind", img: "/image/Skill/tailwind.png", status: "Expert" },
    { name: "React", img: "/image/Skill/react.png", status: "Intermediate" },
    { name: "Laravel", img: "/image/Skill/laravel.png", status: "Intermediate" },
    { name: "Dart", img: "/image/Skill/dart.png", status: "Beginner" },
    {
      name: "Flutter",
      img: "/image/Skill/flutter.png",
      status: "Intermediate",
    },
    { name: "Git", img: "/image/Skill/git.png", status: "Expert" },
    { name: "GitHub", img: "/image/Skill/github.png", status: "Expert" },
  ];

  return (
    <div style={{ "scrollSnapAlign": "end" }} className="flex md:flex-row flex-col-reverse justify-between  w-full mt-10 py-10 lg:px-24 md:px-5 gap-10 min-h-screen">
      <div className="md:w-2/3 h-max  bg-white dark:bg-slate-900 border-2 border-sky-400 rounded shadow-xl grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 p-5 md:p-8 py-12 items-start">
        {skills.map((skill) => (
          <Skill img={skill.img} title={skill.name} status={skill.status} />
        ))}
      </div>

      <div className="md:w-1/3 text-slate-700 dark:text-slate-100 md:text-end text-start flex-col flex items-end">
        <h1 className=" text-4xl font-bold">Tech Stack⚙️</h1>
        <h1 className="text-sky-300 mb-2 text-4xl font-bold">And Tools🛠️</h1>
        <p className="text-end">
          There are some tech stack and tools that ive learned and experienced
        </p>
      </div>
    </div>
  );
}

export default SkillSection;
