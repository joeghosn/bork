import React from "react";
import dog from "../assets/borked.jpg";

export default function Footer() {
  return (
    <footer className="relative mt-24 pt-16 pb-10 overflow-hidden">
      {/* subtle grid */}
      <div
        className="absolute inset-0 bg-grid opacity-40 dark:opacity-[0.08]"
        aria-hidden
      />

      {/* flowing gradient divider */}
      <div className="relative">
        <FlowDivider />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-8">
          {/* brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl overflow-hidden shadow-floof">
              <img
                src={dog}
                alt="Borked logo"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-display font-bold tracking-wide text-xl">
              Borked
            </span>
          </a>

          {/* quick links */}
          <nav className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href="#lore" className="opacity-80 hover:opacity-100">
              Lore
            </a>
            <a href="#how" className="opacity-80 hover:opacity-100">
              How to Join
            </a>
            <a href="#faq" className="opacity-80 hover:opacity-100">
              FAQ
            </a>
            <a href="#cta" className="opacity-80 hover:opacity-100">
              Get Started
            </a>
          </nav>
        </div>

        {/* bottom row */}
        <div className="mt-6 border-t border-white/15 pt-4 flex items-center justify-center text-xs opacity-70">
          © {new Date().getFullYear()} Bork. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* Flowing gradient divider (continuous, solid) */
function FlowDivider() {
  return (
    <svg
      className="w-full h-10"
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <filter id="fd-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <linearGradient
          id="fd-soft"
          x1="0"
          y1="0"
          x2="1200"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFE083" />
          <stop offset="50%" stopColor="#FF99B4" />
          <stop offset="100%" stopColor="#9DDCFF" />
        </linearGradient>
        <linearGradient id="fd-flow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFE083" />
          <stop offset="50%" stopColor="#FF99B4" />
          <stop offset="100%" stopColor="#9DDCFF" />
          <animate
            attributeName="x1"
            values="0%;100%;0%"
            dur="3.2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="100%;200%;100%"
            dur="3.2s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>

      <path
        d="M 0 40 C 200 40 350 40 600 40 C 850 40 1000 40 1200 40"
        stroke="url(#fd-soft)"
        strokeWidth="12"
        fill="none"
        opacity=".18"
        filter="url(#fd-blur)"
      />
      <path
        d="M 0 40 C 200 40 350 40 600 40 C 850 40 1000 40 1200 40"
        stroke="url(#fd-flow)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
