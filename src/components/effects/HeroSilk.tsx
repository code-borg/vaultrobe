"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { startSilk } from "@/lib/silk-gpu";
import { useLiteMotion } from "@/lib/use-lite-motion";
import { cn } from "@/lib/cn";

export function HeroSilk() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeRef = useRef<"dark" | "light">("dark");
  const { theme } = useTheme();
  const lite = useLiteMotion();
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  themeRef.current = theme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || lite) return;

    return startSilk({
      canvas,
      getTheme: () => themeRef.current,
      animate: !reduceMotion,
      onReady: () => setReady(true),
    });
  }, [lite, reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-[1] h-full w-full transition-opacity duration-700",
        ready ? "opacity-100" : "opacity-0"
      )}
    />
  );
}
