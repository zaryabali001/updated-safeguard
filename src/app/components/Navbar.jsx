"use client";
import { useEffect, useState } from "react";
import { Monitor, Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [theme, setTheme] = useState("system");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedTheme = localStorage.getItem("theme") || "system";
    setTheme(storedTheme);

    const applyTheme = (mode = storedTheme) => {
      const isDark =
        mode === "dark" ||
        (mode === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      document.documentElement.classList.toggle("dark", isDark);
      setIsDarkMode(isDark);
    };

    applyTheme(storedTheme);

    if (storedTheme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleSystemChange = (e) => {
        document.documentElement.classList.toggle("dark", e.matches);
        setIsDarkMode(e.matches);
      };
      mediaQuery.addEventListener("change", handleSystemChange);
      return () => mediaQuery.removeEventListener("change", handleSystemChange);
    }
  }, []);

  const changeTheme = (selectedTheme) => {
    if (typeof window === "undefined") return;

    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    const isDark =
      selectedTheme === "dark" ||
      (selectedTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
    setIsDarkMode(isDark);
    setDropdownOpen(false);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "system":
        return <Monitor className="w-5 h-5" />;
      case "dark":
        return <Moon className="w-5 h-5" />;
      case "light":
        return <Sun className="w-5 h-5" />;
      default:
        return <Monitor className="w-5 h-5" />;
    }
  };

  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[90%] lg:w-[65%] flex justify-center px-2 sm:px-16">
      <div
        className={`relative flex justify-between items-center w-full rounded-2xl mt-3 px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-transparent ${
          isDarkMode ? "text-white" : "text-black"
        }`}
        style={{
          backgroundImage: `
            linear-gradient(${isDarkMode ? "#0f0f10" : "white"}, ${
            isDarkMode ? "#0f0f10" : "white"
          }),
            linear-gradient(to right bottom, #747474 0%, #17171700 10%, #17171700 90%, #747474 100%)
          `,
          backgroundClip: "padding-box, border-box",
          backgroundOrigin: "padding-box, border-box",
        }}
      >
        {/* Logo */}
        <div className="w-28 sm:w-32 h-10 sm:h-12 relative">
          <Image
            src={isDarkMode ? "/white.svg" : "/black.svg"}
            alt="Logo"
            fill
            className="object-contain transition-all duration-300"
            priority
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-10 justify-center">
          {[
            { name: "Home", href: "#header" },
            { name: "Mission", href: "#mission" },
            { name: "How it works", href: "#how-it-works" },
            { name: "Meet Our Team", href: "#team" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative font-medium text-sm transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:transition-all after:duration-300 ${
                isDarkMode
                  ? "text-white hover:text-blue-400 after:bg-blue-400"
                  : "text-black hover:text-blue-600 after:bg-blue-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme Dropdown + Contact */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-2 p-2 rounded-md transition ${
                isDarkMode
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-black/5 text-gray-800 hover:bg-black/10"
              }`}
            >
              {getThemeIcon()}
              <ChevronDown className="w-4 h-4" />
            </button>

            {dropdownOpen && (
              <div
                className={`absolute left-0 top-[110%] w-32 rounded-md shadow-md overflow-hidden border ${
                  isDarkMode
                    ? "bg-[#1c1c1c] border-white/10"
                    : "bg-white border-gray-200"
                }`}
              >
                {["light", "dark", "system"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => changeTheme(mode)}
                    className={`w-full text-left px-4 py-2 text-sm capitalize transition ${
                      theme === mode
                        ? isDarkMode
                          ? "bg-white/10 text-blue-400"
                          : "bg-gray-100 text-blue-600"
                        : isDarkMode
                        ? "hover:bg-white/10"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm sm:text-base px-8 py-2.5 sm:py-3 rounded-[16px] transition shadow-[0_8px_20px_-5px_rgba(37,99,235,0.6)]"
          >
            Contact
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`absolute top-[75px] left-0 w-full px-4 sm:px-6 py-4 flex flex-col items-center gap-4 border-t rounded-2xl md:hidden transition-all duration-300 mt-2 ${
            isDarkMode
              ? "bg-[#0f0f10] text-white border-white/20"
              : "bg-white text-black border-gray-200"
          }`}
        >
          {["Home", "Mission", "How it works", "Meet Our Team"].map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase().replace(/\s+/g, "-")}`}
              className={`font-medium text-base transition-colors ${
                isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"
              }`}
            >
              {name}
            </a>
          ))}

          {/* Theme Dropdown in Mobile */}
          <div className="relative w-full flex flex-col items-center">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
                isDarkMode
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-black/5 text-gray-800 hover:bg-black/10"
              }`}
            >
              {getThemeIcon()}
              <span className="capitalize">{theme}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {dropdownOpen && (
              <div
                className={`absolute top-[110%] w-32 rounded-md shadow-md overflow-hidden border ${
                  isDarkMode
                    ? "bg-[#1c1c1c] border-white/10"
                    : "bg-white border-gray-200"
                }`}
              >
                {["light", "dark", "system"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => changeTheme(mode)}
                    className={`w-full text-left px-4 py-2 text-sm capitalize transition ${
                      theme === mode
                        ? isDarkMode
                          ? "bg-white/10 text-blue-400"
                          : "bg-gray-100 text-blue-600"
                        : isDarkMode
                        ? "hover:bg-white/10"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm sm:text-base px-8 py-2.5 sm:py-3 rounded-[16px] transition shadow-[0_8px_20px_-5px_rgba(37,99,235,0.6)] inline-block"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
