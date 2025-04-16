import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";

const navFull = ({navFull, NavToggle}: {navFull: boolean, NavToggle: () => boolean}) => {
  return (
    <>
      <div
        className={`absolute transition-transform duration-1000 ease-in-out ${
          navFull ? "translate-y-[-100%] scale-0" : "translate-y-0 scale-[400]"
        } w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 bg-opacity-80 right-0 top-0 justify-center items-center z-40`}
      ></div>

      <div
        className={`absolute w-screen h-screen right-0 top-0 justify-center flex items-center z-50 transition-opacity duration-500 ${
          navFull
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}>
        <ul className="flex flex-col gap-4 justify-center items-center text-slate-600 dark:text-slate-100">
          <h1 className="text-5xl font-bold mb-4">Menu</h1>
            <Link onClick={NavToggle} to="/" className="text-xl font-medium">Home</Link>
            <Link onClick={NavToggle} to="/about" className="text-xl font-medium">About</Link>
            <Link onClick={NavToggle} to="/projects" className="text-xl font-medium">Project</Link>
            <Link onClick={NavToggle} to="/contact" className="text-xl font-medium">Contact</Link>
            <ToggleTheme NavToggle={NavToggle} />

        </ul>
      </div>
    </>
  );
};

export default navFull;
