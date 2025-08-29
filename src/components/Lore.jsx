import React from "react";
import { motion } from "framer-motion";

export default function Lore() {
  const beats = [
    {
      title: "The Break",
      body: "The chain hiccuped. Order dissolved. Signal slipped out of noise.",
    },
    {
      title: "Glitch → Style",
      body: "Compression scars became texture. Imperfection became the look.",
    },
    {
      title: "Pack Energy",
      body: "Strays synced. Raids formed. Culture outran coordination.",
    },
    {
      title: "Make it More Borked",
      body: "If it’s polished, we scuff it until it feels true.",
    },
  ];

  return (
    <section id="lore" className="relative py-24 overflow-hidden">
      {/* subtle grid only */}
      <div
        className="absolute inset-0 bg-grid opacity-40 dark:opacity-[0.08]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl sm:text-5xl font-black"
        >
          The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-bork-yellow via-bork-pink to-bork-blue">
            Lore
          </span>{" "}
          of BORKED
        </motion.h2>

        {/* Flow grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 md:auto-rows-auto gap-y-8">
          {/* Row 1 */}
          <div className="md:col-span-5 md:col-start-1">
            <Card index={0} title={beats[0].title} body={beats[0].body} />
          </div>

          {/* Connector 1 */}
          <div className="hidden md:block md:col-span-12">
            <FlowConnector dir="ltr" />
          </div>

          {/* Row 2 */}
          <div className="md:col-span-5 md:col-start-8">
            <Card index={1} title={beats[1].title} body={beats[1].body} />
          </div>

          {/* Connector 2 */}
          <div className="hidden md:block md:col-span-12">
            <FlowConnector dir="rtl" />
          </div>

          {/* Row 3 */}
          <div className="md:col-span-5 md:col-start-1">
            <Card index={2} title={beats[2].title} body={beats[2].body} />
          </div>

          {/* Connector 3 */}
          <div className="hidden md:block md:col-span-12">
            <FlowConnector dir="ltr" />
          </div>

          {/* Row 4 */}
          <div className="md:col-span-5 md:col-start-8">
            <Card index={3} title={beats[3].title} body={beats[3].body} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* === Simple Card (no tilt / no expand / no draggable) === */
function Card({ title, body, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="rounded-3xl border border-white/20 bg-white/80 dark:bg-white/10 backdrop-blur-md shadow-floof p-6 md:p-7"
    >
      <h3 className="text-xl sm:text-2xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-bork-yellow via-bork-pink to-bork-blue">
          {title}
        </span>
      </h3>
      <p className="mt-2 opacity-80">{body}</p>
    </motion.article>
  );
}

/* === Flowing Connector (continuous, solid, not dotted) === */
function FlowConnector({ dir }) {
  const d =
    dir === "ltr"
      ? "M 8 40 C 280 40 440 40 720 40 C 900 40 980 60 1110 120"
      : "M 1102 40 C 820 40 660 40 380 40 C 200 40 120 60 8 120";

  return (
    <svg
      className="w-full h-24"
      viewBox="0 0 1110 160"
      preserveAspectRatio="none"
      aria-hidden
    >
      {/* Soft glow underlay */}
      <path
        d={d}
        stroke="url(#g-soft)"
        strokeWidth="14"
        fill="none"
        opacity=".18"
        filter="url(#blur)"
      />
      {/* Main flowing stroke (solid) */}
      <path
        d={d}
        stroke="url(#g-flow)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      <defs>
        {/* Blur filter for glow */}
        <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>

        {/* Static soft gradient for the glow path */}
        <linearGradient
          id="g-soft"
          x1="0"
          y1="0"
          x2="1110"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFE083" />
          <stop offset="50%" stopColor="#FF99B4" />
          <stop offset="100%" stopColor="#9DDCFF" />
        </linearGradient>

        {/* Animated gradient for the main stroke */}
        {/* We animate x1/x2 back and forth to create a flowing highlight */}
        <linearGradient id="g-flow" x1="0%" y1="0%" x2="100%" y2="0%">
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
    </svg>
  );
}
