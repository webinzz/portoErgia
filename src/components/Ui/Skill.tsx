type SkillType = {
    title: string;
    status: string;
    img: string
}
function Skill(props: SkillType) {
    return (
    <div className="col-span-1 mb-8 flex-col flex items-center ">
      <div  className="h-20 w-20 bg-[#f7f7f7] dark:bg-slate-900 rounded-full border border-sky-300 flex justify-center items-center">
        <img src={`${props.img}`} className=" w-2/3 h-2/3" alt="" />
      </div>
  
      <h1 className="font-bold dark:text-white">{props.title}</h1>
      <h1 className="dark:text-white">{props.status}</h1>
      
  </div>
    )
  }
  
  export default Skill
  