"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";

const LINKS = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: "✉",
    color: "text-cyan",
  },
  {
    label: "LinkedIn",
    value: "konstantinos-kourlimpinis",
    href: personal.linkedin,
    icon: "in",
    color: "text-bio-green",
  },
  {
    label: "GitHub",
    value: "KonstantinosKourlimpinis",
    href: personal.github,
    icon: "⌥",
    color: "text-coral",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-ocean-black overflow-hidden"
      style={{
        backgroundImage:
          "url('/beach-mountain-background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-ocean-black/55 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/35 to-ocean-black/25 pointer-events-none" />
      <p className="absolute bottom-5 right-6 z-20 text-white/40 text-xs italic tracking-wider pointer-events-none select-none">📍 Dafni Beach, Greece</p>

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-inner relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan text-sm tracking-[0.25em] uppercase font-medium mb-3">
            Let&apos;s talk
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-text-primary mb-6">
            Let&apos;s Build Something Meaningful.
          </h2>
          <div className="glass-card rounded-2xl px-6 md:px-10 py-5 max-w-xl mx-auto">
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              Whether it&apos;s a collaboration, a job opportunity, or just a
              conversation about data, AI, or the ocean — I&apos;d love to hear
              from you.
            </p>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-16">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center gap-3 text-center group hover:border-cyan/30 transition-all duration-300"
            >
              <span
                className={`font-display font-black text-2xl ${link.color}`}
              >
                {link.icon}
              </span>
              <div>
                <p className="text-text-secondary text-xs tracking-widest uppercase mb-1">
                  {link.label}
                </p>
                <p className={`text-sm font-medium ${link.color} group-hover:underline`}>
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href={`mailto:${personal.email}`}
            className="px-10 py-4 rounded-full bg-white text-ocean-black font-display font-bold text-base hover:bg-white/90 transition-colors duration-200"
          >
            Send me an email →
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 text-center py-10 border-t border-white/5"
      >
        <p className="text-text-secondary text-sm">
          Analyst · Software &amp; AI Engineer ·{" "}
          <span className="text-cyan">Switzerland</span> · © {new Date().getFullYear()}
        </p>
        <p className="text-text-secondary/40 text-xs mt-2">
          Built with Next.js · Tailwind CSS · Framer Motion
        </p>
      </motion.footer>
    </section>
  );
}
