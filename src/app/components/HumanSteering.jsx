"use client";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HumanSteering() {
  const [darkMode, setDarkMode] = useState(false);
  const leftSectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      leftSectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftSectionRef.current,
          start: "top 85%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
      className={`flex items-center justify-center py-12 px-6 mt-[-70px] transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div
        className={`rounded-3xl border-2 border-gray-300 dark:border-gray-700 p-8 md:p-12 w-full max-w-272 hover:border-blue-800 flex justify-center ${
          darkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-10 md:gap-16 w-full">
          {/* Left Section */}
          <div
            ref={leftSectionRef}
            className="flex-1 text-center md:text-left mx-auto md:mx-0"
          >
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

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row flex-1 justify-center items-center gap-6 sm:gap-4 w-full">
            {/* Options */}
            <div className="flex flex-col gap-4 flex-1 justify-center items-center w-full sm:w-auto ">
              {[
                {
                  title: "Best Match",
                  selected: true,
                  bgColor: darkMode ? "bg-blue-120" : "bg-blue-600",
                  icon: (
                    <svg
                      className="w-3.5 h-3.5 text-blue-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Too Complex",
                  selected: false,
                  bgColor: darkMode ? "bg-gray-800" : "bg-gray-100",
                  icon: (
                    <svg
                      className="w-3 h-3 text-blue-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Not Relevant",
                  selected: false,
                  bgColor: darkMode ? "bg-gray-800" : "bg-gray-100",
                  icon: (
                    <svg
                      className="w-3 h-3 text-blue-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
              ].map(({ title, selected, bgColor, icon }, index) => (
                <div
                  key={title}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`border-2 border-dashed ${
                    selected ? "border-blue-400" : "border-gray-300"
                  } rounded-lg p-4 ${bgColor} w-full sm:w-full`}
                >
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-5 h-5 rounded flex items-center justify-center bg-white">
                      {icon}
                    </div>
                    <span
                      className={`font-medium ${
                        darkMode
                          ? "text-white"
                          : selected
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Fixed Box Styling in Dark Mode */}
            <div
              ref={(el) => (cardRefs.current[3] = el)}
              className={`border-2 border-dashed rounded-lg p-6 w-full sm:w-56 flex flex-col items-center justify-between mt-6 sm:mt-0 ${
                darkMode ? "bg-gray-800 border-gray-600" : "bg-white"
              }`}
            >
              <div className="mb-4">
                <svg
                  className={`w-16 h-16 ${
                    darkMode ? "text-gray-300" : "text-gray-400"
                  }`}
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
                <p
                  className={`text-xs leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Human Adjusts Sliders
                  <br />
                  Refines Plan
                </p>
              </div>

              <div
                className={`rounded-full px-4 py-1.5 text-center w-full border ${
                  darkMode
                    ? "bg-blue-700 border-gray-500 text-white"
                    : "bg-gray-200 border-gray-300 text-gray-700"
                }`}
              >
                <span className="text-xs font-medium">
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
