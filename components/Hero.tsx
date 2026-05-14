"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { personal } from "@/lib/data";

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background drifts upward slower than the scroll — parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  // Hero content fades and lifts as user scrolls away
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], ["0%", "-12%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* ── Parallax background ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: 1.12 }}
      >
        <Image
          src="/zarakes.jpeg"
          alt="Zarakes, Greece"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Layered overlays for depth and readability */}
        <div className="absolute inset-0 bg-ocean-black/52" />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-black/30 via-transparent to-ocean-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-black/30 via-transparent to-ocean-black/10" />
      </motion.div>

      {/* ── Main content ── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-5 w-full"
        >
          {/* Roles */}
          <motion.p
            variants={fadeUp}
            className="text-white/70 text-xs sm:text-sm tracking-[0.2em] uppercase"
          >
            Analyst · Software &amp; AI Engineer · Curious Adventurer
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.92] tracking-tight"
            style={{
              textShadow:
                "0 2px 30px rgba(0,0,0,0.5), 0 0 80px rgba(56,189,248,0.08)",
            }}
          >
            Konstantinos
            <br />
            <span className="text-white/90">Kourlimpinis</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 w-full max-w-xs"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan/50 to-cyan/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-cyan/50 to-cyan/50" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-white font-semibold text-lg sm:text-xl md:text-2xl tracking-wide max-w-xl"
          >
            {personal.tagline}
          </motion.p>

          {/* Location pill */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-white/45 text-xs tracking-[0.25em] uppercase font-medium">
              📍 Lausanne, Switzerland
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 mt-3"
          >
            <a
              href="#experience"
              className="px-8 py-3 rounded-full bg-white text-ocean-black font-bold text-sm tracking-wide hover:bg-white/90 transition-all duration-200 shadow-lg shadow-black/30"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border-2 border-white/40 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/70 transition-all duration-200"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-white/35 text-[10px] tracking-[0.25em] uppercase">
            scroll
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="text-white/35"
          >
            <rect
              x="5.5"
              y="0.5"
              width="5"
              height="9"
              rx="2.5"
              stroke="currentColor"
            />
            <circle cx="8" cy="5" r="1.5" fill="currentColor" />
            <path
              d="M8 14L4 19H12L8 14Z"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* ── Location caption ── */}
      <p className="absolute bottom-5 right-6 z-20 text-white/35 text-xs italic tracking-wider pointer-events-none select-none">
        📍 Zarakes, Greece
      </p>
    </section>
  );
}
