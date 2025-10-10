"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const storedTheme = localStorage.getItem("theme");
    return (
      storedTheme === "dark" ||
      (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  return (
    <section
      className={`flex flex-col justify-center items-center text-center h-screen px-4 
        pt-72 sm:pt-24
        ${darkMode ? "text-white" : "text-black"}`}
      style={{
        backgroundImage: darkMode
          ? "url(/Background1.png)"
          : "url(/Background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: darkMode ? "#0f0f10" : "#ffffff", // Fallback
      }}
    >
      <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 transition-colors duration-500">
        <span className="text-blue-700">Safeguarding AI</span>{" "}
        <span className={`${darkMode ? "text-white" : "text-black"}`}>
          for the
          <br className="hidden sm:block" /> Long Horizon.
        </span>
      </h1>

      <p
        className={`max-w-2xl text-base sm:text-lg mb-8 transition-colors duration-500 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Recursive Safeguarding Ltd is an Oxford-based AI safety startup,
        selected by ARIA for the UK's Safeguarded AI programme.
      </p>

      <button
        className={`font-semibold px-8 py-3 rounded-[16px] transition 
          shadow-[0_10px_25px_-5px_rgba(37,99,235,0.6)]
          ${darkMode
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-blue-700 hover:bg-blue-800 text-white"}`}
      >
        Learn More
      </button>
    </section>
  );
}