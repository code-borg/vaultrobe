"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { BrandLogo } from "@/components/icons/BrandLogo";
import { siteConfig } from "@/lib/data";
import { footerCopy } from "@/lib/landing-copy";
import { useLiteMotion } from "@/lib/use-lite-motion";

export function Footer() {
  const year = new Date().getFullYear();
  const lite = useLiteMotion();

  return (
    <footer className="relative border-t border-lux-gold/10 pb-10 pt-14">
      <div className="section-divider" />
      <div
        className="orb orb-gold pointer-events-none absolute bottom-0 left-1/2 hidden h-40 w-64 -translate-x-1/2 opacity-40 md:block"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div>
            <a
              href="#top"
              className="flex items-center gap-2.5"
              aria-label={`${siteConfig.name} home`}
            >
              <BrandLogo size={32} title="" />
              <span className="font-display text-lg font-semibold text-lux-ivory">
                {siteConfig.name}
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-lux-ink-soft">
              {footerCopy.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerCopy.productLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-lux-ink-soft transition hover:text-lux-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-lux-ink-soft transition hover:text-lux-gold"
            >
              Google Play
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-subtle pt-8 text-xs text-lux-ink-faint sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with{" "}
            <motion.span
              className="inline-flex"
              animate={lite ? undefined : { scale: [1, 1.25, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart
                size={12}
                className="text-lux-rose-gold"
                fill="currentColor"
              />
            </motion.span>{" "}
            {footerCopy.madeFor}
          </p>
        </div>
      </div>
    </footer>
  );
}
