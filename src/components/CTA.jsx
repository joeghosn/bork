import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative py-32 text-center overflow-hidden">
      {/* content */}
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-bork-yellow via-bork-pink to-bork-blue">
            Bark with the Pack
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-lg sm:text-xl opacity-80"
        >
          Get early updates, meme assets, and launch info. <br />
          No spam. Only borks.
        </motion.p>

        {/* buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/"
            className="px-6 py-3 rounded-2xl bg-gradient-to-br from-bork-yellow via-bork-pink to-bork-blue text-bork-ink font-semibold shadow-floof"
          >
            Join Telegram
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://x.com/"
            className="px-6 py-3 rounded-2xl border border-white/20 hover:border-white/40"
          >
            Follow on X
          </a>
        </div>

        <div className="mt-6 text-xs opacity-60">
          This is not financial advice. It&apos;s barely design advice.
        </div>
      </div>
    </section>
  );
}
