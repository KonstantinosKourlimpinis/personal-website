"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { diveInfo } from "@/lib/data";

const DIVE_PHOTOS: { src: string; alt: string }[] = [
  { src: "/dive-1.jpeg",          alt: "Dive photo 1" },
  { src: "/dive-couple.jpeg",      alt: "Dive couple" },
  { src: "/dive-4.jpeg",          alt: "Dive photo 4" },
  { src: "/dive-5.jpeg",          alt: "Dive photo 5" },
  { src: "/dive-6.jpeg",          alt: "Dive photo 6" },
  { src: "/divingwiththeboys.jpeg", alt: "Diving with the boys" },
  { src: "/aerial-sea.jpeg",      alt: "Aerial sea view" },
  { src: "/spearfishing.jpeg",     alt: "Spearfishing" },
];

export default function Dive() {
  return (
    <section
      id="dive"
      className="relative bg-ocean-deep overflow-hidden"
      style={{
        backgroundImage:
          "url('/Ocean_background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Deep ocean background */}
      <div className="absolute inset-0 bg-ocean-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-mid/25 via-ocean-deep/20 to-ocean-black/35 pointer-events-none" />
      <p className="absolute bottom-5 right-6 z-20 text-white/40 text-xs italic tracking-wider pointer-events-none select-none">📍 Cape Roca, Portugal</p>

      {/* Floating bubbles — fixed values to avoid SSR hydration mismatch */}
      {[
        { w: 5,  l: "8%",  dur: 9,  del: 0   },
        { w: 9,  l: "20%", dur: 13, del: 2.4 },
        { w: 4,  l: "33%", dur: 7,  del: 1   },
        { w: 11, l: "47%", dur: 11, del: 3.5 },
        { w: 6,  l: "55%", dur: 8,  del: 0.6 },
        { w: 8,  l: "63%", dur: 14, del: 4.2 },
        { w: 3,  l: "72%", dur: 10, del: 1.8 },
        { w: 10, l: "80%", dur: 9,  del: 5   },
        { w: 7,  l: "88%", dur: 12, del: 2.7 },
        { w: 5,  l: "15%", dur: 8,  del: 3.9 },
        { w: 9,  l: "40%", dur: 15, del: 0.3 },
        { w: 6,  l: "93%", dur: 11, del: 1.5 },
      ].map((b, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            width: b.w,
            height: b.w,
            left: b.l,
            bottom: 0,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.del}s`,
          }}
        />
      ))}

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
            Below the surface
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary mb-6">
            Life in the Ocean
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
            Scuba and freediving aren&apos;t hobbies — they&apos;re a philosophy.
            The ocean teaches you to slow down, be present, and trust yourself
            completely. Every dive is a lesson I bring back to the surface.
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16">
          {DIVE_PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className="relative overflow-hidden rounded-2xl aspect-square"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications + stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Certifications */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg text-text-primary mb-4">
                Dive Certifications
              </h3>
              {diveInfo.certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-cyan/10 last:border-0">
                  <span className="w-2 h-2 rounded-full bg-cyan shrink-0 shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                  <span className="text-text-secondary text-sm">{cert}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {diveInfo.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <p className="text-cyan font-display font-bold text-sm">{stat.value}</p>
                  <p className="text-text-secondary text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
