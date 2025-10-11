"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AgentPlanComponent() {
  const [darkMode, setDarkMode] = useState(false);
  const cardRefs = useRef([]); // Store references to card elements

  useEffect(() => {
    // GSAP animation for cards
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );
    });

    // Cleanup on unmount
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
      className={`flex flex-col md:flex-col lg:flex-row gap-8 lg:gap-12 
      p-4 sm:p-6 md:p-8 min-h-screen items-center justify-center 
      transition-colors duration-300 ${
        darkMode ? " bg-gray-900" : " bg-white"
      }`}
    >
      {/* Observe the Agent Section */}
      <div
        ref={(el) => (cardRefs.current[0] = el)}
        className={`rounded-2xl p-6 sm:p-8 shadow-sm 
        w-full max-w-md md:max-w-lg border border-gray-200 dark:border-gray-700 
        transition-all duration-300 hover:border-blue-800 dark:hover:border-blue-800 ${
          darkMode ? " bg-gray-800" : " bg-gray-100"
        }`}
      >
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-3  
          transition-colors duration-300 ${
            darkMode ? " text-white" : " text-black"
          }`}
        >
          Observe the Agent
        </h2>
        <p
          className="text-gray-400 text-base mb-6 leading-relaxed 
          transition-colors duration-300"
        >
          We monitor the AI's outputs in real time, capturing its actions, code,
          or decisions as it works.
        </p>

        {/* Circular Diagram */}
        <div className="relative w-56 sm:w-72 h-64 sm:h-96 mx-auto mt-6">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="text-gray-300 dark:text-gray-600 transition-colors duration-100"
            />
          </svg>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="text-blue-400 dark:text-blue-300 transition-colors duration-100"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src={darkMode ? "/logowhite.svg" : "/logoblack.svg"}
              alt="Agent"
              width={60}
              height={60}
              className="transition-opacity duration-300"
            />
          </div>
          {[
            { position: "left-[-10px]  top-1/2 -translate-y-1/2", label: "Tool" },
            {
              position: "top-6 md:top-14 left-1/2 -translate-x-1/2",
              label: "Code",
              vertical: true,
            },
            { position: "right-2 top-1/2 -translate-y-1/2", label: "Apps" },
            {
              position: " bottom-7 md:bottom-14  left-1/2 -translate-x-1/2",
              label: "Chat",
              vertical: true,
            },
          ].map(({ position, label, vertical }) => (
            <div key={label} className={`absolute ${position}`}>
              <div
                className={`flex ${
                  vertical ? "flex-col items-center gap-1" : "items-center gap-2"
                }`}
              >
                {vertical && label !== "Chat" && (
                  <div className="w-2 h-2 bg-blue-400  rounded-full transition-colors duration-300"></div>
                )}
                <div
                  className="bg-blue-600  text-white px-3 py-1 rounded-md 
                  text-xs sm:text-sm shadow transition-colors duration-100"
                >
                  {label}
                </div>
                {!vertical && (
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full transition-colors duration-300"></div>
                )}
                {vertical && label === "Chat" && (
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full transition-colors duration-100"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infer the Plan Section */}
      <div
        ref={(el) => (cardRefs.current[1] = el)}
        className={`rounded-2xl p-6 sm:p-8 shadow-sm 
        w-full max-w-md md:max-w-lg border border-gray-200 dark:border-gray-700 
        transition-all duration-300 hover:border-blue-800 dark:hover:border-blue-800 ${
          darkMode ? " bg-gray-800" : " bg-gray-100"
        }`}
      >
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-3  
          transition-colors duration-300 ${
            darkMode ? " text-white" : " text-black"
          }`}
        >
          Infer the Plan
        </h2>
        <p
          className="text-gray-400 text-base mb-6 leading-relaxed 
          transition-colors duration-300"
        >
          Our system uses GFlowNets to convert agent behavior into structured,
          verifiable plans in ML3.
        </p>

        <div className=" space-y-4 mt-[-29px] ">
          <div className="flex items-center justify-center gap-3">
            <div
              className="bg-blue-700  text-white px-5 py-2 rounded-md 
              text-xs sm:text-sm shadow transition-colors duration-300 lg:ml-5 ml-10 mr-[-12px]"
            >
              AI Agent Outputs
            </div>
            <svg width="60" height="2" className="flex-shrink-0 ">
              <line
                x1="0"
                y1="1"
                x2="60"
                y2="1"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5 5"
                className="text-gray-400 dark:text-gray-600 transition-colors duration-300"
              />
            </svg>
            <div className="mt-10 pr-12 m-[-9px] ">
              <svg width="2" height="45">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="45"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  className="text-gray-400 dark:text-gray-600 transition-colors duration-300 mt-3  mr-19 pr-19 lg:mr-[-9px] "
                />
              </svg>
            </div>
          </div>

          <div
            className={`border-2 border-dashed lg:w-[45%] w-[60%] flex lg:ml-50 ml-22 rounded-lg px-3 py-2 text-center justify-center text-xs sm:text-sm font-medium 
            transition-colors duration-300 mb-[-2px] mt-[-15px] ${
              darkMode ? " text-white" : " text-black"
            }`}
          >
            GFlowNet Inference Engine
          </div>
          <div className="flex justify-center ">
            <svg width="2" height="45">
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="45"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5 5"
                className="text-gray-400 dark:text-gray-600 transition-colors duration-300"
              />
            </svg>
          </div>
          <button
            className={`text-center text-sm font-medium pb-2 transition-all bg-gray-200 px-5 py-2 rounded-md 
               sm:text-sm shadow  duration-300 flex justify-center lg:ml-30 ml-10 mt-[-15px]   ${
              darkMode ? " text-black" : " text-black"
            }`}
          >
            ML3 Program Generator
          </button>
          <div className="flex justify-center flex-wrap gap-2 mt-[20px]">
            {["Task", "Decision Rules", "Expected Outcomes"].map((label) => (
              <div
                key={label}
                className=" border-dashed border  border-blue-600
                 px-3 py-1.5 rounded text-xs 
                font-medium text-gray-400  transition-colors duration-300"
              >
                {label}
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-3 mt-[9px]">
            <div
              className="flex items-center gap-2 border border-blue-400  
              bg-white dark:bg-gray-900 px-4 py-2 rounded-md shadow-sm 
              transition-colors duration-300  mt-[2px]"
            >
              <svg
                className="w-4 h-4 text-blue-500transition-colors duration-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                className="text-xs sm:text-sm  font-medium text-gray-900 dark:text-gray-100 
                transition-colors duration-300"
              >
                Structured Plan
              </span>
            </div>
          </div>
          <div
            className={`text-center text-xs font-medium mt-3  
            pb-2 transition-colors duration-300 ${
              darkMode ? " text-white" : " text-black"
            }`}
          >
            Human Review Interface
          </div>
          <div className="flex justify-center flex-wrap gap-3 pt-3 ">
            {["Plan A", "Plan B", "Plan C"].map((plan, i) => (
              <label key={plan} className="flex items-center gap-2 cursor-pointer text-white bg-gray-200 py-2 px-4 rounded-xl">
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center 
                  ${
                    i === 0
                      ? "bg-blue-500"
                      : "border-2 border-gray-300  bg-white "
                  } 
                  transition-colors duration-300`}
                >
                  {i === 0 && (
                    <svg
                      className="w-3.5 h-3.5 text-gray-200"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-xs sm:text-sm font-medium  
                  transition-colors duration-100 ${
                    darkMode ? " text-black" : " text-black"
                  }`}
                >
                  {plan}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
