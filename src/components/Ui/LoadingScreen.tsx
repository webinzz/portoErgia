import { useEffect, useState } from "react";

type Props = {
    onFinished: () => void;
}
function LoadingScreen({ onFinished }: Props) {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Naikkan angka dari 0 ke 100
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => onFinished(), 1000);
          }, 500);
          return 100;
        }
        return prev + 2; // Naik 2% tiap 30ms
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 flex z-[999] transition-all duration-1000 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Bagian kiri */}
      <div
        className={`bg-slate-200 w-1/2 h-full transition-transform duration-1000 ${
          isExiting ? "-translate-x-full" : "translate-x-0"
        }`}
      ></div>

      {/* Bagian kanan */}
      <div
        className={`bg-slate-200 w-1/2 h-full transition-transform duration-1000 ${
          isExiting ? "translate-x-full" : "translate-x-0"
        }`}
      ></div>

      {/* Teks Loading di tengah */}
      {!isExiting && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
          
          <div className="relative flex items-center justify-center">
          {/* Animasi Ping */}
          <span className="absolute inline-flex h-96 w-96    animate-ping rounded-full bg-slate-300 opacity-75"></span>

          {/* Bulatan utama */}
            <p className="text-5xl font-bold text-slate-600">{progress}%</p>
        </div>
        </div>
      )}
    </div>
  );
}

export default LoadingScreen;
