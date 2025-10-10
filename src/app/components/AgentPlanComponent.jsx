'use client';

import React from 'react';
import Image from "next/image";

export default function AgentPlanComponent() {
  return (
    <div className="flex gap-4 p-6 bg-white min-h-screen items-start justify-center">
      {/* Observe the Agent Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm w-[450px] min-h-[450]  border border-gray-200">
        <h2 className="text-3xl font-bold mb-3 text-gray-900">
          Observe the Agent
        </h2>
        <p className="text-gray-600 text-base mb-8 leading-relaxed">
          We monitor the AI's outputs in real time capturing its actions, code
          or decisions as it works.
        </p>

        {/* Circular Diagram */}
        <div className="relative w-96 h-96 mx-auto mt-4">
          {/* Outer dashed circle - gray */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="#d1d5db"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </svg>

          {/* Inner dashed circle - blue */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </svg>

          {/* Center icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src="./group.png" alt="" />
          </div>

          {/* Tool - Left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium text-sm shadow">
                Tool
              </div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          {/* Code - Top */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium text-sm shadow">
                Code
              </div>
            </div>
          </div>

          {/* Apps - Right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium text-sm shadow">
                Apps
              </div>
            </div>
          </div>

          {/* Chat - Bottom */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium text-sm shadow">
                Chat
              </div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Infer the Plan Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm w-[550px] min-h-[450]   border border-gray-200">
        <h2 className="text-3xl font-bold mb-3 text-gray-900">
          Infer the Plan
        </h2>
        <p className="text-gray-600 text-base mb-8 leading-relaxed">
          Our system uses GFlowNets to convert agent behavior into structured,
          verifiable plans in ML3.
        </p>

        {/* Flow Diagram */}
        <div className="mt-8 space-y-3">
          {/* AI Agent Outputs with arrow */}
          <div className="flex items-center justify-center gap-3">
            <div className="bg-blue-500 text-white px-6 py-2.5 rounded-md font-medium text-sm shadow">
              AI Agent Outputs
            </div>
            <svg width="100" height="2" className="flex-shrink-0">
              <line
                x1="0"
                y1="1"
                x2="100"
                y2="1"
                stroke="#9ca3af"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
            </svg>
          </div>

          {/* GFlowNet Inference Engine */}
          {/* <svg
            className="h-24 w-[2px] flex-shrink-0 ml-93 "
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="60"
              stroke="#9ca3af"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
          </svg> */}

          <div className="border-2 border-dashed border-gray-300 rounded-lg px-4 py-3 w-50 text-center ml-70">
            <div className="text-sm font-medium text-gray-900">
              GFlowNet Inference Engine
            </div>
          </div>

          {/* Vertical dashed line */}
          <div className="flex justify-center">
            <svg width="2" height="30">
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="30"
                stroke="#9ca3af"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
            </svg>
          </div>

          {/* ML3 Program Generator */}
          <div className="text-center text-sm font-medium text-gray-900 pb-3 border-b border-gray-300">
            ML3 Program Generator
          </div>

          {/* Task, Decision Rules, Expected Outcomes */}
          <div className="flex justify-center items-center gap-2 pt-2">
            <div className="border border-gray-300 bg-gray-50 px-3 py-1.5 rounded text-xs font-medium text-gray-700">
              Task
            </div>
            <div className="border border-gray-300 bg-gray-50 px-3 py-1.5 rounded text-xs font-medium text-gray-700">
              Decision Rules
            </div>
            <div className="border border-gray-300 bg-gray-50 px-3 py-1.5 rounded text-xs font-medium text-gray-700">
              Expected Outcomes
            </div>
          </div>

          {/* Vertical dashed line */}
          {/* <div className="flex justify-center py-2">
            <svg width="2" height="30">
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="30"
                stroke="#9ca3af"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
            </svg>
          </div> */}

          {/* Structured Plan */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 bg-white border border-blue-400 px-4 py-2 rounded-md shadow-sm">
              <svg
                className="w-4 h-4 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium mt-1 text-gray-900">
                Structured Plan
              </span>
            </div>
          </div>

          {/* Vertical dashed line */}
          {/* <div className="flex justify-center py-2">
            <svg width="2" height="30">
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="30"
                stroke="#9ca3af"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
            </svg> */}
          </div>

          {/* Human Review Interface */}
          <div className="text-center text-xs font-medium mt-3 text-gray-900 pb-3 border-b border-gray-300">
            Human Review Interface
          </div>

          {/* Plan Selection Checkboxes */}
          <div className="flex justify-center items-center gap-4 pt-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
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
              </div>
              <span className="text-sm font-medium text-gray-900">Plan A</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <div className="w-5 h-5 border-2 border-gray-300 rounded bg-white"></div>
              <span className="text-sm font-medium text-gray-900">Plan B</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <div className="w-5 h-5 border-2 border-gray-300 rounded bg-white"></div>
              <span className="text-sm font-medium text-gray-900">Plan C</span>
            </label>
          </div>
        </div>
      </div>
   
  );
}
