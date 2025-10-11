"use client";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = storedTheme === "dark" || (!storedTheme && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <nav className="fixed top-2 left-1/2  items-center gap-3  mt-[2px] sm:mt-0 -translate-x-1/2 z-50 w-[90%] lg:w-[60%] flex justify-center px-2 sm:px-16">
      <div
        className={`relative flex justify-between items-center w-full max-w-6xl rounded-2xl mt-3 px-4 sm:px-6 py-3 sm:py-4 shadow-lg transition-colors duration-300 border border-transparent ${
          darkMode ? "text-white" : "text-black"
        }`}
        style={{
          backgroundImage: `
            linear-gradient(${darkMode ? "#0f0f10" : "white"}, ${darkMode ? "#0f0f10" : "white"}),
            linear-gradient(to right bottom, #747474 0%, #17171700 10%, #17171700 90%, #747474 100%)
          `,
          backgroundClip: "padding-box, border-box",
          backgroundOrigin: "padding-box, border-box",
        }}
      >
        {/* ✅ Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-28 sm:w-32 h-10 sm:h-12 relative">
            <Image
              src={darkMode ? "/white.svg" : "/black.svg"}
              alt="Logo"
              fill
              className="object-contain transition-all duration-300"
              priority
            />
          </div>
        </div>

        {/* ✅ Desktop Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-10 justify-center">
          {["Home", "Mission", "How it works", "Meet Our Team"].map((link, i) => (
            <a
              key={link}
              href="#"
              className={`relative font-medium text-sm transition-all duration-300
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1
                after:transition-all after:duration-300 hover:after:w-full ${
                  darkMode
                    ? `${
                        i === 0 ? "text-blue-400" : "text-white"
                      } hover:text-blue-400 after:bg-blue-400`
                    : "text-black hover:text-blue-600 after:bg-blue-600"
                }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* ✅ Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className={`p-2 rounded-full transition ${
              darkMode ? "bg-white/10" : "bg-black/5"
            }`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm border-transparent sm:text-base px-8 sm:px- py-2.5 sm:py-3 rounded-[16px] transition 
             shadow-[0_8px_20px_-5px_rgba(37,99,235,0.6)]"
      >
        Contact
      </button>
        </div>

        {/* ✅ Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden ">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className={`p-2 rounded-full transition ${
              darkMode ? "bg-white/10" : "bg-black/5"
            }`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-md transition"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div
          className={`absolute top-[75px] left-0 w-full px-4 sm:px-6 py-4 flex flex-col items-center gap-4 border-t rounded-2xl md:hidden overflow-hidden transition-all duration-300 mt-2 ${
    darkMode
      ? "bg-[#0f0f10] text-white border-white/20"
      : "bg-white text-black border-gray-200"
  } ${menuOpen ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"}`}

        >
          {["Home", "Mission", "How it works", "Meet Our Team"].map((link) => (
            <a
              key={link}
              href="#"
              className={`font-medium text-base transition-colors ${
                darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
              }`}
            >
              {link}
            </a>
          ))}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 rounded-[16px] py-1.5 transition shadow-[0_8px_20px_-5px_rgba(37,99,235,0.6)]">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
