"use client";

import { useRef } from "react";
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

const closetItems = [
  { name: "Linen shirt", tone: "#C9A96E", accent: "#E8D4A0" },
  { name: "Navy knit", tone: "#3D4F6F", accent: "#6B82A8" },
  { name: "Rose silk", tone: "#B76E79", accent: "#D4A0A8" },
  { name: "Olive coat", tone: "#5C6B4A", accent: "#8FA078" },
  { name: "Cream tee", tone: "#D4C4A8", accent: "#F0E6D0" },
  { name: "Charcoal", tone: "#4A4540", accent: "#7A736C" },
];

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
                className="phone-frame w-full opacity-80"
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
                <PhoneScreen variant="insights" label="Insights" lite={lite} />
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
                <div className="absolute left-1/2 top-3 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black/80" />
                <PhoneScreen variant="closet" label="Closet" lite={lite} />
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

function PhoneScreen({
  variant,
  label,
  lite = false,
}: {
  variant: "closet" | "insights";
  label: string;
  lite?: boolean;
}) {
  if (variant === "closet") {
    return (
      <div className="flex aspect-[9/19] flex-col bg-gradient-to-b from-[#1f1b14] via-[#15120e] to-[#0c0a08] p-4 pt-10">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-display text-sm text-lux-ivory">{label}</span>
          <span className="rounded-full bg-lux-gold/20 px-2 py-0.5 text-[10px] font-medium text-lux-gold shadow-gold-sm animate-pulse-gold motion-reduce:animate-none">
            Yours
          </span>
        </div>
        <div className="grid flex-1 grid-cols-2 content-start gap-2">
          {closetItems.map((item, i) => (
            <motion.div
              key={item.name}
              className="aspect-square overflow-hidden rounded-xl border border-white/10"
              style={{
                background: `linear-gradient(145deg, ${item.accent}33 0%, ${item.tone}55 40%, #0e0c0a 100%)`,
              }}
              initial={lite ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: lite ? 0 : 0.7 + i * 0.08,
                duration: lite ? 0 : 0.45,
                ease: easeOutExpo,
              }}
            >
              <div className="flex h-full flex-col items-center justify-end p-2.5">
                <motion.div
                  className="mb-1.5 h-9 w-9 rounded-full shadow-md"
                  style={{
                    background: `linear-gradient(145deg, ${item.accent}, ${item.tone})`,
                    boxShadow: `0 4px 12px ${item.tone}66`,
                  }}
                  animate={
                    lite
                      ? undefined
                      : { opacity: [0.85, 1, 0.85], y: [0, -2, 0] }
                  }
                  transition={{
                    duration: 3 + (i % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.25,
                  }}
                />
                <div className="h-1 w-12 rounded-full bg-white/15" />
                <p className="mt-1 truncate text-[8px] text-white/50">
                  {item.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-3 flex justify-around rounded-2xl border border-white/10 bg-black/50 py-2.5">
          {["Home", "Closet", "Plan", "You"].map((t, i) => (
            <span
              key={t}
              className={`text-[9px] ${i === 1 ? "font-medium text-lux-gold" : "text-white/40"}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  }

  const insightRows = [
    {
      label: "Never worn",
      meta: "12 pieces",
      color: "#B76E79",
      icon: "Shirt",
    },
    {
      label: "Color balance",
      meta: "Warm bias",
      color: "#C9A96E",
      icon: "Palette",
    },
    {
      label: "Most worn",
      meta: "Navy knit",
      color: "#81C784",
      icon: "History",
    },
  ];

  return (
    <div className="flex aspect-[9/19] flex-col bg-gradient-to-b from-[#1f1b14] via-[#15120e] to-[#0c0a08] p-4 pt-10">
      <span className="mb-1 font-display text-sm text-lux-ivory">{label}</span>
      <p className="mb-3 text-[10px] text-white/40">This month</p>
      <div className="flex flex-1 flex-col gap-2.5">
        {insightRows.map((row, i) => (
          <motion.div
            key={row.label}
            className="flex flex-1 items-center gap-3 rounded-xl border border-white/8 bg-white/[0.04] p-2.5"
            initial={lite ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: lite ? 0 : 0.85 + i * 0.12,
              duration: lite ? 0 : 0.5,
              ease: easeOutExpo,
            }}
          >
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
              style={{
                background: `linear-gradient(145deg, ${row.color}33, ${row.color}12)`,
                border: `1px solid ${row.color}40`,
              }}
            >
              <FeatureIcon
                name={row.icon}
                size={16}
                className="text-white/80"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-medium text-white/90">
                {row.label}
              </p>
              <p className="truncate text-[9px] text-white/40">{row.meta}</p>
              <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: row.color,
                    width: lite ? `${55 + i * 15}%` : undefined,
                  }}
                  initial={lite ? false : { width: 0 }}
                  animate={{ width: `${55 + i * 15}%` }}
                  transition={{
                    delay: lite ? 0 : 1.1 + i * 0.15,
                    duration: lite ? 0 : 0.8,
                    ease: easeOutExpo,
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
