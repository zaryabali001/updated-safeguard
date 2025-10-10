"use client";
import React, { useEffect, useState } from "react";

export default function HumanSteering() {
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
    <div
      className={`flex items-center justify-center py-12 px-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div
        className={`rounded-3xl border-2 border-gray-300 dark:border-gray-700 p-8 md:p-12 w-full max-w-5xl ${
          darkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Human Steering
            </h1>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              The system presents multiple interpretable options. Humans can
              compare, choose, or refine the one that best matches their real
              intent — keeping control at every step.
            </p>
          </div>

          {/* Right Side - Options and Flow */}
          <div className="flex flex-col sm:flex-row flex-1 gap-6 sm:gap-4 items-center sm:items-start justify-center sm:justify-between w-full">
            {/* Options Column */}
            <div className="flex flex-col gap-4 flex-1 w-full max-w-sm">
              {/* Best Match - Selected */}
              <div
                className={`border-2 border-dashed border-blue-400 rounded-lg p-4 ${
                  darkMode ? "bg-blue-950" : "bg-blue-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
                      darkMode ? "bg-white" : "bg-gray-900"
                    }`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 ${
                        darkMode ? "text-gray-900" : "text-white"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-900 dark:text-gray-100 font-medium">
                    Best Match
                  </span>
                </div>
              </div>

              {/* Too Complex - Unselected */}
              <div
                className={`border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 ${
                  darkMode ? "bg-gray-900" : "bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-400 dark:border-gray-500 bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-gray-400 dark:text-gray-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-400 dark:text-gray-400 font-medium">
                    Too Complex
                  </span>
                </div>
              </div>

              {/* Not Relevant - Unselected */}
              <div
                className={`border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 ${
                  darkMode ? "bg-gray-900" : "bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-400 dark:border-gray-500 bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-gray-400 dark:text-gray-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-400 dark:text-gray-400 font-medium">
                    Not Relevant
                  </span>
                </div>
              </div>
            </div>

            {/* Human Adjustment Flow */}
            <div
              className={`border-2 border-dashed rounded-lg p-6 w-full sm:w-56 flex flex-col items-center justify-between ${
                darkMode
                  ? "bg-gray-900 border-gray-700"
                  : "bg-gray-200 border-gray-800"
              }`}
            >
              <div className="mb-4">
                <svg
                  className="w-16 h-16 text-gray-300 dark:text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>

              <div className="text-center mb-4">
                <p className="text-gray-400 text-xs leading-relaxed">
                  Human Adjusts Sliders
                  <br />
                  Refines Plan
                </p>
              </div>

              <div className="bg-gray-200 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-full px-4 py-1.5 text-center w-full">
                <span className="text-gray-700 dark:text-white text-xs font-medium">
                  Final Approved AI Plan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
