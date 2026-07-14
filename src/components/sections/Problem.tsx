"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureIcon } from "@/components/icons/FeatureIcon";
import { problemCopy } from "@/lib/landing-copy";
import { easeOutExpo, viewOnce, viewOnceLoose } from "@/lib/motion";

const sceneItems = [
  { label: "In laundry", tone: "#B76E79", w: "62%" },
  { label: "Somewhere…", tone: "#6B7280", w: "48%" },
  { label: "Favorite again", tone: "#C9A96E", w: "78%" },
  { label: "Never worn", tone: "#81C784", w: "35%" },
  { label: "Maybe later", tone: "#8B7E6A", w: "55%" },
];

export function Problem() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why"
      className="section-band section-band-surface relative py-20 md:py-28"
    >
      <div className="section-divider" />
      <div
        className="orb orb-rose absolute left-0 top-1/4 h-80 w-80 animate-orb-drift motion-reduce:animate-none"
        aria-hidden
      />
      <div
        className="orb orb-gold absolute bottom-1/4 right-0 h-64 w-64 animate-orb-drift-reverse motion-reduce:animate-none"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label={problemCopy.label}
          title={problemCopy.title}
          subtitle={problemCopy.subtitle}
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left: recognition panel + morning chaos scene */}
          <motion.div
            className="glass-gold relative flex flex-col overflow-hidden rounded-3xl p-6 sm:p-8 lg:col-span-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewOnce}
            transition={{ duration: 0.65, ease: easeOutExpo }}
          >
            <div
              className="orb orb-rose pointer-events-none absolute -right-10 -top-10 h-40 w-40 opacity-50"
              aria-hidden
            />

            <p className="relative section-label">A typical morning</p>
            <h3 className="relative mt-3 font-display text-2xl leading-snug text-lux-ivory sm:text-3xl">
              Open the closet.
              <br />
              <span className="text-gold-gradient">Still no idea.</span>
            </h3>
            <p className="relative mt-3 text-sm leading-relaxed text-lux-ink-soft">
              Full hangers. Empty answers. The decision takes longer than it
              should — every single day.
            </p>

            {/* Stylized “chaotic wardrobe” bars */}
            <div className="relative mt-8 flex-1 space-y-3">
              {sceneItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewOnceLoose}
                  transition={{
                    delay: 0.15 + i * 0.07,
                    duration: 0.45,
                    ease: easeOutExpo,
                  }}
                >
                  <div
                    className="h-9 w-9 shrink-0 rounded-lg border border-white/10 shadow-sm"
                    style={{
                      background: `linear-gradient(145deg, ${item.tone}66, ${item.tone}22)`,
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <span className="truncate text-xs text-lux-ink-soft">
                        {item.label}
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-black/20">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: item.tone }}
                        initial={{ width: 0 }}
                        whileInView={{ width: item.w }}
                        viewport={viewOnceLoose}
                        transition={{
                          delay: 0.25 + i * 0.08,
                          duration: 0.7,
                          ease: easeOutExpo,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative mt-8 flex items-center gap-2 border-t border-lux-gold/20 pt-5 text-xs text-lux-ink-faint">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lux-rose/15 text-lux-rose-gold">
                <ArrowDown size={12} />
              </span>
              Guesswork in. Same three outfits out.
            </div>
          </motion.div>

          {/* Right: numbered pain list */}
          <div className="flex flex-col gap-3 lg:col-span-7">
            {problemCopy.cards.map((card, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <motion.article
                  key={card.title}
                  className="group glass relative overflow-hidden rounded-2xl p-5 transition-[border-color,box-shadow,transform] duration-300 hover:border-lux-gold/45 hover:shadow-gold-sm sm:p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewOnceLoose}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.5,
                    ease: easeOutExpo,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          x: 4,
                          transition: { type: "spring", stiffness: 320, damping: 24 },
                        }
                  }
                >
                  <span
                    className="pointer-events-none absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-lux-gold/0 via-lux-gold/50 to-lux-gold/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="flex gap-4 sm:gap-5">
                    <div className="flex shrink-0 flex-col items-center gap-2">
                      <span className="font-display text-2xl leading-none text-lux-gold/50 transition-colors duration-300 group-hover:text-lux-gold sm:text-3xl">
                        {num}
                      </span>
                      <span className="hidden h-full w-px flex-1 bg-gradient-to-b from-lux-gold/25 to-transparent sm:block" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex items-start gap-3">
                        <motion.div
                          className={
                            i === 3
                              ? "icon-well icon-well-emerald !h-10 !w-10 !rounded-xl"
                              : "icon-well icon-well-rose !h-10 !w-10 !rounded-xl"
                          }
                          whileHover={
                            reduceMotion
                              ? undefined
                              : {
                                  scale: 1.1,
                                  rotate: [0, -5, 5, 0],
                                  transition: { duration: 0.4 },
                                }
                          }
                        >
                          <FeatureIcon
                            name={card.icon}
                            size={18}
                            className="text-current"
                          />
                        </motion.div>
                        <h3 className="pt-1.5 font-display text-lg leading-snug text-lux-ivory transition-colors duration-300 group-hover:text-lux-gold sm:text-xl">
                          {card.title}
                        </h3>
                      </div>
                      <p className="pl-0 text-sm leading-relaxed text-lux-ink-soft sm:pl-[3.25rem]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bridge into product */}
        <motion.div
          className="relative mx-auto mt-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOnce}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <div
            className="mx-auto mb-6 flex items-center justify-center gap-3"
            aria-hidden
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-lux-gold/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-lux-gold shadow-gold-sm" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-lux-gold/50" />
          </div>
          <p className="font-display text-xl leading-snug text-lux-ivory sm:text-2xl md:text-[1.65rem]">
            {problemCopy.bridge}
          </p>
          <a
            href="#insights"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-lux-gold transition hover:gap-3"
          >
            See what clarity looks like
            <ArrowDown size={14} className="rotate-[-90deg]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
