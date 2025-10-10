'use client';

import React from 'react';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300 py-12 px-6 md:px-16 lg:px-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-4">
            <img src="/Group1.png" alt="Recursive Safeguarding Logo" className="w-10 h-10" />
            <div>
              <h2 className="text-white text-lg font-semibold leading-tight">
                RECURSIVE
              </h2>
              <p className="text-sm text-gray-400 -mt-1">SAFEGUARDING</p>
            </div>
          </div>

          {/* Newsletter */}
          <h3 className="text-white font-semibold mb-1">Stay tuned</h3>
          <p className="text-white font-semibold mb-4">
            Subscribe to our newsletter
          </p>

          <form className="flex items-center max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-gray-600 rounded-md px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="ml-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-lg shadow-blue-600/40 transition-all"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-gray-400 mb-4 leading-relaxed">
            We welcome inquiries from investors, researchers, and organizations
            interested in AI safety. Our team will respond to serious inquiries
            within 48 hours.
          </p>
          <h3 className="text-white font-semibold text-lg mb-1">
            Email Us Directly
          </h3>
          <a
            href="mailto:contact@recursive-safeguarding.org"
            className="text-blue-400 hover:text-blue-500 transition-colors"
          >
            contact@recursive-safeguarding.org
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center border-t border-gray-800 mt-12 pt-6 text-sm text-gray-500">
        © 2025 Recursive Safeguarding Ltd. All rights reserved
      </div>
    </footer>
  );
}
