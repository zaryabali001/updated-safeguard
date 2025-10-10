"use client";

import React from "react";
import Image from "next/image";
// import React from "react";

function HowItWorks() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-evenly px-6 md:px-16 py-20 bg-white">
      {/* Left Text Section */}
      <div className="max-w-xl">
        <h4 className="text-blue-600 font-semibold text-lg mb-2">
          How It Works
        </h4>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
           <span className="text-black">How Recursive</span>{" "}
          <span className="text-blue-600">Safeguarding Keeps</span> <br />
          <span className="text-blue-600">AI</span>{" "}
          <span className="text-black">on Course</span>
        </h1>
        <p className="text-gray-500 text-xl w-110">
          Turning complex AI behavior into clear steerable world models.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="mt-10 md:mt-0 md:ml-10 object-fit">
        <Image
          src="/handshake.png" // Replace with your actual image path in /public
          alt="Recursive Safeguarding"
          width={500}
          height={300}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default HowItWorks;
