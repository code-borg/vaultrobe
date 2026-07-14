"use client";

import { motion } from "framer-motion";
import { easeOutExpo, viewOnce } from "@/lib/motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClass =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  return (
    <motion.div
      className={`mb-12 flex max-w-3xl flex-col gap-4 ${alignClass} md:mb-16`}
      initial="hidden"
      whileInView="show"
      viewport={viewOnce}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.12, delayChildren: 0.05 },
        },
      }}
    >
      <motion.span
        className="section-label inline-flex items-center gap-2.5"
        variants={{
          hidden: { opacity: 0, y: 12, letterSpacing: "0.4em" },
          show: {
            opacity: 1,
            y: 0,
            letterSpacing: "0.25em",
            transition: { duration: 0.55, ease: easeOutExpo },
          },
        }}
      >
        <span
          className="h-px w-5 bg-gradient-to-r from-transparent to-lux-gold/70"
          aria-hidden
        />
        {label}
        <span
          className="h-px w-5 bg-gradient-to-l from-transparent to-lux-gold/70"
          aria-hidden
        />
      </motion.span>
      <motion.h2
        className="section-title"
        variants={{
          hidden: { opacity: 0, y: 22 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: easeOutExpo },
          },
        }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="section-sub"
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: easeOutExpo },
            },
          }}
        >
          {subtitle}
        </motion.p>
      )}
      {align === "center" && (
        <motion.div
          className="mx-auto flex items-center gap-2"
          variants={{
            hidden: { opacity: 0, scaleX: 0 },
            show: {
              opacity: 1,
              scaleX: 1,
              transition: { duration: 0.7, ease: easeOutExpo },
            },
          }}
          aria-hidden
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-lux-gold/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-lux-gold/70 shadow-gold-sm" />
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-lux-gold/40" />
        </motion.div>
      )}
    </motion.div>
  );
}
