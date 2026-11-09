"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Smartphone } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { BrandLogo } from "@/components/icons/BrandLogo";
import { siteConfig } from "@/lib/data";
import { navLinks, heroCopy } from "@/lib/landing-copy";
import { cn } from "@/lib/cn";

export function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled || open
          ? "glass-strong py-3 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.name} home`}
        >
          <motion.span
            className="inline-flex"
            whileHover={{ scale: 1.08, rotate: -4 }}
            whileTap={{ scale: 0.96 }}
          >
            <BrandLogo size={40} title="" />
          </motion.span>
          <span className="font-display text-xl font-semibold tracking-wide text-lux-ivory transition group-hover:text-lux-gold">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href={link.href}
                className="block rounded-full px-4 py-2 text-sm font-medium text-lux-ink-soft transition hover:bg-hover-fill hover:text-lux-gold"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-lux-gold/20 text-lux-gold transition hover:bg-lux-gold/10"
            whileHover={{ scale: 1.08, rotate: 12 }}
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.25 }}
                className="inline-flex"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <motion.a
            href={siteConfig.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden sm:inline-flex !px-5 !py-2.5 text-xs"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <Smartphone size={16} />
            {heroCopy.primaryCta.label}
          </motion.a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-lux-gold/20 text-lux-ivory md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-lux-gold/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-lux-ink-soft transition hover:bg-hover-fill hover:text-lux-gold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-2 w-full"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Smartphone size={16} />
                {heroCopy.primaryCta.label}
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
