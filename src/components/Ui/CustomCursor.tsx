import { motion } from "motion/react";
import { useState, useEffect } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(200); 

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setSize(100); // Membesarkan cursor
      setTimeout(() => setSize(200), 300); // Kembali ke ukuran normal setelah 300ms
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mousedown", handleClick); // Pastikan event listener di window

   
  }, []);

  return (
    <motion.div
      className="fixed rounded-full pointer-events-none  bg-sky-200 dark:bg-slate-500 blur-3xl opacity-50"
      animate={{
        x: position.x - size  ,
        y: position.y - size / 15 ,
        width: size,
        height: size,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    />
  );
}

export default CustomCursor;
