//     // // // export default function Hero() {
//     // // //   return (
//     // // //     <section className="hero-section relative flex flex-col justify-center items-center text-center h-screen transition-colors duration-500 dark:bg-[#0f0f10]">
//     // // //       <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 transition-colors duration-500">
//     // // //         <span className="text-blue-700">Safeguarding AI</span>{" "}
//     // // //         <span className="text-gray-900 dark:text-white">
//     // // //           for the
//     // // //           <br /> Long Horizon.
//     // // //         </span>
//     // // //       </h1>

//     // // //       <p className="max-w-2xl text-gray-600 dark:text-gray-300 text-lg mb-8 transition-colors duration-500">
//     // // //         Recursive Safeguarding Ltd is an Oxford-based AI safety startup,
//     // // //         selected by ARIA for the UK's Safeguarded AI programme.
//     // // //       </p>

//     // // //       <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
//     // // //         Learn More
//     // // //       </button>
//     // // //     </section>
//     // // //   );
//     // // // }


//     // // export default function Hero() {
//     // //   return (
//     // //     <section className="hero-section relative flex flex-col justify-center items-center text-center h-screen transition-colors duration-500 dark:bg-[#0f0f10]">
//     // //       <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 transition-colors duration-500">
//     // //         <span className="text-blue-700">Safeguarding AI</span>{" "}
//     // //         <span className="text-gray-900 dark:text-white">
//     // //           for the
//     // //           <br /> Long Horizon.
//     // //         </span>
//     // //       </h1>

//     // //       <p className="max-w-2xl text-gray-700 dark:text-white text-lg mb-8 transition-colors duration-500">
//     // //         Recursive Safeguarding Ltd is an Oxford-based AI safety startup,
//     // //         selected by ARIA for the UK's Safeguarded AI programme.
//     // //       </p>

//     // //       <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
//     // //         Learn More
//     // //       </button>
//     // //     </section>
//     // //   );
//     // // }



//     // export default function Hero() {
//     //   return (
//     //     <section className="hero-section relative flex flex-col justify-center items-center text-center h-screen transition-colors duration-500 dark:bg-[#0f0f10]">
//     //       <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 transition-colors duration-500">
//     //         <span className="text-blue-700">Safeguarding AI</span>{" "}
//     //         <span className="text-gray-900 dark:text-white">
//     //           for the
//     //           <br /> Long Horizon.
//     //         </span>
//     //       </h1>

//     //       <p className="max-w-2xl text-gray-700 dark:text-white text-lg mb-8 transition-colors duration-500">
//     //         Recursive Safeguarding Ltd is an Oxford-based AI safety startup,
//     //         selected by ARIA for the UK's Safeguarded AI programme.
//     //       </p>

//     //       <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
//     //         Learn More
//     //       </button>
//     //     </section>
//     //   );
//     // }

//     export default function Hero() {
//       return (
//         <section className="hero-section relative flex flex-col justify-center items-center text-center h-screen transition-colors duration-500">
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 transition-colors duration-500">
//             <span className="text-blue-700">Safeguarding AI</span>{" "}
//             <span className="text-gray-900 dark:text-white">
//               for the
//               <br /> Long Horizon.
//             </span>
//           </h1>

//           <p className="max-w-2xl text-gray-700 dark:text-gray-200 text-lg mb-8 transition-colors duration-500">
//             Recursive Safeguarding Ltd is an Oxford-based AI safety startup,
//             selected by ARIA for the UK's Safeguarded AI programme.
//           </p>

//           <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
//             Learn More
//           </button>
//         </section>
//       );
//     }
// // 

"use client";

import { useEffect, useState } from "react";

export default function Hero() {
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
    <section
      className={`flex flex-col justify-center items-center text-center h-screen px-4 transition-colors duration-500 
        pt-72 sm:pt-24  /* ✅ Added top padding for mobile */
        ${darkMode ? "bg-[#0f0f10] text-white" : "bg-white text-black"}`}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 transition-colors duration-500">
        <span className="text-blue-700 dark:text-blue-400">
          Safeguarding AI <span className={` ${darkMode ? " text-white" : " text-black"}`}> for the<br className="hidden sm:block" />  Long Horizon.</span> 
        </span>
      </h1>

      <p className={`max-w-2xl text-gray-500 dark:text-gray-500 text-base sm:text-lg mb-8 transition-colors duration-500  ${darkMode ? " text-white" : " text-black"}`}>
        Recursive Safeguarding Ltd is an Oxford-based AI safety startup,
        selected by ARIA for the UK's Safeguarded AI programme.
      </p>

      <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full transition">
        Learn More
      </button>
    </section>
  );
}
