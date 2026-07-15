"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { FeatureIcon } from "@/components/icons/FeatureIcon";
import { insightsCopy } from "@/lib/landing-copy";
import { cn } from "@/lib/cn";
import { scaleIn, viewOnce, viewOnceLoose } from "@/lib/motion";

export function Insights() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="insights" className="section-band relative py-20 md:py-28">
      <div className="section-divider" />
      <div
        className="orb orb-gold absolute right-0 top-1/2 hidden h-80 w-80 -translate-y-1/2 animate-orb-drift motion-reduce:animate-none md:block"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label={insightsCopy.label}
          title={insightsCopy.title}
          subtitle={insightsCopy.subtitle}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insightsCopy.items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={viewOnceLoose}
              className={cn(item.highlight && "sm:col-span-2 lg:col-span-1")}
            >
              <GlassCard
                variant={item.highlight ? "gold" : "default"}
                className={cn("h-full", item.highlight && "ring-1 ring-lux-gold/25")}
              >
                <motion.div
                  className={cn(
                    "mb-4",
                    item.highlight ? "icon-well icon-well-gold" : "icon-well"
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
                  <FeatureIcon name={item.icon} size={22} className="text-current" />
                </motion.div>
                <h3 className="mb-2 font-display text-xl text-lux-ivory transition-colors duration-300 group-hover/card:text-lux-gold">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-lux-ink-soft">
                  {item.description}
                </p>
                {item.highlight && (
                  <div
                    className="mt-4 h-0.5 w-0 rounded-full bg-gradient-to-r from-lux-gold to-lux-gold/20 transition-all duration-500 ease-out group-hover/card:w-14"
                    aria-hidden
                  />
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="section-closer mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewOnce}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {insightsCopy.supporting}
        </motion.p>
      </div>
    </section>
  );
}
