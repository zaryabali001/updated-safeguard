
"use client";
import { useEffect, useState } from "react";
import { Monitor, Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [theme, setTheme] = useState("system");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Load theme from localStorage or default to "system"
    const storedTheme = localStorage.getItem("theme") || "system";
    setTheme(storedTheme);

    const applyTheme = () => {
      const isDark =
        storedTheme === "dark" ||
        (storedTheme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      document.documentElement.classList.toggle("dark", isDark);
    };

    applyTheme();

    // Set up listener for system theme changes if theme is "system"
    if (storedTheme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleSystemThemeChange = (e) => {
        document.documentElement.classList.toggle("dark", e.matches);
      };
      mediaQuery.addEventListener("change", handleSystemThemeChange);
      return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
    }
  }, []);

  const cycleTheme = () => {
    const themes = ["system", "dark", "light"];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);

    const isDark =
      nextTheme === "dark" ||
      (nextTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);

    // Update system theme listener if switching to "system"
    if (nextTheme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleSystemThemeChange = (e) => {
        document.documentElement.classList.toggle("dark", e.matches);
      };
      mediaQuery.addEventListener("change", handleSystemThemeChange);
      return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
    }
  };

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  // Determine icon and label for the toggle button
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

  const getNextThemeLabel = () => {
    const themes = ["system", "dark", "light"];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    return nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1);
  };

  return (
    <nav className="fixed top-2 left-1/2 items-center gap-3 mt-[2px] sm:mt-0 -translate-x-1/2 z-50 w-[90%] lg:w-[60%] flex justify-center px-2 sm:px-16 ">
      <div
        className={`relative flex justify-between items-center w-full max-w-6xl rounded-2xl mt-3 px-4 sm:px-6 py-3 sm:py-4 shadow-lg transition-colors duration-300 border border-transparent ${
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
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-28 sm:w-32 h-10 sm:h-12 relative">
            <Image
              src={isDarkMode ? "/white.svg" : "/black.svg"}
              alt="Logo"
              fill
              className="object-contain transition-all duration-300"
              priority
            />
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-10 justify-center">
          {[
            { name: "Home", href: "#header" },
            { name: "Mission", href: "#mission" },
            { name: "How it works", href: "#how-it-works" },
            { name: "Meet Our Team", href: "#team" },
          ].map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative font-medium text-sm transition-all duration-300
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1
                after:transition-all after:duration-300 hover:after:w-full ${
                  isDarkMode
                    ? `${
                        i === 0 ? "text-blue-400" : "text-white"
                      } hover:text-blue-400 after:bg-blue-400`
                    : "text-black hover:text-blue-600 after:bg-blue-600"
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative group">
            <button
              onClick={cycleTheme}
              aria-label={`Switch to ${getNextThemeLabel()} theme`}
              className={`p-2 rounded-full transition ${
                isDarkMode ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/5 text-gray-800 hover:bg-black/10"
              }`}
            >
              {getThemeIcon()}
            </button>
            <span
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {getNextThemeLabel()}
            </span>
          </div>

          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm sm:text-base px-8 py-2.5 sm:py-3 rounded-[16px] transition shadow-[0_8px_20px_-5px_rgba(37,99,235,0.6)] cursor-pointer inline-block"
          >
            Contact
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="relative group">
            <button
              onClick={cycleTheme}
              aria-label={`Switch to ${getNextThemeLabel()} theme`}
              className={`p-2 rounded-full transition ${
                isDarkMode ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/5 text-gray-800 hover:bg-black/10"
              }`}
            >
              {getThemeIcon()}
            </button>
            <span
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {getNextThemeLabel()}
            </span>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-md transition"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`absolute top-[75px] left-0 w-full px-4 sm:px-6 py-4 flex flex-col items-center gap-4 border-t rounded-2xl md:hidden overflow-hidden transition-all duration-300 mt-2 ${
            isDarkMode
              ? "bg-[#0f0f10] text-white border-white/20"
              : "bg-white text-black border-gray-200"
          } ${
            menuOpen
              ? "max-h-96 opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95"
          }`}
        >
          {[
            { name: "Home", href: "#header" },
            { name: "Mission", href: "#mission" },
            { name: "How it works", href: "#how-it-works" },
            { name: "Meet Our Team", href: "#team" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium text-base transition-colors ${
                isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm sm:text-base px-8 py-2.5 sm:py-3 rounded-[16px] transition shadow-[0_8px_20px_-5px_rgba(37,99,235,0.6)] cursor-pointer inline-block"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
