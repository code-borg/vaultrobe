"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { FeatureIcon } from "@/components/icons/FeatureIcon";
import { featureCards, siteConfig } from "@/lib/data";
import { cn } from "@/lib/cn";
import { scaleIn, viewOnceLoose } from "@/lib/motion";

export function Features() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lux-gold/30 to-transparent" />
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,196,110,0.08),transparent_70%)] animate-orb-drift motion-reduce:animate-none"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Features"
          title={`Everything in ${siteConfig.name}`}
          subtitle="From smart scans to weekly planning — a complete digital wardrobe, designed for real life."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature, i) => (
            <motion.div
              key={feature.id}
              custom={i % 6}
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={viewOnceLoose}
            >
              <GlassCard
                variant={feature.highlight ? "gold" : "default"}
                className={cn(
                  "group h-full",
                  feature.highlight && "ring-1 ring-lux-gold/20"
                )}
              >
                <motion.div
                  className={cn(
                    "mb-4 flex h-11 w-11 items-center justify-center rounded-xl",
                    feature.highlight
                      ? "bg-lux-gold/20 shadow-gold-sm"
                      : "bg-hover-fill"
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
                  <FeatureIcon name={feature.icon} size={22} />
                </motion.div>
                <h3 className="mb-2 font-display text-lg text-lux-ivory transition-colors duration-300 group-hover:text-lux-gold">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-lux-ink-soft">
                  {feature.description}
                </p>
                {feature.highlight && (
                  <div
                    className="mt-4 h-0.5 w-0 rounded-full bg-lux-gold/50 transition-all duration-500 ease-out group-hover:w-12"
                    aria-hidden
                  />
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
