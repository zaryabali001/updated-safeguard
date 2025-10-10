"use client";

import React from "react";
import Image from "next/image";

export default function AgentPlanComponent() {
  return (
    <div
      className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 md:p-10 
      bg-white dark:bg-gray-900 min-h-screen items-center justify-center 
      transition-colors duration-300"
    >
      {/* Observe the Agent Section */}
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm 
        w-full max-w-md md:max-w-lg border border-gray-200 dark:border-gray-700 
        transition-all duration-300"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white 
        transition-colors duration-300">
          Observe the Agent
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base mb-6 leading-relaxed 
        transition-colors duration-300">
          We monitor the AI's outputs in real time, capturing its actions, code,
          or decisions as it works.
        </p>

        {/* Circular Diagram */}
        <div className="relative w-56 sm:w-72 h-64 sm:h-96 mx-auto mt-6">
          {/* Outer Circle */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="text-gray-300 dark:text-gray-600 transition-colors duration-300"
            />
          </svg>

          {/* Inner Circle */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="text-blue-400 dark:text-blue-300 transition-colors duration-300"
            />
          </svg>

          {/* Center Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/group.png" // Consider adding a dark mode variant, e.g., "/group-dark.png"
              alt="Agent"
              width={60}
              height={60}
              className="transition-opacity duration-300"
            />
          </div>

          {/* Labels */}
          {[
            { position: "left-0 top-1/2 -translate-y-1/2", label: "Tool" },
            { position: "top-3 left-1/2 -translate-x-1/2", label: "Code", vertical: true },
            { position: "right-0 top-1/2 -translate-y-1/2", label: "Apps" },
            { position: "bottom-3 left-1/2 -translate-x-1/2", label: "Chat", vertical: true },
          ].map(({ position, label, vertical }) => (
            <div key={label} className={`absolute ${position}`}>
              <div className={`flex ${vertical ? "flex-col items-center gap-1" : "items-center gap-2"}`}>
                {vertical && label !== "Chat" && (
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full 
                  transition-colors duration-300"></div>
                )}
                <div
                  className="bg-blue-500 dark:bg-blue-400 text-white px-3 py-1 rounded-md 
                  text-xs sm:text-sm shadow transition-colors duration-300"
                >
                  {label}
                </div>
                {!vertical && (
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full 
                  transition-colors duration-300"></div>
                )}
                {vertical && label === "Chat" && (
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full 
                  transition-colors duration-300"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infer the Plan Section */}
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm 
        w-full max-w-md md:max-w-lg border border-gray-200 dark:border-gray-700 
        transition-all duration-300"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white 
        transition-colors duration-300">
          Infer the Plan
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base mb-6 leading-relaxed 
        transition-colors duration-300">
          Our system uses GFlowNets to convert agent behavior into structured,
          verifiable plans in ML3.
        </p>

        {/* Flow Diagram */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div
              className="bg-blue-500 dark:bg-blue-400 text-white px-5 py-2 rounded-md 
              text-xs sm:text-sm shadow transition-colors duration-300"
            >
              AI Agent Outputs
            </div>
            <svg width="70" height="2" className="flex-shrink-0">
              <line
                x1="0"
                y1="1"
                x2="70"
                y2="1"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5 5"
                className="text-gray-400 dark:text-gray-600 transition-colors duration-300"
              />
            </svg>
          </div>

          <div
            className="border-2 border-dashed border-gray-300 dark:border-gray-600 
            rounded-lg px-3 py-2 text-center text-xs sm:text-sm font-medium 
            text-gray-900 dark:text-gray-100 transition-colors duration-300"
          >
            GFlowNet Inference Engine
          </div>

          <div className="flex justify-center">
            <svg width="2" height="25">
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="25"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5 5"
                className="text-gray-400 dark:text-gray-600 transition-colors duration-300"
              />
            </svg>
          </div>

          <div
            className="text-center text-sm font-medium text-gray-900 dark:text-gray-100 
            border-b border-gray-300 dark:border-gray-600 pb-2 transition-colors duration-300"
          >
            ML3 Program Generator
          </div>

          <div className="flex justify-center flex-wrap gap-2 pt-2">
            {["Task", "Decision Rules", "Expected Outcomes"].map((label) => (
              <div
                key={label}
                className="border border-gray-300 dark:border-gray-600 
                bg-gray-50 dark:bg-gray-700 px-3 py-1.5 rounded text-xs 
                font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300"
              >
                {label}
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-3">
            <div
              className="flex items-center gap-2 border border-blue-400 dark:border-blue-300 
              bg-white dark:bg-gray-900 px-4 py-2 rounded-md shadow-sm 
              transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 text-blue-500 dark:text-blue-300 transition-colors duration-300"
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
                className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 
                transition-colors duration-300"
              >
                Structured Plan
              </span>
            </div>
          </div>

          <div
            className="text-center text-xs font-medium mt-3 text-gray-900 dark:text-gray-100 
            border-b border-gray-300 dark:border-gray-600 pb-2 transition-colors duration-300"
          >
            Human Review Interface
          </div>

          <div className="flex justify-center flex-wrap gap-3 pt-3">
            {["Plan A", "Plan B", "Plan C"].map((plan, i) => (
              <label key={plan} className="flex items-center gap-2 cursor-pointer">
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center 
                  ${i === 0 ? "bg-blue-500 dark:bg-blue-400" : 
                  "border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"} 
                  transition-colors duration-300`}
                >
                  {i === 0 && (
                    <svg
                      className="w-3.5 h-3.5 text-white"
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
                  className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 
                  transition-colors duration-300"
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