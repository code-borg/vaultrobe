"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * True when motion should be simplified: user prefers reduced motion,
 * or we're on a narrow / touch-first viewport where continuous animations
 * and layout thrashing cause scroll jank.
 *
 * Always starts constrained so SSR and the first client render match.
 * The real viewport is applied after mount.
 */
export function useLiteMotion(): boolean {
  const reduceMotion = useReducedMotion();
  const [isConstrained, setIsConstrained] = useState(true);

  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 767px)");
    const coarse = window.matchMedia("(hover: none) and (pointer: coarse)");

    const update = () => {
      setIsConstrained(narrow.matches || coarse.matches);
    };

    update();
    narrow.addEventListener("change", update);
    coarse.addEventListener("change", update);
    return () => {
      narrow.removeEventListener("change", update);
      coarse.removeEventListener("change", update);
    };
  }, []);

  return Boolean(reduceMotion) || isConstrained;
}
