"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { heroCopy } from "@/lib/landing-copy";
import { FeatureIcon } from "@/components/icons/FeatureIcon";
import { HeroSilk } from "@/components/effects/HeroSilk";
import { easeOutExpo, fadeUp } from "@/lib/motion";
import { useLiteMotion } from "@/lib/use-lite-motion";

export function Hero() {
  const lite = useLiteMotion();
  const reduceMotion = useReducedMotion();
  const mockupRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: mockupRef,
    offset: ["start end", "end start"],
  });

  const scrollEnabled = !lite && !reduceMotion;
  const primaryY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    scrollEnabled ? [28, 0, -36] : [0, 0, 0]
  );
  const secondaryY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    scrollEnabled ? [16, 0, -22] : [0, 0, 0]
  );
  const primaryRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    scrollEnabled ? [1.5, 0, -1.2] : [0, 0, 0]
  );
  const secondaryRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    scrollEnabled ? [-10, -8, -6] : [-8, -8, -8]
  );

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden pt-28 pb-24 sm:pt-32 md:pt-36 md:pb-32"
    >
      <HeroSilk />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-radial-glow"
        aria-hidden
      />
      {/* Ambient orbs — CSS fallback when WebGPU is unavailable. Hidden on
          small screens; heavy blur filters jank mobile scroll. */}
      <div
        className="orb orb-emerald absolute -right-24 top-1/4 z-0 hidden h-[420px] w-[420px] animate-orb-drift motion-reduce:animate-none md:block"
        aria-hidden
      />
      <div
        className="orb orb-rose absolute -left-16 bottom-0 z-0 hidden h-80 w-80 animate-orb-drift-reverse motion-reduce:animate-none md:block"
        aria-hidden
      />
      <div
        className="orb orb-gold absolute left-1/2 top-16 z-0 hidden h-72 w-72 -translate-x-1/2 animate-glow-breathe motion-reduce:animate-none md:block"
        aria-hidden
      />
      {/* Soft grid texture — desktop only (mask + fine lines cost mobile paint) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden opacity-[0.035] md:block"
        style={{
          backgroundImage:
            "linear-gradient(rgb(232 196 110 / 0.4) 1px, transparent 1px), linear-gradient(90deg, rgb(232 196 110 / 0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial={lite ? false : "hidden"}
            animate="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-lux-gold/30 bg-lux-gold/10 px-4 py-1.5 text-xs font-medium text-lux-gold shadow-gold-sm md:backdrop-blur-sm"
          >
            <motion.span
              animate={lite ? undefined : { rotate: [0, 12, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <FeatureIcon name="Shield" size={14} />
            </motion.span>
            {heroCopy.eyebrow}
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial={lite ? false : "hidden"}
            animate="show"
            className="font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.65rem]"
          >
            <span className="text-lux-ivory">{heroCopy.headline}</span>
            <br />
            <span className="text-gold-gradient animate-shimmer-text motion-reduce:animate-none">
              {heroCopy.headlineAccent}
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial={lite ? false : "hidden"}
            animate="show"
            className="mt-6 max-w-lg text-base leading-relaxed text-lux-ink-soft sm:text-lg"
          >
            {heroCopy.subheadline}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial={lite ? false : "hidden"}
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href={heroCopy.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              whileHover={lite ? undefined : { scale: 1.04, y: -2 }}
              whileTap={lite ? undefined : { scale: 0.98 }}
            >
              {heroCopy.primaryCta.label}
              <motion.span
                className="inline-flex"
                animate={lite ? undefined : { x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </motion.a>
            <motion.a
              href={heroCopy.secondaryCta.href}
              className="btn-ghost"
              whileHover={lite ? undefined : { scale: 1.03 }}
              whileTap={lite ? undefined : { scale: 0.98 }}
            >
              {heroCopy.secondaryCta.label}
            </motion.a>
          </motion.div>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial={lite ? false : "hidden"}
            animate="show"
            className="mt-4 text-sm text-lux-ink-faint"
          >
            {heroCopy.micro}
          </motion.p>

          <motion.ul
            custom={5}
            variants={fadeUp}
            initial={lite ? false : "hidden"}
            animate="show"
            className="mt-8 flex flex-wrap gap-x-3 gap-y-3 text-sm text-lux-ink-soft"
          >
            {heroCopy.chips.map(({ label, icon }, i) => (
              <motion.li
                key={label}
                className="glass flex items-center gap-2 rounded-full px-3 py-1.5"
                initial={lite ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: lite ? 0 : 0.55 + i * 0.1,
                  duration: lite ? 0 : 0.45,
                  ease: easeOutExpo,
                }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lux-gold/15 text-lux-gold">
                  <FeatureIcon name={icon} size={12} />
                </span>
                <span className="pr-0.5">{label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          ref={mockupRef}
          className="relative mx-auto flex w-full max-w-[300px] justify-center sm:max-w-lg lg:max-w-none"
          initial={lite ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: lite ? 0 : 0.3,
            duration: lite ? 0 : 0.9,
            ease: easeOutExpo,
          }}
        >
          {/* Mobile: single centered phone. sm+: dual floating composition */}
          <div className="relative mx-auto h-[540px] w-full sm:h-[600px] md:h-[640px]">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lux-gold/15 shadow-gold animate-glow-breathe motion-reduce:animate-none sm:block sm:h-[22rem] sm:w-[22rem] md:h-[26rem] md:w-[26rem]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 hidden h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,196,110,0.2),transparent_70%)] blur-2xl sm:block sm:h-60 sm:w-60"
              aria-hidden
            />

            {/* Secondary phone — desktop/tablet only (avoids cramped overlap on mobile) */}
            <motion.div
              className="absolute left-0 top-8 hidden w-[200px] sm:block sm:w-[220px] md:left-2 md:w-[245px]"
              style={{ y: secondaryY, rotate: secondaryRotate }}
            >
              <motion.div
                className="phone-frame w-full opacity-90"
                animate={
                  lite || reduceMotion
                    ? undefined
                    : { y: [0, -12, 0] }
                }
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <PhoneScreenshot
                  src="/screenshots/analytics.jpg"
                  alt="Vaultrobe wardrobe analytics: category breakdown, color palette, and most-worn items"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Primary phone — centered on mobile, right-stacked from sm up */}
            <motion.div
              className="absolute left-1/2 top-1 z-10 w-[240px] -translate-x-1/2 sm:left-auto sm:right-0 sm:top-0 sm:w-[255px] sm:translate-x-0 md:right-4 md:w-[280px]"
              style={{ y: primaryY, rotate: primaryRotate }}
            >
              <motion.div
                className="phone-frame w-full shadow-gold-lg"
                animate={
                  lite || reduceMotion
                    ? undefined
                    : { y: [0, -12, 0] }
                }
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              >
                <PhoneScreenshot
                  src="/screenshots/closet.jpg"
                  alt="Vaultrobe closet grid with scanned garments, categories, and laundry tools"
                  priority
                />
              </motion.div>
            </motion.div>

            <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 sm:bottom-6 sm:left-auto sm:right-0 sm:translate-x-0">
              <motion.div
                className="glass rounded-2xl px-4 py-3"
                animate={
                  lite || reduceMotion
                    ? undefined
                    : {
                        y: [0, -6, 0],
                      }
                }
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={lite ? undefined : { scale: 1.04 }}
              >
                <p className="text-xs text-lux-ink-faint">{siteConfig.name}</p>
                <p className="font-display text-sm text-lux-gold">
                  On-device · Private
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PhoneScreenshot({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[9/19.5] w-full bg-[#F7F2E8]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 240px, (max-width: 768px) 255px, 280px"
        className="object-cover object-top"
        priority={priority}
      />
    </div>
  );
}
