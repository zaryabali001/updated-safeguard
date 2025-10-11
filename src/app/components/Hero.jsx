"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }

    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`flex flex-col justify-center items-center text-center min-h-screen px-4 transition-colors duration-500 
        pt-40 sm:pt-24 md:pt-32
        ${darkMode ? "bg-[#0f0f10] text-white" : "bg-gray-50 text-black"}`}
      style={{
        backgroundImage: darkMode
          ? "url(/Background1.png)"
          : "url(/Background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold leading-tight mb-6 transition-colors duration-500 mt-[-95px]">
        <span className="text-blue-700">Safeguarding AI</span>{" "}
        <span className={`${darkMode ? "text-white" : "text-black"}`}>
          for the
          <br className="hidden sm:block" /> Long Horizon.
        </span>
      </h1>

      <p
        className={`max-w-md sm:max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg mb-8 transition-colors duration-500 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Recursive Safeguarding Ltd is an Oxford-based AI safety startup,
        selected by ARIA for the UK's Safeguarded AI programme.
      </p>

      <button
        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-[16px] transition 
             shadow-[0_8px_20px_-5px_rgba(37,99,235,0.6)]"
      >
        Learn More
      </button>
    </section>
  );
}
