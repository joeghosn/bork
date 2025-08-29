import React from "react";
import { motion } from "framer-motion";
import { PawPrint, Send, Rocket, Trophy } from "lucide-react";

export default function HowToJoin() {
  const steps = [
    {
      icon: <Send className="h-8 w-8" />,
      title: "Join the Pack Chat",
      body: "Hop into Telegram where chaos starts & memes never stop.",
      rot: -2,
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Grab Some $BORKED",
      body: "Snag tokens on the DEX — no whitelist, no presale, just vibes.",
      rot: 3,
    },
    {
      icon: <PawPrint className="h-8 w-8" />,
      title: "Make Some Noise",
      body: "Drop memes, raid posts, howl loud. The pack notices the loudest bark.",
      rot: 1,
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Earn & Flex",
      body: "Top raiders + meme lords get rewarded with airdrops & glory.",
      rot: -1,
    },
  ];

  return (
    <section
      id="join"
      className="relative py-24 bg-bork-ink/5 dark:bg-bork-ink/90"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-5xl font-black tracking-tight mb-16"
        >
          How to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-bork-yellow via-bork-pink to-bork-blue">
            Join
          </span>
        </motion.h2>

        {/* Collage grid */}
        <div className="grid sm:grid-cols-2 gap-10 justify-items-center">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, rotate: s.rot * 1.5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: s.rot }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                type: "spring",
                stiffness: 160,
                damping: 14,
              }}
              className="relative w-[20rem] md:w-[22rem] lg:w-[24rem] 
                         bg-white/80 dark:bg-white/10 backdrop-blur-md 
                         border border-white/20 rounded-2xl shadow-floof p-6 text-center"
              style={{ rotate: `${s.rot}deg` }}
            >
              {/* Tape accents */}

              {/* Icon */}
              <div className="flex justify-center mb-4 text-bork-ink dark:text-bork-yellow">
                {s.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{s.title}</h3>
              <p className="opacity-80">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
