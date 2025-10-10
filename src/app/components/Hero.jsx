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
      className={`flex flex-col justify-center items-center text-center h-screen px-4 transition-colors duration-500 
        pt-72 sm:pt-24  /* ✅ Added top padding for mobile */
        ${darkMode ? "bg-[#0f0f10] text-white" : "bg-white text-black"}`}
      style={{
       backgroundImage: darkMode
          ? "url(/Background1.png)" // Dark mode background image
          : "url(/Background.png)", // Add your image path here (place the provided image in the public folder as ring-background.png)
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 transition-colors duration-500">
        <span className="text-blue-700 ">
          Safeguarding AI
        </span>{" "}
        <span className={`${darkMode ? "text-white" : "text-black"}`}>
          for the
          <br className="hidden sm:block" /> Long Horizon.
        </span>
      </h1>

      <p className={`max-w-2xl text-base sm:text-lg mb-8 transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
        Recursive Safeguarding Ltd is an Oxford-based AI safety startup,
        selected by ARIA for the UK's Safeguarded AI programme.
      </p>

      <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-[16px] transition">
        Learn More
      </button>
    </section>
  );
}