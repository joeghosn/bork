import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "How do I join the BORK fair launch?",
      a: "Wait for the contract address to drop on socials. Then open your wallet, fund it with KAS, and swap KAS → BORK on Moonbound.",
    },
    // {
    //   q: "Is there a presale or whitelist?",
    //   a: "No. Fair launch on a DEX. Art first, vibes second.",
    // },
    {
      q: "What chain is this on?",
      a: "Kaspa",
    },
    {
      q: "Why $BORK?",
      a: "Because it's the most nonchalant dog.",
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <section id="faq" className="relative pt-24 pb-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* card shell (match CTA) */}
        <div className="card p-8 md:p-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl sm:text-4xl font-bold"
          >
            Frequently{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-bork-yellow via-bork-pink to-bork-blue">
              Asked
            </span>{" "}
            Questions
          </motion.h2>

          {/* list */}
          <div className="mt-8 md:mt-10 space-y-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/20 bg-white/80 dark:bg-white/10 backdrop-blur-md"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0 opacity-80">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
