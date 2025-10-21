
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HowItWorks() {
  const [darkMode, setDarkMode] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Theme handling
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

    // GSAP animation setup
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      if (sectionRef.current) {
        const textElements = sectionRef.current.querySelectorAll(
          ".animate-text h4, .animate-text span, .animate-text p"
        );

        // Debug: Log selected elements
        console.log("Text elements found:", textElements.length);

        // Clean up existing animations
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        textElements.forEach((element, index) => {
          gsap.fromTo(
            element,
            {
              opacity: 0,
              y: 60, // Start further from bottom for pronounced effect
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 90%", // Trigger when section top hits 90% of viewport
                end: "bottom 10%", // End when section bottom hits 10% of viewport
                toggleActions: "play none none reverse", // Play on enter, reverse on leave
                // Debug: Log scroll events
                onEnter: () => console.log(`Element ${index} entered`),
                onLeaveBack: () => console.log(`Element ${index} left back`),
              },
              delay: index * 0.4, // Increased stagger for one-by-one effect
            }
          );
        });
      } else {
        console.error("sectionRef.current is null");
      }
    }

    // Cleanup on unmount
    return () => {
      observer.disconnect();
      if (typeof window !== "undefined") {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full flex justify-center transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
      id="how-it-works"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 md:py-24 gap-12 lg:gap-20">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left animate-text">
          <h4 className="text-blue-600 font-semibold sm:text-lg mb-2">
            How It Works
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4">
            <span className={`${darkMode ? "text-white" : "text-black"}`}>
              How Recursive
            </span>{" "}
            <span className="text-blue-600 "> <br />
              Safeguarding Keeps
            </span>{" "}
            <br />
            <span className="text-blue-600 ">AI</span>{" "}
            <span className={`${darkMode ? "text-white" : "text-black"}`}>
              on Course
            </span>
          </h1>
          <p
            className={`${
              darkMode ? "text-gray-300" : "text-gray-600"
            } sm:text-lg md:text-xl`}
          >
            Turning complex AI behavior into clear, steerable world models.
          </p>
        </div>

        {/* Right Image Section */}
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
                    {
                      position: "left-[-10px]  top-1/2 -translate-y-1/2",
                      label: "Tool",
                    },
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
                          vertical
                            ? "flex-col items-center gap-1"
                            : "items-center gap-2"
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
      
    </section>
  );
}
