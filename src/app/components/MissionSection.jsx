
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function MissionSection() {
  const leftSectionRef = useRef(null); // Reference for left section
  const cardRefs = useRef([]); // References for right section cards

  useEffect(() => {
    // Animate left section (slide up from bottom)
    gsap.fromTo(
      leftSectionRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftSectionRef.current,
          start: "top 85%", // Start when top of section is 85% from top of viewport
          end: "top 30%", // End when top of section is 30% from top of viewport
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
          // markers: true, // Uncomment for debugging ScrollTrigger positions
        },
      }
    );

    // Animate right section cards (staggered slide up from bottom)
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // Start when top of card is 85% from top of viewport
            end: "top 30%", // End when top of card is 30% from top of viewport
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
            // markers: true, // Uncomment for debugging ScrollTrigger positions
          },
          delay: index * 0.2, // Stagger animations by 0.2s
        }
      );
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="relative text-white py-24 md:py-28 overflow-hidden bg-cover bg-no-repeat bg-center h-full"
      style={{
        backgroundImage: "url('/missionbackground.jpg')",
        backgroundPosition: "left 1%",
      }}
    >
      {/* 🔹 Overlay for text readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* 🔹 Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16 lg:px-24 items-center">
        {/* Left Section */}
        <div ref={leftSectionRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            As AI agents become more autonomous, they risk drifting from human
            goals. We’re building systems that align foundation models and AI
            agents with human intent through steerable, verifiable world models.
            Our mission: ensure safe, human-guided AI deployment for the real
            world.
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          {["Alignment", "Verification", "Trust"].map((title, index) => (
            <div
              key={title}
              ref={(el) => (cardRefs.current[index] = el)} // Add ref to each card
              className="border-t border-blue-500/70 pt-3"
            >
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-gray-300 mt-1">
                {title === "Alignment"
                  ? "Ensuring AI systems stay in sync with human intent and ethics"
                  : title === "Verification"
                  ? "Building transparent models that can be tested and trusted"
                  : "Creating AI agents that act reliably in real-world applications"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}