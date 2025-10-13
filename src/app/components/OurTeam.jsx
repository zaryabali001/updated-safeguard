


"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


export default function OurTeam() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
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

   const teamMembers = [
    {
      name: "Younesse Kaddar",
      title: "Director",
      image:
        "./pic1.svg",
      bio: "Younesse leads Hestiam, bridging AI, HCI, in software with Oxford University and while Informatics at ENAC. His research in AI safety ranges from computational neuroscience, mechanistic interpretability and trustworthy AI, to studying how AI agents are to a LLM reinforcing as Gitano. He is also the founder/educator-with-PhD of Algoria.",
    },
    {
      name: "Rob Cornish",
      title: "Research Director",
      image:
        "./pic2.svg",
      bio: "Oxford University Algorithms have and University of East Anglia's. Research a faculty member at NYU. Research Man's work on language Modelling of models understanding and controllable, text generation, and interactive model probing.",
    },
    {
      name: "Sam Staton",
      title: "Scientific Advisor",
      image:
        "./pic3.png",
      bio: "Professor & Oxford University. Inventor of GDL (our life grows with at MIT). Contributor Oxford as an. Basic research in mathematical, theory of programming languages and AI. Also interested leads in AI.",
    },
    {
      name: "Pedro Amorim",
      title: "Research Scientist",
      image:
        "./pic4.svg",
      bio: "Pedro is member of the University of Bath, expert in programming. Research focus LLM/reinforcement on computer/AI/programming.",
    },
    {
      name: "Nikolaj Jensen",
      title: "AI Researcher",
      image:
        "./pic5.svg",
      bio: "Nikel earlier as Oxford University and previously at GDL (our life up leads) at MIT. Focused on theory of AI Many of LLM/s.",
    },
    {
      name: "Jacek Karwowski",
      title: "AI Safety Researcher",
      image:
        "./pic6.svg",
      bio: "Jacek has contributed to making AI systems more trustworthy and impact assessment, AI-safety on AIholder research at University.",
    },
    {
      name: "Mohammed Mahfoud",
      title: "Principal Research Collaborator",
      image:
        "",
      bio: "Independent researcher and entrepreneur. Led work on Exa-scale Safeguards Research at Anthropic, “Scientist AI” with Yoshua Bengio at MILA, and co-founded the Alignment team at TII (developers of Falcon 1 LLM). Former EdTech startup co-founder with a successful exit.",
    },
    {
      name: "Paolo Perrone",
      title: "Mathematical Researcher",
      image:
        "./pic8.png",
      bio: "Postdoctoral researcher at Oxford University collaborating with ARIA SGAI TA1 via Oxford and Adjoint Labs Ltd. Leading contributor to Markov category theory.",
    },
    {
      name: "Ali Zein",
      title: "Innovation Advisor",
      image:
        "./pic9.svg",
      bio: "Experienced in technology and startups across Munich, Oxford, and Cambridge. Member of the advisory board at the Smith School of Enterprise and the Environment.",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="team"
      className={`min-h-screen py-16 px-6 sm:px-10 transition-colors duration-500 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Meet <span className="text-blue-600">Our Team</span>
          </motion.h1>
          <p className="text-gray-400 text-base sm:text-lg">
            A world-class team of researchers and entrepreneurs
            <br />
            from Oxford, Bath and leading AI institutes.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{
                scale: 1.03,
                boxShadow: darkMode
                  ? "0 0 20px rgba(37,99,235,0.4)"
                  : "0 0 20px rgba(37,99,235,0.2)",
              }}
              className={`p-6 rounded-2xl transition-shadow duration-300 ${
                darkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              {/* Image */}
              <div className="aspect-square w-full mb-4 overflow-hidden">
                {member.image ? (
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <svg
                      className="w-20 h-20 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Line under image */}
              <div className="w-full h-[1px] bg-[#2563EB] mx-auto mb-3"></div>

              {/* Name */}
              <h3
                className={`font-semibold mb-1 ${
                  darkMode
                    ? "text-[#2563EB] text-[32px]"
                    : "text-blue-600 text-xl sm:text-2xl"
                }`}
              >
                {member.name}
              </h3>

              {/* Title */}
              {member.title && (
                <p
                  className={`font-medium mb-2 ${
                    darkMode
                      ? "text-[20px] text-white"
                      : "text-[16px] text-black"
                  }`}
                >
                  {member.title}
                </p>
              )}

              {/* Bio */}
              {member.bio && (
                <p
                  className={`leading-relaxed ${
                    darkMode
                      ? "text-[13px] text-[#DDDDDD]"
                      : "text-sm text-gray-600"
                  }`}
                >
                  {member.bio}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
