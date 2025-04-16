interface PropsType {
  navFull: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  NavToggle: any
}
function Hamburger({navFull, NavToggle}: PropsType) {
  return (
    <div onClick={NavToggle} className="cursorclick p-3   z-[100]">

       <button  className="   flex flex-col relative w-10 h-5 z-[99]">
        <div
          className={`w-full transition-all duration-300 bg-slate-500 dark:bg-slate-300 ${
            navFull ? "rotate-0 top-0" : "rotate-45 bottom-0"
            } absolute h-[.10rem]`}
            ></div>
        <div
          className={`w-full transition-opacity duration-300 bg-slate-500 dark:bg-slate-300 ${
            navFull ? "opacity-100 " : "opacity-0"
            } absolute h-[.10rem] top-1/2 -translate-y-1/2`}
            ></div>
        <div
          className={`w-full transition-all duration-300 bg-slate-500 dark:bg-slate-300 ${
            navFull ? "rotate-0" : "-rotate-45 "
            } absolute h-[.10rem] bottom-0`}
            ></div>
      </button>
    </div>
  )
}

export default Hamburger
