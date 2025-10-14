'use client';

import React, { useState } from 'react';
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    setIsProcessing(true);
    setMessage('⏳ Processing...');

    setTimeout(() => {
      // Open default mail client
      window.location.href = `mailto:contact@recursive-safeguarding.org?subject=Newsletter Subscription&body=Hello,%0D%0A%0D%0AI would like to subscribe to the newsletter.%0D%0AEmail: ${email}`;

      // Show success message
      setMessage('🎉 Thank you for subscribing! We’ll keep you updated.');
      setEmail('');
      setIsProcessing(false);
    }, 2000); // 2-second delay
  };

  return (
    <footer id='contact' className="bg-[#111111] text-gray-300 py-12 px-6 md:px-16 lg:px-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-36 sm:w-40 h-10 sm:h-12 relative">
              <Image
                src="/white.svg"
                alt="Logo"
                fill
                className="object-contain transition-all duration-300"
                priority
              />
            </div>
          </div>

          <h3 className="text-white font-semibold pt-6">Stay tuned</h3>
          <p className="text-white font-semibold">Subscribe to our newsletter</p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center max-w-sm mt-5 space-y-3 sm:space-y-0 sm:space-x-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={isProcessing}
              className="flex-1 bg-transparent border border-gray-600 rounded-md px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={isProcessing}
              className={`px-5 py-2 rounded-md shadow-lg transition-all w-full sm:w-auto cursor-pointer ${
                isProcessing
                  ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/40'
              }`}
            >
              {isProcessing ? 'Processing...' : 'Submit'}
            </button>
          </form>

          {/* Message */}
          {message && (
            <p className="text-blue-400 mt-3 font-medium">{message}</p>
          )}
        </div>

        {/* Right Section */}
        <div>
          <p className="text-gray-400 w-94">
            We welcome inquiries from investors, researchers, and organizations
            interested in AI safety. Our team will respond to serious inquiries
            within 48 hours.
          </p>
          <h3 className="text-white font-semibold text-lg pt-10">
            Email Us Directly
          </h3>
          <a
            href="mailto:contact@recursive-safeguarding.org"
            className="text-blue-400 hover:text-blue-500 transition-colors pt-6 block break-all"
          >
            contact@recursive-safeguarding.org
          </a>
        </div>
      </div>

      <div className="text-center border-t border-gray-800 mt-12 pt-6 text-sm text-gray-500">
        © 2025 Recursive Safeguarding Ltd. All rights reserved
      </div>
    </footer>
  );
}
