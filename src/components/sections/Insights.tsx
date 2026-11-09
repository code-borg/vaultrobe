"use client";

import Image from "next/image";
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
    <section id="insights" className="section-band relative py-24 md:py-36">
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

        <div className="grid items-center gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div className="hero-phone mx-auto w-[220px] sm:w-[250px]">
            <div className="hero-phone-screen relative aspect-[636/1480] overflow-hidden bg-[#F7F2E8]">
              <Image
                src="/screenshots/analytics.jpg"
                alt="Vaultrobe wardrobe analytics showing category breakdown, color palette, and most-worn items"
                fill
                sizes="(max-width: 639px) 220px, 250px"
                className="object-contain"
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {insightsCopy.items.map((item, i) => (
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
                  className={cn(
                    "h-full",
                    item.highlight && "ring-1 ring-lux-gold/25 max-sm:p-7"
                  )}
                >
                  <motion.div
                    className={cn(
                      "mb-4 icon-well icon-well-lg",
                      item.highlight ? "icon-well-gold" : undefined
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
                  <h3
                    className={cn(
                      "mb-2 font-display text-lux-ivory transition-colors duration-300 group-hover/card:text-lux-gold",
                      item.highlight ? "text-xl sm:text-[1.35rem]" : "text-xl"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "leading-relaxed text-lux-ink-soft",
                      item.highlight
                        ? "text-[0.9375rem] sm:text-sm max-sm:leading-relaxed"
                        : "text-sm"
                    )}
                  >
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
