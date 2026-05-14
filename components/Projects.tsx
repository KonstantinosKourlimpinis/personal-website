"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const STATUS_STYLES: Record<string, { label: string; cls: string }> = {
  live:         { label: "Live",         cls: "bg-bio-green/10 text-bio-green border-bio-green/30" },
  research:     { label: "Research",     cls: "bg-cyan/10 text-cyan border-cyan/30" },
  built:        { label: "Built",        cls: "bg-coral/10 text-coral border-coral/30" },
  professional: { label: "Professional", cls: "bg-text-secondary/10 text-text-secondary border-text-secondary/20" },
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const status = STATUS_STYLES[project.status] ?? STATUS_STYLES.built;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
      whileHover={{ y: -4 }}
      className={`glass-card rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 ${
        project.featured ? "ring-1 ring-cyan/20" : ""
      }`}
    >
      {/* Image / placeholder area */}
      <div className="relative h-44 bg-gradient-to-br from-ocean-mid to-ocean-blue overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <>
            {/* Animated grid pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,212,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.15) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            {/* Project number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display font-black text-6xl text-cyan/10 select-none">
                {String(project.id).padStart(2, "0")}
              </span>
            </div>
          </>
        )}
        {/* Hover glow */}
        <div className="absolute inset-0 bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${status.cls}`}
          >
            {status.label}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full border border-coral/30 bg-coral/10 text-coral">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-text-primary leading-snug mb-1 group-hover:text-cyan transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-text-secondary text-xs tracking-wide mb-3">
          {project.subtitle}
        </p>
        <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan text-sm font-medium hover:gap-3 transition-all duration-200"
          >
            View live ↗
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative bg-ocean-mid overflow-hidden"
      style={{
        backgroundImage:
          "url('/aerial-sea.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ocean-black/55 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-black/35 to-ocean-mid/35 pointer-events-none" />
      <p className="absolute bottom-5 right-6 z-20 text-white/40 text-xs italic tracking-wider pointer-events-none select-none">📍 Eretria, Greece</p>

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
            What I&apos;ve built
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary">
            Projects
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl text-base leading-relaxed">
            From AI automation systems to causal inference research — here&apos;s
            a selection of the work I&apos;m most proud of.
          </p>
        </motion.div>

        {/* Featured: 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Rest: 3-col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
