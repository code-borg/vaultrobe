"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { FeatureIcon } from "@/components/icons/FeatureIcon";
import { outfitsCopy } from "@/lib/landing-copy";
import { cn } from "@/lib/cn";
import { scaleIn, viewOnce, viewOnceLoose } from "@/lib/motion";

export function Outfits() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="outfits" className="section-band section-band-surface relative py-24 md:py-36">
      <div className="section-divider" />
      <div
        className="orb orb-emerald absolute -left-16 bottom-0 hidden h-80 w-80 animate-orb-drift-reverse motion-reduce:animate-none md:block"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label={outfitsCopy.label}
          title={outfitsCopy.title}
          subtitle={outfitsCopy.subtitle}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {outfitsCopy.items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={viewOnceLoose}
            >
              <GlassCard
                variant={item.highlight ? "gold" : "default"}
                className={cn("h-full", item.highlight && "ring-1 ring-lux-gold/25")}
              >
                <motion.div
                  className={cn(
                    "mb-4 icon-well icon-well-lg",
                    item.highlight ? "icon-well-gold" : "icon-well-emerald"
                  )}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 1.12,
                          rotate: [0, -6, 6, 0],
                          transition: { duration: 0.45 },
                        }
                  }
                >
                  <FeatureIcon name={item.icon} size={26} className="text-current" />
                </motion.div>
                <h3 className="mb-2 font-display text-xl text-lux-ivory transition-colors duration-300 group-hover/card:text-lux-gold">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-lux-ink-soft">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="section-closer mt-12 text-base sm:text-lg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOnce}
          transition={{ duration: 0.5 }}
        >
          {outfitsCopy.reassurance}
        </motion.p>
      </div>
    </section>
  );
}
