import type { Transition, Variants } from "framer-motion";

/** Shared ease curve — soft luxe deceleration */
export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const springSoft: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 24,
};

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 28,
};

/** Fade + rise for staggered children */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 + i * 0.09,
      duration: 0.65,
      ease: easeOutExpo,
    },
  }),
};

/** Scale + fade for cards */
export const scaleIn: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.55,
      ease: easeOutExpo,
    },
  }),
};

/** Stagger container */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

/** Viewport defaults for whileInView */
export const viewOnce = { once: true, margin: "-60px" as const };
export const viewOnceLoose = { once: true, margin: "-40px" as const };
