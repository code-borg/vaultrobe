"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

function isConstrainedViewport(): boolean {
  if (typeof window === "undefined") return true;
  return (
    window.matchMedia("(max-width: 767px)").matches ||
    window.matchMedia("(hover: none) and (pointer: coarse)").matches
  );
}

/**
 * True when motion should be simplified: user prefers reduced motion,
 * or we're on a narrow / touch-first viewport where continuous animations
 * and layout thrashing cause scroll jank.
 *
 * Defaults to constrained on SSR so mobile never mounts infinite loops
 * before the media query resolves.
 */
export function useLiteMotion(): boolean {
  const reduceMotion = useReducedMotion();
  const [isConstrained, setIsConstrained] = useState(isConstrainedViewport);

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
