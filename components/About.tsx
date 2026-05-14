"use client";

import { motion } from "framer-motion";
import { values, personal } from "@/lib/data";

function ValueCard({
  value,
  index,
}: {
  value: (typeof values)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.02, borderColor: "rgba(0,212,255,0.35)" }}
      className="glass-card rounded-2xl p-7 flex flex-col gap-4 cursor-default transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <h3 className="font-display font-bold text-xl text-text-primary">
          {value.title}
        </h3>
      </div>
      <p className="text-text-secondary leading-relaxed text-sm">
        {value.description}
      </p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-ocean-deep overflow-hidden"
      style={{
        backgroundImage:
          "url('/pireaus.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay so text remains readable */}
      <div className="absolute inset-0 bg-ocean-black/55 pointer-events-none" />
      {/* Background depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-black/40 via-transparent to-ocean-mid/40 pointer-events-none" />
      <p className="absolute bottom-5 right-6 z-20 text-white/40 text-xs italic tracking-wider pointer-events-none select-none">📍 Piraeus Port, Greece</p>

      <div className="section-inner relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-cyan text-sm tracking-[0.25em] uppercase font-medium mb-3">
            Who I am
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary mb-6">
            About Me
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
            Who am I? In one word: Curious. I dive deep — literally — searching
            for meaning, exploring the unknown, and discovering more questions to ask.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative border-l-2 border-cyan/40 pl-6 mb-16 max-w-3xl"
        >
          <p className="text-text-primary/80 text-lg md:text-xl italic leading-relaxed">
            &ldquo;{personal.quote}&rdquo;
          </p>
        </motion.blockquote>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {values.map((v, i) => (
            <ValueCard key={v.title} value={v} index={i} />
          ))}
        </div>

        {/* Bio strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h3 className="font-display font-bold text-2xl text-text-primary mb-4">
              Where I&apos;m coming from
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Swiss-Greek by passport, global by experience. I&apos;ve studied
              at UNIL HEC and EPFL, worked at Ralph Lauren and Nestlé in
              Geneva and Vevey, built AI systems for businesses in Athens, and
              spent months living in eco-communities learning from nature.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I believe in combining analytical rigour with creative thinking —
              and in the fact that the best ideas often come from 20 metres
              below the surface.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { label: "Based in", value: "Lausanne, Switzerland" },
              { label: "Background", value: "Swiss & Greek" },
              { label: "Education", value: "MSc Business Analytics · BSc Economics" },
              { label: "Passion", value: "Scuba & Freediving 🤿" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <span className="text-cyan text-xs tracking-widest uppercase font-medium">
                  {item.label}
                </span>
                <span className="text-text-primary text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
