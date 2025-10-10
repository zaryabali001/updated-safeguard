// export default function MissionSection() {
//   return (
//     <section
//       className="relative text-white py-24 sm:py-20 md:py-16 px-6 sm:px-10 md:px-20 lg:px-32 
//       bg-center bg-cover bg-no-repeat overflow-hidden flex items-center justify-center  md:pt-16"
//       style={{ backgroundImage: "url('/missionbackground.jpg')" }}
//     >
//       {/* Overlay for readability */}
//       <div className="absolute inset-0 bg-black/75"></div>

//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
//         {/* Left Side */}
//         <div className="flex flex-col justify-center text-center md:text-left">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
//             Our Mission
//           </h2>
//           <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
//             As AI agents become more autonomous, they risk drifting from human goals.
//             We’re building systems that align foundation models and AI agents with
//             human intent through steerable, verifiable world models. Our mission:
//             ensure safe, human-guided AI deployment for the real world.
//           </p>
//         </div>

//         {/* Right Side */}
//         <div className="space-y-6 md:space-y-8 text-center md:text-left">
//           <div className="border-t-[0.5px] border-blue-700 pt-3 md:pt-4">
//             <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Alignment</h3>
//             <p className="text-gray-300 mt-1 md:mt-2 text-xs sm:text-sm md:text-base">
//               Ensuring AI systems stay in sync with human intent and ethics
//             </p>
//           </div>

//           <div className="border-t-[0.5px] border-blue-700 pt-3 md:pt-4">
//             <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Verification</h3>
//             <p className="text-gray-300 mt-1 md:mt-2 text-xs sm:text-sm md:text-base">
//               Building transparent models that can be tested and trusted
//             </p>
//           </div>

//           <div className="border-t-[0.5px] border-blue-700 pt-3 md:pt-4">
//             <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Trust</h3>
//             <p className="text-gray-300 mt-1 md:mt-2 text-xs sm:text-sm md:text-base">
//               Creating AI agents that act reliably in real-world applications
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// export default function MissionSection() {
//   return (
//     <section className="relative text-white py-24 md:py-28 overflow-hidden">
//       {/* 🔹 Top gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#041b3d] via-[#0b1a2e] to-[#000000]" />

//       {/* 🔹 Orange network image at the bottom */}
//       <img
//         src="/missionbackground.jpg"
//         alt="Mission Background"
//         className="absolute bottom-0 left-0 w-full h-56 object-cover opacity-80"
//       />

//       {/* 🔹 Content Container */}
//       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16 lg:px-24 items-center">
//         {/* Left Section */}
//         <div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//             Our Mission
//           </h2>
//           <p className="text-gray-300 leading-relaxed text-base md:text-lg">
//             As AI agents become more autonomous, they risk drifting from human
//             goals. We’re building systems that align foundation models and AI
//             agents with human intent through steerable, verifiable world models.
//             Our mission: ensure safe, human-guided AI deployment for the real
//             world.
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="space-y-8">
//           <div className="border-t border-blue-500/70 pt-3">
//             <h3 className="text-2xl font-semibold">Alignment</h3>
//             <p className="text-gray-300 mt-1">
//               Ensuring AI systems stay in sync with human intent and ethics
//             </p>
//           </div>

//           <div className="border-t border-blue-500/70 pt-3">
//             <h3 className="text-2xl font-semibold">Verification</h3>
//             <p className="text-gray-300 mt-1">
//               Building transparent models that can be tested and trusted
//             </p>
//           </div>

//           <div className="border-t border-blue-500/70 pt-3">
//             <h3 className="text-2xl font-semibold">Trust</h3>
//             <p className="text-gray-300 mt-1">
//               Creating AI agents that act reliably in real-world applications
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function MissionSection() {
  return (
    <section
      className="relative text-white py-24 md:py-28 overflow-hidden bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/missionbackground.jpg')",
       
         backgroundPosition: "left 1%", //
      }}
    >
      {/* 🔹 Overlay for text readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* 🔹 Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16 lg:px-24 items-center">
        {/* Left Section */}
        <div>
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
          <div className="border-t border-blue-500/70 pt-3">
            <h3 className="text-2xl font-semibold">Alignment</h3>
            <p className="text-gray-300 mt-1">
              Ensuring AI systems stay in sync with human intent and ethics
            </p>
          </div>

          <div className="border-t border-blue-500/70 pt-3">
            <h3 className="text-2xl font-semibold">Verification</h3>
            <p className="text-gray-300 mt-1">
              Building transparent models that can be tested and trusted
            </p>
          </div>

          <div className="border-t border-blue-500/70 pt-3">
            <h3 className="text-2xl font-semibold">Trust</h3>
            <p className="text-gray-300 mt-1">
              Creating AI agents that act reliably in real-world applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
