import React, { useState } from "react";
import { useTheme } from "../theme";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 mt-3 card">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-bork-yellow to-bork-pink grid place-items-center shadow-floof">
              <span className="text-xl">🐶</span>
            </div>
            <span className="font-display font-bold tracking-wide text-xl group-hover:animate-wiggle">
              Borked
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-6">
            <a href="#lore" className="text-sm opacity-80 hover:opacity-100">
              Lore
            </a>
            <a href="#how" className="text-sm opacity-80 hover:opacity-100">
              How to Join
            </a>

            <a href="#faq" className="text-sm opacity-80 hover:opacity-100">
              FAQ
            </a>
            <button
              type="button"
              onClick={toggle}
              className="h-10 w-10 rounded-xl border border-white/15 hover:border-white/30 grid place-items-center"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="sm:hidden flex items-center gap-3">
            <button
              type="button"
              onClick={toggle}
              className="h-10 w-10 rounded-xl border border-white/15 hover:border-white/30 grid place-items-center"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="h-10 w-10 rounded-xl border border-white/15 hover:border-white/30 grid place-items-center"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown (no closing animation) */}
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden mt-4 flex flex-col gap-4 pb-4"
          >
            <a
              href="#lore"
              onClick={() => setOpen(false)}
              className="text-sm opacity-80 hover:opacity-100"
            >
              Lore
            </a>
            <a
              href="#how"
              onClick={() => setOpen(false)}
              className="text-sm opacity-80 hover:opacity-100"
            >
              How to Join
            </a>
            <a
              href="#faq"
              onClick={() => setOpen(false)}
              className="text-sm opacity-80 hover:opacity-100"
            >
              FAQ
            </a>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
