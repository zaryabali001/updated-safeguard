
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
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24 gap-12 lg:gap-20">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left animate-text">
          <h4 className="text-blue-600 font-semibold sm:text-lg mb-2">
            How It Works
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4">
            <span className={`${darkMode ? "text-white" : "text-black"}`}>
              How Recursive
            </span>{" "}
            <span className="text-blue-600 ">
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
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/handshake.png"
            alt="Recursive Safeguarding"
            width={500}
            height={400}
            className="object-contain w-[100%] sm:w-[75%] md:w-[700px] dark:brightness-90 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
