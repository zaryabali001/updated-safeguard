"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MissionSection() {
  const containerRef = useRef(null);

  useEffect(() => {
      // guard
      if (!containerRef.current) return;

      // scope GSAP selectors/animations to this component and ensure cleanup on unmount/HMR
      const ctx = gsap.context(() => {
        // animate each item individually when it scrolls into view
        const items = gsap.utils.toArray('[data-animate="mission-item"]');
        if (items && items.length) {
          items.forEach((el, idx) => {
            gsap.from(el, {
              opacity: 0,
              y: 40,
              duration: 0.8,
              delay: idx * 0.05,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            });
          });
        }

        // Optional: animate left section (title + paragraph)
        const leftSection = containerRef.current.querySelector(".mission-left");
        if (leftSection) {
          gsap.from(leftSection, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leftSection,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        }
      }, containerRef);

      return () => {
        // revert all animations and ScrollTriggers created in this context
        ctx.revert();
      };
    }, []);

  return (
    <section
      ref={containerRef}
      className="relative text-white py-24 md:py-28 overflow-hidden bg-cover bg-no-repeat bg-center h-full pt-10"
      style={{
        backgroundImage: "url('/missionbackground.jpg')",
        backgroundPosition: "left 1%",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16 lg:px-24 items-center">
        <div className="mission-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            As AI agents become more autonomous, they risk drifting from human goals. We’re building systems
            that align foundation models and AI agents with human intent through steerable, verifiable world models.
            Our mission: ensure safe, human-guided AI deployment for the real world.
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              title: "Alignment",
              desc: "Ensuring AI systems stay in sync with human intent and ethics",
            },
            {
              title: "Verification",
              desc: "Building transparent models that can be tested and trusted",
            },
            {
              title: "Trust",
              desc: "Creating AI agents that act reliably in real-world applications",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-animate="mission-item"
              className="border-t border-blue-500/70 pt-3"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-300 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
