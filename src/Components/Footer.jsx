"use client";
import React from "react";
import { FaApple, FaGooglePlay, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* ---------- Download Section ---------- */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-8 border-b border-gray-700">
        {/* Left Text Section */}
        <div className="text-center lg:text-left max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold flex items-center justify-center font-figtree lg:justify-start gap-2 mb-3">
            Download our mobile app <FaBolt className="text-yellow-400 text-lg" />
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-figtree">
            Get exclusive access to car rentals with our mobile app. Download now and
            experience convenience on the go.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl hover:scale-105 transition-transform">
            <FaApple className="text-2xl" />
            <div className="text-left leading-tight">
              <span className="text-xs font-figtree">Download on the</span>
              <p className="text-sm font-semibold font-figtree">App Store</p>
            </div>
          </button>

          <button className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl hover:scale-105 transition-transform">
            <FaGooglePlay className="text-2xl" />
            <div className="text-left leading-tight">
              <span className="text-xs font-figtree">Get it on</span>
              <p className="text-sm font-semibold font-figtree">Google Play</p>
            </div>
          </button>
        </div>
      </div>

      {/* ---------- Main Footer ---------- */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <h2 className="text-xl font-semibold tracking-wide font-figtree">LUXEDRIVE</h2>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 font-figtree">
          <li className="hover:text-white transition-colors cursor-pointer">Rent</li>
          <li className="hover:text-white transition-colors cursor-pointer">Share</li>
          <li className="hover:text-white transition-colors cursor-pointer">About us</li>
          <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-400">
          <FaInstagram className="hover:text-white transition-colors cursor-pointer" />
          <FaTwitter className="hover:text-white transition-colors cursor-pointer" />
          <FaYoutube className="hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
