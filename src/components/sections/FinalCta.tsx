"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";
import { finalCtaCopy } from "@/lib/landing-copy";
import { easeOutExpo, viewOnce } from "@/lib/motion";

export function FinalCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="download" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="glass-gold relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-20"
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewOnce}
          transition={{ duration: 0.7, ease: easeOutExpo }}
        >
          <div
            className="orb orb-gold absolute -right-16 -top-16 h-56 w-56 animate-orb-drift motion-reduce:animate-none"
            aria-hidden
          />
          <div
            className="orb orb-emerald absolute -bottom-12 -left-12 h-48 w-48 animate-orb-drift-reverse motion-reduce:animate-none"
            aria-hidden
          />
          <div
            className="orb orb-rose absolute bottom-0 right-1/4 h-32 w-32 opacity-70"
            aria-hidden
          />
          {/* Soft ring */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lux-gold/10"
            aria-hidden
          />

          <motion.h2
            className="relative font-display text-3xl text-lux-ivory sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: easeOutExpo }}
          >
            {finalCtaCopy.title}
          </motion.h2>
          <motion.p
            className="relative mx-auto mt-5 max-w-xl text-sm leading-relaxed text-lux-ink-soft sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: easeOutExpo }}
          >
            {finalCtaCopy.subtitle}
          </motion.p>

          <motion.div
            className="relative mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: easeOutExpo }}
          >
            <motion.a
              href={finalCtaCopy.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold !px-8 !py-4 text-base shadow-gold"
              whileHover={reduceMotion ? undefined : { scale: 1.05, y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <Smartphone size={18} />
              {finalCtaCopy.primaryCta.label}
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href={finalCtaCopy.secondaryCta.href}
              className="btn-ghost"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              {finalCtaCopy.secondaryCta.label}
            </motion.a>
          </motion.div>

          <motion.p
            className="relative mt-7 text-sm text-lux-ink-faint"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {finalCtaCopy.micro}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
