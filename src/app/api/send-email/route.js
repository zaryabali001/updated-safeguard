'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Replace with your Formspree FORM_ID, e.g. "f/abcd1234"
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/FORM_ID';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('❌ Please enter your email.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'New Newsletter Subscription' }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('🎉 Thank you for subscribing! Check your inbox (or ours — we received it).');
        setEmail('');
      } else {
        // Formspree returns validation errors in `errors`
        const errMsg = (data && data.error) || (data && data.errors && data.errors.map(e=>e.message).join(', ')) || 'Failed to send.';
        setMessage(`⚠️ ${errMsg}`);
      }
    } catch (err) {
      console.error(err);
      setMessage('⚠️ Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="bg-[#111111] text-gray-300 py-12 px-6 md:px-16 lg:px-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-36 sm:w-40 h-10 sm:h-12 relative">
              <Image src="/white.svg" alt="Logo" fill className="object-contain" priority />
            </div>
          </div>

          <h3 className="text-white font-semibold pt-6">Stay tuned</h3>
          <p className="text-white font-semibold">Subscribe to our newsletter</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center max-w-sm mt-5 space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-gray-600 rounded-md px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className={`px-5 py-2 rounded-md shadow-lg transition-all w-full sm:w-auto ${
                loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/40'
              }`}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>

          {message && <p className="mt-3 font-medium text-green-400">{message}</p>}
        </div>

        <div>
          <p className="text-gray-400 w-94">
            We welcome inquiries from investors, researchers, and organizations interested in AI safety. Our team will respond within 48 hours.
          </p>
          <h3 className="text-white font-semibold text-lg pt-10">Email Us Directly</h3>
          <a href="mailto:contact@recursive-safeguarding.org" className="text-blue-400 hover:text-blue-500 transition-colors pt-6 block break-all">
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
