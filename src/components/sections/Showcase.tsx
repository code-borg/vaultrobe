"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { showcaseItems, siteConfig } from "@/lib/data";
import { cn } from "@/lib/cn";
import { easeOutExpo } from "@/lib/motion";

const accentMap = {
  gold: {
    border: "border-lux-gold/40",
    glow: "shadow-gold",
    badge: "bg-lux-gold/15 text-lux-gold",
    bar: "bg-lux-gold",
  },
  rose: {
    border: "border-lux-rose-gold/40",
    glow: "shadow-[0_0_40px_rgba(183,110,121,0.15)]",
    badge: "bg-lux-rose-gold/15 text-lux-rose-gold",
    bar: "bg-lux-rose-gold",
  },
  emerald: {
    border: "border-lux-emerald/40",
    glow: "shadow-emerald",
    badge: "bg-lux-emerald/15 text-lux-emerald",
    bar: "bg-lux-emerald",
  },
};

const AUTO_MS = 4500;

export function Showcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const item = showcaseItems[active] ?? showcaseItems[0];
  const accent = accentMap[item?.accent ?? "gold"];

  useEffect(() => {
    if (reduceMotion || paused || showcaseItems.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % showcaseItems.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused]);

  if (!item) return null;

  return (
    <section id="showcase" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.06)_0%,transparent_60%)]" />
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(129,199,132,0.1),transparent_70%)] animate-orb-drift motion-reduce:animate-none"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Inside the app"
          title={`A closer look at ${siteConfig.name}`}
          subtitle="A boutique-feel closet, outfit planning, and everyday tools — all in one place."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="relative mx-auto w-full max-w-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,196,110,0.12),transparent_70%)] animate-glow-breathe motion-reduce:animate-none"
              aria-hidden
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24, scale: 0.96, rotateY: -8 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, y: -16, scale: 0.96, rotateY: 8 }}
                transition={{ duration: 0.45, ease: easeOutExpo }}
                className={cn(
                  "phone-frame relative mx-auto w-[260px] sm:w-[280px]",
                  accent.glow
                )}
                style={{ transformStyle: "preserve-3d" }}
              >
                <ShowcaseScreen
                  title={item.title}
                  visual={item.visual}
                  accent={item.accent}
                  description={item.description}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div
            className="flex flex-col gap-3"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setPaused(false);
              }
            }}
          >
            {showcaseItems.map((s, i) => {
              const a = accentMap[s.accent];
              const isActive = i === active;
              return (
                <motion.button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.5,
                    ease: easeOutExpo,
                  }}
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300",
                    isActive
                      ? cn("glass-gold", a.border)
                      : "glass border-transparent hover:border-lux-gold/20"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <motion.span
                      className={cn(
                        "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold",
                        isActive ? a.badge : "bg-hover-fill text-lux-ink-faint"
                      )}
                      animate={
                        isActive && !reduceMotion
                          ? { scale: [1, 1.08, 1] }
                          : { scale: 1 }
                      }
                      transition={{ duration: 0.4 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>
                    <div className="min-w-0">
                      <h3
                        className={cn(
                          "font-display text-lg transition",
                          isActive ? "text-lux-ivory" : "text-lux-ink-soft"
                        )}
                      >
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-lux-ink-soft">
                        {s.description}
                      </p>
                    </div>
                  </div>
                  {isActive && (
                    <>
                      <motion.div
                        layoutId="showcase-bar"
                        className={cn(
                          "absolute bottom-0 left-0 h-0.5 w-full",
                          a.bar
                        )}
                      />
                      {!reduceMotion && (
                        <motion.div
                          key={`progress-${item.id}`}
                          className={cn(
                            "absolute bottom-0 left-0 h-0.5 origin-left opacity-40",
                            a.bar
                          )}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: AUTO_MS / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcaseScreen({
  title,
  visual,
  accent,
  description,
}: {
  title: string;
  visual: string;
  accent: "gold" | "rose" | "emerald";
  description: string;
}) {
  const color =
    accent === "gold"
      ? "#C9A96E"
      : accent === "rose"
        ? "#B76E79"
        : "#81C784";

  return (
    <div className="flex aspect-[9/19] flex-col bg-gradient-to-b from-[#1a1710] to-[#0a0908] p-4 pt-10">
      <div className="mb-4 flex items-center justify-between gap-2">
        <span className="truncate font-display text-sm text-lux-ivory">
          {title}
        </span>
        <motion.span
          className="h-2 w-2 shrink-0 rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {(visual === "closet" || visual === "default" || visual === "home") && (
        <div className="grid flex-1 grid-cols-2 gap-2 content-start">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="aspect-[3/4] rounded-xl border border-subtle"
              style={{
                background: `linear-gradient(${120 + i * 15}deg, ${color}18, #0e0c0a)`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: i * 0.04,
                duration: 0.35,
                ease: easeOutExpo,
              }}
            />
          ))}
        </div>
      )}

      {visual === "collections" && (
        <div className="flex flex-1 flex-col gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="flex flex-1 flex-col justify-end rounded-2xl border border-subtle p-3"
              style={{
                background: `linear-gradient(160deg, ${color}${20 - i * 5}, #0e0c0a)`,
              }}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: easeOutExpo }}
            >
              <span className="line-clamp-2 text-[10px] text-lux-ink-soft">
                {description}
              </span>
            </motion.div>
          ))}
        </div>
      )}

      {visual === "scan" && (
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <div
            className="relative flex h-40 w-40 items-center justify-center rounded-2xl border-2 border-dashed"
            style={{ borderColor: `${color}55` }}
          >
            <motion.div
              className="h-24 w-20 rounded-lg opacity-60"
              style={{
                background: `linear-gradient(180deg, ${color}40, ${color}10)`,
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-4 rounded-xl border"
              style={{ borderColor: color }}
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.96, 1, 0.96] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Scanning line */}
            <motion.div
              className="absolute left-4 right-4 h-0.5 rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
              }}
              animate={{ top: ["20%", "80%", "20%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="px-2 text-center text-[10px]" style={{ color }}>
            {description}
          </span>
        </div>
      )}

      {visual === "calendar" && (
        <div className="flex flex-1 flex-col gap-2">
          <div className="mb-2 grid grid-cols-7 gap-1">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span
                key={`${d}-${i}`}
                className="text-center text-[9px] text-lux-ink-faint"
              >
                {d}
              </span>
            ))}
          </div>
          <div className="grid flex-1 grid-cols-7 grid-rows-4 gap-1">
            {Array.from({ length: 28 }).map((_, i) => (
              <motion.div
                key={i}
                className="rounded-md border border-subtle"
                style={{
                  background:
                    i % 5 === 0 || i % 7 === 2
                      ? `${color}25`
                      : "rgba(255,255,255,0.02)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.015, duration: 0.25 }}
              />
            ))}
          </div>
        </div>
      )}

      {visual === "laundry" && (
        <div className="flex flex-1 flex-col gap-3">
          {["Dirty", "In wash", "Ready"].map((stage, i) => (
            <motion.div
              key={stage}
              className="flex-1 rounded-2xl border border-subtle p-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.4, ease: easeOutExpo }}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs text-lux-ink-soft">{stage}</span>
                <span className="text-[10px]" style={{ color }}>
                  {3 - i}
                </span>
              </div>
              <div className="flex gap-1.5">
                {Array.from({ length: 3 - i }).map((_, j) => (
                  <motion.div
                    key={j}
                    className="h-10 w-10 rounded-lg"
                    style={{ background: `${color}${30 - j * 8}` }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: j * 0.2 + i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {visual === "planner" && (
        <div className="flex flex-1 flex-col gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
            <motion.div
              key={day}
              className="flex flex-1 items-center gap-3 rounded-xl border border-subtle px-3"
              style={{
                background:
                  i === 1
                    ? `linear-gradient(90deg, ${color}20, transparent)`
                    : "rgba(255,255,255,0.02)",
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.35, ease: easeOutExpo }}
            >
              <span className="w-8 text-[10px] text-lux-ink-faint">{day}</span>
              <div
                className="h-8 flex-1 rounded-lg"
                style={{
                  background:
                    i === 1 ? `${color}30` : "rgba(255,255,255,0.04)",
                }}
              />
            </motion.div>
          ))}
        </div>
      )}

      {visual === "tryon" && (
        <div className="flex flex-1 flex-col gap-3">
          <div className="grid flex-1 grid-cols-2 gap-2">
            {["You", "Garment"].map((label) => (
              <div
                key={label}
                className="flex flex-col justify-end rounded-2xl border border-subtle p-2"
                style={{
                  background: `linear-gradient(180deg, ${color}28, #0e0c0a)`,
                }}
              >
                <span className="text-[10px] uppercase tracking-wider text-lux-ink-faint">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div
            className="rounded-full py-2 text-center text-[10px] font-medium"
            style={{ background: color, color: "#161208" }}
          >
            Try on
          </div>
          <p className="px-1 text-center text-[10px] text-lux-ink-faint">
            {description}
          </p>
        </div>
      )}

      {visual === "editor" && (
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <motion.div
            className="h-48 w-40 rounded-xl border border-subtle"
            style={{
              background: `linear-gradient(160deg, ${color}30, #0e0c0a)`,
            }}
            animate={{
              boxShadow: [
                `0 0 0 0 ${color}00`,
                `0 0 20px 2px ${color}33`,
                `0 0 0 0 ${color}00`,
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="px-2 text-center text-[10px] text-lux-ink-faint">
            {description}
          </p>
          <div className="flex gap-2">
            {["Crop", "Rotate", "Feather"].map((t, i) => (
              <motion.span
                key={t}
                className="rounded-full px-2 py-1 text-[9px]"
                style={{ background: `${color}22`, color }}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
