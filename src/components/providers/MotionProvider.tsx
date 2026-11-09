"use client";

import { MotionConfig } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ type: "tween", duration: 0.4, ease: easeOutExpo }}
    >
      {children}
    </MotionConfig>
  );
}
