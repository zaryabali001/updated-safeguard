"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HowItWorks() {
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
    <section className={`flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16  lg:px-24 py-20 md:py-24  transition-colors duration-300 ${darkMode ? " bg-gray-900" : " bg-white"}`}>
      {/* Left Text Section */}
      <div className="max-w-xl text-center md:text-left">
        <h4 className="text-blue-600 dark:text-blue-400 font-semibold text-base sm:text-lg mb-2">
          How It Works
        </h4>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          <span className={`${darkMode ? " text-white" : " text-black"}`}>How Recursive</span>{" "}
          <span className="text-blue-600 dark:text-blue-400">Safeguarding Keeps</span> <br />
          <span className="text-blue-600 dark:text-blue-400">AI</span>{" "}
          <span className={`${darkMode ? " text-white" : " text-black"}`}>on Course</span>
        </h1>
        <p className={`${darkMode ? " text-white" : " text-gray-600"} sm:text-lg md:text-xl`}>
          Turning complex AI behavior into clear, steerable world models.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
        <Image
          src="/handshake.png"
          alt="Recursive Safeguarding"
          width={500}
          height={400}
          className="object-contain w-4/5 sm:w-3/4 md:w-[500px] dark:brightness-90"
        />
      </div>
    </section>
  );
}