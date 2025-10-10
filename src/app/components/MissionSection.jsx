export default function MissionSection() {
  return (
    <section
      className="relative text-white py-24 sm:py-20 md:py-16 px-6 sm:px-10 md:px-20 lg:px-32 
      bg-center bg-cover bg-no-repeat overflow-hidden flex items-center justify-center mt-48 md:pt-16"
      style={{ backgroundImage: "url('/missionbackground.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
        {/* Left Side */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            As AI agents become more autonomous, they risk drifting from human goals.
            We’re building systems that align foundation models and AI agents with
            human intent through steerable, verifiable world models. Our mission:
            ensure safe, human-guided AI deployment for the real world.
          </p>
        </div>

        {/* Right Side */}
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          <div className="border-t-[0.5px] border-blue-700 pt-3 md:pt-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Alignment</h3>
            <p className="text-gray-300 mt-1 md:mt-2 text-xs sm:text-sm md:text-base">
              Ensuring AI systems stay in sync with human intent and ethics
            </p>
          </div>

          <div className="border-t-[0.5px] border-blue-700 pt-3 md:pt-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Verification</h3>
            <p className="text-gray-300 mt-1 md:mt-2 text-xs sm:text-sm md:text-base">
              Building transparent models that can be tested and trusted
            </p>
          </div>

          <div className="border-t-[0.5px] border-blue-700 pt-3 md:pt-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Trust</h3>
            <p className="text-gray-300 mt-1 md:mt-2 text-xs sm:text-sm md:text-base">
              Creating AI agents that act reliably in real-world applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
