"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "strong" | "gold";
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variants = {
  default: "glass",
  strong: "glass-strong",
  gold: "glass-gold",
};

export function GlassCard({
  variant = "default",
  hover = true,
  children,
  className,
  ...props
}: GlassCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "group/card relative overflow-hidden rounded-2xl p-6",
        variants[variant],
        hover &&
          "transition-[border-color,box-shadow] duration-300 hover:border-lux-gold/55 hover:shadow-gold-sm",
        className
      )}
      whileHover={
        hover && !reduceMotion
          ? {
              y: -7,
              scale: 1.018,
              transition: { type: "spring", stiffness: 320, damping: 22 },
            }
          : undefined
      }
      whileTap={hover && !reduceMotion ? { scale: 0.99 } : undefined}
      {...props}
    >
      {/* Top sheen edge */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lux-gold/40 to-transparent opacity-70 transition-opacity duration-300 group-hover/card:opacity-100"
        aria-hidden
      />
      {/* Soft corner glow on hover */}
      <span
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(232,196,110,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        aria-hidden
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
