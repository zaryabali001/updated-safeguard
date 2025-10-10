"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <nav className="w-full flex justify-center fixed top-0 z-50 transition-colors duration-300">
      <div
        className={`relative flex justify-between items-center rounded-2xl px-6 py-4 shadow-lg max-w-6xl w-11/12 mt-6 transition-all duration-300
          ${
            darkMode
              ? "bg-[#0f0f10] text-white"
              : "bg-white text-black"
          }`}
        style={{
          // border: "2px solid transparent",
          // backgroundImage: darkMod
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <div className="w-32 h-12 relative">
            <Image
              src={darkMode ? "/logowhote.png" : "/logoblaack.png"}
              alt="Recursive Safeguarding Logo"
              fill
              className="object-contain transition-all duration-300"
              priority
            />
          </div>
        </div>

        {/* Center - Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {["Home", "Mission", "How it works", "Meet Our Team"].map((link, index) => (
            <a
              key={link}
              href="#"
              className={`relative font-medium transition-all duration-300 
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 
                after:transition-all after:duration-300 hover:after:w-full 
                ${
                  darkMode
                    ? `text-${index === 0 ? "blue-400" : "white"} hover:text-blue-400 after:bg-blue-400`
                    : "text-black hover:text-blue-600 after:bg-blue-600"
                }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right - Dark Mode + Contact */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
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

          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-2.5 rounded-[16px] shadow-md transition">
            Contact
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
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
            className="p-2 rounded-md transition"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`absolute top-[90px] w-11/12 max-w-6xl rounded-2xl border shadow-lg py-4 flex flex-col items-center gap-4 transition-all duration-300 md:hidden
          ${
            darkMode
              ? "bg-[#0f0f10] text-white border-white/20"
              : "bg-white text-black border-gray-200"
          }`}
        >
          {["Home", "Mission", "How it works", "Meet Our Team"].map((link) => (
            <a
              key={link}
              href="#"
              className={`font-medium text-lg transition-colors ${
                darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
              }`}
            >
              {link}
            </a>
          ))}

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl shadow-md transition">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}