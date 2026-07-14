"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { FeatureIcon } from "@/components/icons/FeatureIcon";
import { privacyCopy } from "@/lib/landing-copy";
import { cn } from "@/lib/cn";
import { easeOutExpo, scaleIn, viewOnce, viewOnceLoose } from "@/lib/motion";

export function Privacy() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="privacy" className="section-band section-band-surface relative py-20 md:py-28">
      <div className="section-divider" />
      <div
        className="orb orb-emerald absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 animate-glow-breathe motion-reduce:animate-none"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label={privacyCopy.label}
          title={privacyCopy.title}
          subtitle={privacyCopy.subtitle}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {privacyCopy.items.map((item, i) => (
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
                    "mb-4",
                    item.highlight
                      ? "icon-well icon-well-gold"
                      : "icon-well icon-well-emerald"
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
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="section-closer section-closer-gold mt-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOnce}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          {privacyCopy.closer}
        </motion.p>
      </div>
    </section>
  );
}
