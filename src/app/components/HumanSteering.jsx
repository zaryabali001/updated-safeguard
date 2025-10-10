import React from 'react';

export default function HumanSteering() {
  return (
    <div className="flex items-center justify-center pt-10 pb-10 bg-gray-50 ">
      <div className="bg-white rounded-3xl border-2 border-gray-300 p-12 w-full max-w-5xl">
        <div className="flex items-start justify-between gap-16">
          {/* Left Side - Text Content */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Human Steering</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              The system presents multiple interpretable. Humans can compare, choose, or refine the one that best matches their real intent keeping control at every step.
            </p>
          </div>

          {/* Right Side - Options and Flow */}
          <div className="flex-1 flex gap-4">
            {/* Options Column */}
            <div className="flex flex-col gap-4 flex-1">
              {/* Best Match - Selected */}
              <div className="border-2 border-dashed border-blue-400 rounded-lg bg-blue-50 p-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">Best Match</span>
                </div>
              </div>

              {/* Too Complex - Unselected */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg bg-white p-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-400 bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-400 font-medium">Too Complex</span>
                </div>
              </div>

              {/* Not Relevant - Unselected */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg bg-white p-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-400 bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-400 font-medium">Not Relevant</span>
                </div>
              </div>
            </div>

            {/* Human Adjustment Flow */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 p-6 w-55 flex flex-col items-center justify-between">
              {/* Icon */}
              <div className="mb-4">
                <svg className="w-16 h-16 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>

              {/* Text */}
              <div className="text-center mb-4">
                <p className="text-gray-500 text-xs leading-relaxed">
                  Human Adjusts Sliders<br />Refines Plan
                </p>
              </div>

              {/* Final Button */}
              <div className="bg-gray-200 border border-gray-300 rounded-full px-4 py-1.5 text-center w-full">
                <span className="text-gray-700 text-xs font-medium">Final Approved AI Plan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}