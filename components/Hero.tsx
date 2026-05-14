'use client';

import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { personal } from '@/lib/data';

export default function Hero() {
  return (
    <div id="hero">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/upside-down.jpeg"
        bgImageSrc="/zarakes.jpeg"
        expandedBgSrc="/santa-marta-sunset.jpeg"
        bgCaption="Zarakes, Greece"
        expandedBgCaption="Santa Marta, Colombia"
        title="Konstantinos Kourlimpinis"
        tagline={personal.tagline}
        date="Lausanne · Switzerland"
        scrollToExpand="Scroll to explore"
        textBlend
      >
        {/* Shown after video fully expands */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4">
            Analyst · Software &amp; AI Engineer · Curious Adventurer
          </p>
          <p className="text-white/90 text-xl md:text-2xl italic font-light mb-10 leading-relaxed">
            &ldquo;{personal.tagline}&rdquo;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-10 py-4 rounded-full bg-white text-ocean-black font-bold text-base tracking-wide hover:bg-white/90 transition-all duration-200 shadow-lg shadow-black/30"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-10 py-4 rounded-full border-2 border-white/80 text-white text-base font-semibold hover:bg-white/15 transition-all duration-200"
            >
              Get in touch
            </a>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
