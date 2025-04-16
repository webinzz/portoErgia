import * as motion from "motion/react-client";
import { useDispatch, useSelector } from "react-redux";
import { themeAction } from "../../../redux/Action/ThemeAction";
import { useEffect } from "react";

function ToggleTheme({ NavToggle }: {NavToggle: () => boolean}) {
  const isDark = useSelector((state: {isDark: boolean}) => state.isDark);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  function HandleToggle() {
    NavToggle();
    dispatch(themeAction());
  }

  return (
    <button
      className={`w-24 h-8 flex items-center p-2 rounded-full transition-all duration-300 ${
        isDark ? "bg-gray-300" : "bg-gray-300"
      }`}
      onClick={HandleToggle}
    >
      <motion.div
        className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center"
        layout
        transition={{
          type: "spring",
          duration: 0.2,
          bounce: 0.2,
        }}
        style={{
          marginLeft: isDark ? "calc(100% - 2.5rem)" : "0",
        }}
      >
        {isDark ? (
          <span className="material-symbols-outlined text-yellow-500">sunny</span>
        ) : (
          <span className="material-symbols-outlined text-gray-900">dark_mode</span>
        )}
      </motion.div>
    </button>
  );
}

export default ToggleTheme;
