import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import dog from "../assets/borked.jpg";

export default function Hero() {
  const ref = useRef(null);

  // mouse tilt / parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 12 });
  const sy = useSpring(my, { stiffness: 60, damping: 12 });
  const rotY = useTransform(sx, [-1, 1], [-10, 10]);
  const rotX = useTransform(sy, [-1, 1], [10, -10]);
  const parallaxX = useTransform(sx, (v) => v * 6);
  const parallaxY = useTransform(sy, (v) => v * 6);

  function onMove(e) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const py = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    mx.set(Math.max(-1, Math.min(1, px)));
    my.set(Math.max(-1, Math.min(1, py)));
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative pt-36 pb-24 overflow-hidden"
    >
      {/* background blobs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[46rem] w-[46rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,153,180,.35), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT — single headline + copy */}
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95]"
              style={{
                // subtle chroma via text-shadows (no duplicate layers => no overflow)
                textShadow:
                  "1px 1px 0 rgba(255,153,180,0.25), -1px -1px 0 rgba(157,220,255,0.25)",
              }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-bork-yellow via-bork-pink to-bork-blue text-glow">
                The chain is BORKED
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="relative z-10 mt-6 text-lg md:text-xl opacity-80 max-w-prose"
            >
              A glorious low-res dog that survived 16 screenshots and still went
              to the moon. Art first, vibes second, utility optional. If it
              looks too polished—we bork it.
            </motion.p>

            <ButtonsWithBones />
            <div className="mt-4 text-xs opacity-60">
              No promises. Only borks.
            </div>
          </div>

          {/* RIGHT — parallax polaroid dog (no small tags) */}
          <motion.div
            className="relative mx-auto w-full max-w-md"
            style={{ rotateX: rotX, rotateY: rotY }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 24, rotate: -3 }}
              whileInView={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 110, damping: 16 }}
              className="card p-3 md:p-4 relative"
              style={{ x: parallaxX, y: parallaxY }}
            >
              {/* tape corners */}
              <Tape pos="left" />
              <Tape pos="right" />

              <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.06]">
                <img
                  src={dog}
                  alt="Borked dog"
                  className="w-full h-auto pixelate"
                />
              </div>

              {/* caption */}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs opacity-70">
                  “found in camera roll .jpg”
                </span>
                <span className="text-xs font-semibold">Edition #0001</span>
              </div>

              {/* tiny idle bone */}
              <motion.div
                className="absolute -right-5 -bottom-6"
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Bone className="h-10 w-10 opacity-80" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Buttons + Bone Confetti ---------- */
function ButtonsWithBones() {
  const [spray, setSpray] = useState(false);
  return (
    <div className="relative mt-8 z-10">
      <div className="flex flex-wrap gap-3">
        <button
          onMouseEnter={() => setSpray(true)}
          onAnimationEnd={() => setSpray(false)}
          className="px-5 py-3 rounded-2xl bg-gradient-to-br from-bork-yellow via-bork-pink to-bork-blue text-bork-ink font-semibold shadow-floof"
        >
          Join the Barklist
        </button>
        <a
          href="#kit"
          className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40"
        >
          Buy $BORK
        </a>
      </div>

      {/* bone confetti */}
      <div className="pointer-events-none absolute inset-0 overflow-visible">
        {spray &&
          Array.from({ length: 14 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 0.9 }}
              animate={{
                opacity: 0,
                x: (Math.random() * 2 - 1) * 140,
                y: -(60 + Math.random() * 140),
                rotate: (Math.random() * 2 - 1) * 180,
                scale: 1 + Math.random() * 0.4,
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-1/2 top-0"
            >
              <Bone className="h-4 w-4" />
            </motion.div>
          ))}
      </div>
    </div>
  );
}

/* ---------- Small helpers ---------- */
function Tape({ pos }) {
  const base =
    "absolute h-6 w-20 bg-bork-yellow/70 dark:bg-bork-yellow/30 rounded-[4px] shadow-floof";
  if (pos === "left") {
    return (
      <div className={`${base} -left-3 -top-3 rotate-[-14deg]`} aria-hidden />
    );
  }
  return (
    <div className={`${base} -right-3 -top-4 rotate-[12deg]`} aria-hidden />
  );
}

function Bone({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor">
      <path d="M10 22c-4 0-6 3-6 6s2 6 6 6c1 0 2-.2 3-.6l9.6 5.6c2.3 1.3 5.2 1.3 7.5 0l9.6-5.6c.9.4 1.9.6 3 .6 4 0 6-3 6-6s-2-6-6-6c-1.1 0-2.1.2-3 .6l-9.6-5.6c-2.3-1.3-5.2-1.3-7.5 0l-9.6 5.6c-.9-.4-1.9-.6-3-.6z" />
    </svg>
  );
}
