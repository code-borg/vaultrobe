"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  className?: string;
  /** Pixel size of the square mark (default 36). */
  size?: number;
  /** Accessible label; set empty when nested in a labeled link. */
  title?: string;
};

/**
 * Vaultrobe monogram — gold V on dark tile, matches the favicon.
 * Always high-contrast in light and dark themes.
 */
export function BrandLogo({
  className,
  size = 36,
  title = "Vaultrobe",
}: BrandLogoProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `vaultrobe-logo-grad-${uid}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={cn(
        "shrink-0 rounded-[22%] shadow-[0_0_0_1px_rgba(201,169,110,0.35),0_4px_16px_rgba(0,0,0,0.35)]",
        className
      )}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title || undefined}
    >
      {title ? <title>{title}</title> : null}
      <rect width="64" height="64" rx="14" fill="#0E0C0A" />
      <rect
        x="1.5"
        y="1.5"
        width="61"
        height="61"
        rx="12.5"
        fill="none"
        stroke="#E5CA72"
        strokeOpacity="0.55"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id={gradId}
          x1="12"
          y1="10"
          x2="52"
          y2="54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5E082" />
          <stop offset="0.45" stopColor="#E5CA72" />
          <stop offset="1" stopColor="#C9A038" />
        </linearGradient>
      </defs>
      {/* Slightly bolder V for small sizes */}
      <path
        d="M16.5 14h9.2l6.3 24.8L38.3 14H47.5L36.8 50h-9.6L16.5 14z"
        fill={`url(#${gradId})`}
      />
    </svg>
  );
}
