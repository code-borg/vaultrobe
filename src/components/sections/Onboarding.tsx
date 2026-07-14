"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  User,
  Palette,
  Camera,
  PartyPopper,
  Lightbulb,
  ImageIcon,
  Focus,
  Shirt,
  Aperture,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { onboarding, siteConfig } from "@/lib/data";
import { easeOutExpo, scaleIn, viewOnce } from "@/lib/motion";

const stepIcons: LucideIcon[] = [User, Palette, Camera, PartyPopper];
const tipIcons: LucideIcon[] = [
  Lightbulb,
  ImageIcon,
  Focus,
  Shirt,
  Aperture,
];

export function Onboarding() {
  const reduceMotion = useReducedMotion();
  const {
    steps,
    photoTips,
    photoGuideTitle,
    photoGuideSubtitle,
    flowSummary,
  } = onboarding;

  return (
    <section id="onboarding" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lux-gold/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Getting started"
          title={`Feel at home in minutes`}
          subtitle={
            flowSummary
              ? `${siteConfig.name} guides you from ${flowSummary.toLowerCase()}.`
              : `A simple path into ${siteConfig.name} — your style, your pieces, your vault.`
          }
        />

        {steps.length > 0 && (
          <div className="relative mb-20">
            <motion.div
              className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px origin-left bg-gradient-to-r from-transparent via-lux-gold/40 to-transparent md:block"
              aria-hidden
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.2 }}
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => {
                const Icon = stepIcons[i % stepIcons.length];
                return (
                  <motion.div
                    key={`${step.step}-${step.title}`}
                    custom={i}
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewOnce}
                    className="relative"
                  >
                    <GlassCard className="h-full text-center">
                      <motion.div
                        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-lux-gold/15 shadow-gold-sm"
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                scale: 1.1,
                                rotate: [0, -8, 8, 0],
                                transition: { duration: 0.5 },
                              }
                        }
                      >
                        <Icon
                          size={24}
                          className="text-lux-gold"
                          strokeWidth={1.5}
                        />
                      </motion.div>
                      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-lux-gold">
                        Step {step.step}
                      </span>
                      <h3 className="mb-2 font-display text-xl text-lux-ivory">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-lux-ink-soft">
                        {step.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {(photoTips.length > 0 || photoGuideTitle) && (
          <motion.div
            className="glass-gold overflow-hidden rounded-3xl p-6 sm:p-10"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: easeOutExpo }}
          >
            <div className="mb-8 max-w-2xl">
              <span className="section-label">Photo guide</span>
              <h3 className="mt-3 font-display text-2xl text-lux-ivory sm:text-3xl">
                {photoGuideTitle}
              </h3>
              {photoGuideSubtitle && (
                <p className="mt-3 text-sm leading-relaxed text-lux-ink-soft sm:text-base">
                  {photoGuideSubtitle}
                </p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {photoTips.map((tip, i) => {
                const Icon = tipIcons[i % tipIcons.length];
                return (
                  <motion.div
                    key={tip.title}
                    initial={{ opacity: 0, y: 16, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.07,
                      duration: 0.45,
                      ease: easeOutExpo,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -4, transition: { type: "spring", stiffness: 300, damping: 22 } }
                    }
                    className="glass rounded-2xl p-5"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <motion.div
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-lux-emerald/10"
                        whileHover={
                          reduceMotion ? undefined : { scale: 1.15, rotate: 8 }
                        }
                      >
                        <Icon
                          size={18}
                          className="text-lux-emerald"
                          strokeWidth={1.5}
                        />
                      </motion.div>
                      <h4 className="font-display text-base text-lux-ivory">
                        {tip.title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-lux-ink-soft">
                      {tip.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
