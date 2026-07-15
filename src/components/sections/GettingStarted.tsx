"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Crop,
  Lightbulb,
  Shirt,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { gettingStartedCopy, heroCopy } from "@/lib/landing-copy";
import { easeOutExpo, scaleIn, viewOnce, viewOnceLoose } from "@/lib/motion";

const tipIcons = [Lightbulb, Camera, Crop, Shirt, Sparkles];

export function GettingStarted() {
  const reduceMotion = useReducedMotion();
  const { photoGuide } = gettingStartedCopy;

  return (
    <section id="getting-started" className="section-band relative py-20 md:py-28">
      <div className="section-divider" />
      <div
        className="orb orb-gold absolute left-1/4 top-1/3 hidden h-64 w-64 animate-orb-drift motion-reduce:animate-none md:block"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label={gettingStartedCopy.label}
          title={gettingStartedCopy.title}
          subtitle={gettingStartedCopy.subtitle}
        />

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
          {gettingStartedCopy.steps.map((step, i) => (
            <motion.div
              key={step.step}
              custom={i}
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={viewOnceLoose}
              className="relative"
            >
              {i < gettingStartedCopy.steps.length - 1 && (
                <div
                  className="pointer-events-none absolute right-0 top-10 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-lux-gold/40 to-transparent md:block"
                  aria-hidden
                />
              )}
              <GlassCard className="relative h-full text-center md:text-left">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-lux-gold/40 bg-gradient-to-br from-lux-gold/25 to-lux-gold/5 font-display text-lg text-lux-gold shadow-gold-sm">
                  {step.step}
                </span>
                <h3 className="mb-2 font-display text-xl text-lux-ivory">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-lux-ink-soft">
                  {step.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-center text-sm text-lux-ink-faint"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewOnce}
          transition={{ duration: 0.5 }}
        >
          {gettingStartedCopy.note}
        </motion.p>

        <motion.div
          className="glass-gold relative mt-14 overflow-hidden rounded-3xl p-6 sm:p-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOnce}
          transition={{ duration: 0.65, ease: easeOutExpo }}
        >
          <div
            className="orb orb-emerald pointer-events-none absolute -right-12 -top-12 hidden h-48 w-48 opacity-60 md:block"
            aria-hidden
          />
          <div className="relative mb-8 max-w-2xl">
            <span className="section-label inline-flex items-center gap-2">
              <span className="h-px w-4 bg-lux-gold/50" aria-hidden />
              Photo guide
            </span>
            <h3 className="mt-3 font-display text-2xl text-lux-ivory sm:text-3xl">
              {photoGuide.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-lux-ink-soft sm:text-base">
              {photoGuide.subtitle}
            </p>
          </div>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photoGuide.tips.map((tip, i) => {
              const Icon = tipIcons[i % tipIcons.length];
              return (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 16, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={viewOnceLoose}
                  transition={{
                    delay: i * 0.07,
                    duration: 0.45,
                    ease: easeOutExpo,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                          transition: { type: "spring", stiffness: 300, damping: 22 },
                        }
                  }
                  className="glass rounded-2xl p-5 transition-shadow duration-300 hover:shadow-gold-sm"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="icon-well icon-well-emerald !h-9 !w-9 !rounded-xl">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
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

          <p className="section-closer mt-10 text-base sm:text-lg">
            {photoGuide.closer}
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOnce}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          <motion.a
            href={heroCopy.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            whileHover={reduceMotion ? undefined : { scale: 1.04, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            {heroCopy.primaryCta.label}
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
