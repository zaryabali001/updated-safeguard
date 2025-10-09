
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Load initial theme
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  return (
    <nav className="w-full flex justify-center fixed top-0 z-50 mt-0 transition-colors duration-300">
      <div
        className={`flex justify-between items-center rounded-2xl px-8 py-4 shadow-lg border max-w-6xl w-11/12 mt-6 transition-colors duration-300
          ${darkMode
            ? "bg-[#0f0f10] text-white border border-white/20"
            : "bg-white text-black border-gray-200"
          }`}
      >
        {/* Left side - Title */}
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-semibold tracking-wide">
            RECURSIVE
          </span>
          <span
            className={`text-[10px] tracking-widest transition-colors ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            SAFEGUARDING
          </span>
        </div>

        {/* Center - Links */}
        <div className="flex space-x-8">
          {["Home", "Mission", "How it works", "Meet Our Team"].map((link) => (
            <a
              key={link}
              href="#"
              className={`font-medium transition-colors duration-300 ${
                darkMode
                  ? "text-white hover:text-gray-300"
                  : "text-black hover:text-gray-700"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right - Toggle + Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition ${
              darkMode
                ? "bg-white/10 hover:bg-white/20"
                : "bg-black/5 hover:bg-black/10"
            }`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl shadow-md transition">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
