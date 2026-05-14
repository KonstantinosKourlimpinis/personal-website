"use client";

import { motion } from "framer-motion";
import { experience, education, certifications } from "@/lib/data";

function TimelineItem({
  item,
  index,
}: {
  item: (typeof experience)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Dot */}
      <div
        className={`absolute left-0 top-1 w-3 h-3 rounded-full border-2 ${
          item.current
            ? "border-cyan bg-cyan shadow-[0_0_12px_rgba(0,212,255,0.6)]"
            : "border-cyan/40 bg-ocean-mid"
        } -translate-x-[5px]`}
      />

      <div className="glass-card rounded-xl p-6 hover:border-cyan/25 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="font-display font-bold text-lg text-text-primary leading-snug">
              {item.role}
            </h3>
            <p className="text-cyan text-sm font-medium mt-0.5">
              {item.company}
              <span className="text-text-secondary font-normal">
                {" "}· {item.location}
              </span>
            </p>
          </div>
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full shrink-0 self-start ${
              item.current
                ? "bg-cyan/15 text-cyan border border-cyan/30"
                : "text-text-secondary bg-ocean-blue/30 border border-white/5"
            }`}
          >
            {item.period}
          </span>
        </div>

        <ul className="flex flex-col gap-1.5 mb-4">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-text-secondary leading-relaxed">
              <span className="text-cyan/50 mt-1 shrink-0">▸</span>
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-ocean-black overflow-hidden"
      style={{
        backgroundImage:
          "url('/sky_sunset_background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ocean-black/58 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-mid/30 to-ocean-black/40 pointer-events-none" />
      <p className="absolute bottom-5 right-6 z-20 text-white/40 text-xs italic tracking-wider pointer-events-none select-none">📍 Cali, Colombia</p>

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
            My journey
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary">
            Experience &amp; Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-lg text-text-secondary tracking-widest uppercase mb-8">
              Work Experience
            </h3>
            <div className="relative">
              <div className="timeline-line" />
              <div className="flex flex-col gap-6">
                {experience.map((item, i) => (
                  <TimelineItem key={i} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Education + Skills + Certs */}
          <div className="flex flex-col gap-10">
            {/* Education */}
            <div>
              <h3 className="font-display font-semibold text-lg text-text-secondary tracking-widest uppercase mb-6">
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="glass-card rounded-xl p-4"
                  >
                    <p className="text-text-primary font-semibold text-sm leading-snug">
                      {edu.degree}
                    </p>
                    <p className="text-cyan text-xs mt-0.5">{edu.school}</p>
                    <div className="flex items-center justify-between mt-1.5">
                      <p className="text-text-secondary text-xs">{edu.period}</p>
                      {edu.grade && (
                        <span className="text-xs font-bold text-bio-green">
                          {edu.grade}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-display font-semibold text-lg text-text-secondary tracking-widest uppercase mb-6">
                Certifications
              </h3>
              <div className="flex flex-col gap-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex gap-3 items-start"
                  >
                    <span className="text-coral mt-0.5 text-sm">✦</span>
                    <div>
                      <p className="text-text-primary text-sm">{cert.name}</p>
                      <p className="text-text-secondary text-xs">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Spoken Languages */}
            <div>
              <h3 className="font-display font-semibold text-lg text-text-secondary tracking-widest uppercase mb-6">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Greek (Native)", "English (C1/C2)", "French (C1)", "Russian (A1)"].map(
                  (lang) => (
                    <span key={lang} className="tag">
                      {lang}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Leadership */}
            <div>
              <h3 className="font-display font-semibold text-lg text-text-secondary tracking-widest uppercase mb-6">
                Leadership
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  {
                    role: "Faculty President",
                    duration: "3+ years",
                    description:
                      "Represented the entire MSc Business Analytics programme. Collected student feedback, organised open discussions, and communicated directly with professors and faculty as the elected voice of the student body.",
                  },
                  {
                    role: "MSc BA Student Representative",
                    duration: null,
                    description:
                      "Official representative for the MSc Business Analytics cohort in faculty meetings and academic decision-making processes.",
                  },
                  {
                    role: "Group Tutor — Statistics & Econometrics",
                    duration: null,
                    description:
                      "Led peer study groups and tutoring sessions, helping fellow students build confidence in quantitative methods.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="glass-card rounded-xl p-4 border-l-2 border-cyan/30"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <p className="text-text-primary font-semibold text-sm leading-snug">
                        {item.role}
                      </p>
                      {item.duration && (
                        <span className="text-xs text-cyan shrink-0 font-medium">
                          {item.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 glass-card rounded-2xl p-8"
        >
          <h3 className="font-display font-bold text-xl text-text-primary mb-8">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Languages",
                items: ["Python", "R", "SQL", "Snowflake", "Redshift", "JavaScript", "Java"],
                color: "text-cyan",
              },
              {
                label: "Analytics",
                items: ["Machine Learning", "Causal Inference", "A/B Testing", "Forecasting", "Econometrics"],
                color: "text-bio-green",
              },
              {
                label: "Tools",
                items: ["Power BI", "Tableau", "Dataiku", "n8n", "Make.com", "Airtable", "Vercel", "Git"],
                color: "text-coral",
              },
            ].map((group, i) => (
              <div key={group.label}>
                <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${group.color}`}>
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="tag text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
