"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SUSTAIN_PHOTOS: { src: string; alt: string }[] = [
  { src: "/waterpose.jpeg",    alt: "Waterpose" },
  { src: "/kk-dig.jpeg",       alt: "Digging work" },
  { src: "/stonepath.jpeg",    alt: "Stone path building" },
  { src: "/martin-build.jpeg", alt: "Sustainable building" },
  { src: "/mo-team.jpeg",      alt: "Modern Odyssey team" },
  { src: "/highfive.jpeg",     alt: "High five" },
  { src: "/beans-jpeg.jpeg",   alt: "Harvesting beans" },
  { src: "/cooking.jpeg",      alt: "Community cooking" },
];

const ACTIVITIES = [
  "Beach & river cleanups",
  "Tree planting & forest regeneration",
  "Building with sustainable materials",
  "Permaculture & eco-community living",
  "Connecting 5 eco-communities + 1 urban community",
];

export default function Sustainability() {
  return (
    <section
      id="sustainability"
      className="relative bg-ocean-deep overflow-hidden"
      style={{
        backgroundImage: "url('/yamochori-background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-ocean-black/55 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-mid/25 via-ocean-deep/20 to-ocean-black/35 pointer-events-none" />
      <p className="absolute bottom-5 right-6 z-20 text-white/40 text-xs italic tracking-wider pointer-events-none select-none">📍 Agrinio, Greece</p>

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
            Impact &amp; environment
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary mb-6">
            Sustainability &amp; Volunteering
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
            Nature is not a backdrop to life — it is life. Through the Modern Odyssey
            project, I joined a team of 15 volunteers across 6 eco and urban communities
            over 7 weeks. We planted trees, cleaned rivers and beaches, built with
            sustainable materials, and found what truly brings people together.
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16">
          {SUSTAIN_PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className="relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-bio-green/20 to-ocean-mid"
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

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="font-display font-bold text-lg text-text-primary mb-4">
              Modern Odyssey
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Year 2 of the Modern Odyssey volunteering project — 2 vans, 15 people,
              7 weeks, 5 eco-communities and 1 urban community across Europe.
              Like Odysseus searching for Ithaca, we searched for home — and found it in nature.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              My biggest lesson: when you strip away convenience and live close to the earth,
              something essential wakes up. Nature is not what divides us — it is what unites us.
            </p>
          </motion.div>

          {/* Activities + eco note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg text-text-primary mb-4">
                What We Did
              </h3>
              {ACTIVITIES.map((act, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-2 border-b border-bio-green/10 last:border-0"
                >
                  <span className="w-2 h-2 rounded-full bg-bio-green shrink-0 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                  <span className="text-text-secondary text-sm">{act}</span>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-xl p-5 border-l-2 border-bio-green/40">
              <p className="text-text-secondary text-sm leading-relaxed">
                🌱 Nothing is more precious than humanity&apos;s connection with nature.
                Every beach cleaned, every tree planted, and every community visited deepened
                my conviction that{" "}
                <span className="text-cyan">
                  protecting the environment is not a choice — it is who we are
                </span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
