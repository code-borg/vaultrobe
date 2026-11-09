import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { heroCopy } from "@/lib/landing-copy";
import { FeatureIcon } from "@/components/icons/FeatureIcon";

// CSS owns this finite entrance so the hero remains a Server Component and
// reaches its final, readable state even when JavaScript is unavailable.
export function Hero() {
  return (
    <section
      id="top"
      className="editorial-hero relative min-h-screen overflow-hidden pb-24 pt-24 md:pb-32 md:pt-28"
    >
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="flex flex-col items-start">
          <p className="hero-eyebrow mb-6 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-lux-gold">
            <FeatureIcon name="Shield" size={14} />
            {heroCopy.eyebrow}
          </p>

          <h1 className="hero-headline font-display font-medium tracking-tight">
            <span className="hero-type-mask">
              <span className="hero-type-reveal text-lux-ivory">{heroCopy.headline}</span>
            </span>{" "}
            <span className="hero-type-mask">
              <span className="hero-type-reveal hero-type-accent italic text-lux-gold">{heroCopy.headlineAccent}</span>
            </span>
          </h1>

          <p className="hero-description mt-7 max-w-md text-base leading-relaxed text-lux-ink-soft">
            {heroCopy.subheadline}
          </p>

          <div className="hero-actions mt-9 flex flex-wrap items-center gap-4">
            <a
              href={heroCopy.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-primary-cta btn-gold"
            >
              {heroCopy.primaryCta.label}
              <ArrowRight size={16} aria-hidden />
            </a>
            <a href={heroCopy.secondaryCta.href} className="hero-secondary-cta btn-ghost">
              {heroCopy.secondaryCta.label}
            </a>
          </div>

          <p className="hero-micro mt-4 text-sm text-lux-ink-faint">{heroCopy.micro}</p>

          <ul className="mt-8 grid w-full grid-cols-1 gap-x-4 gap-y-3 border-t border-lux-gold/20 pt-5 text-xs text-lux-ink-soft sm:grid-cols-2">
            {heroCopy.chips.map(({ label, icon }, index) => (
              <li key={label} className="hero-feature flex items-center gap-2" style={{ animationDelay: `${480 + index * 60}ms` }}>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lux-gold/10 text-lux-gold">
                  <FeatureIcon name={icon} size={12} />
                </span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-phone-presentation relative mx-auto w-full max-w-[300px] sm:max-w-lg lg:max-w-none">
          <div className="relative mx-auto h-[550px] w-full sm:h-[600px] md:h-[640px]">
            <div className="absolute left-0 top-14 hidden w-[215px] -rotate-[5deg] sm:block md:left-2 md:w-[235px]">
              <div className="hero-phone-reveal hero-phone-secondary hero-phone">
                <PhoneScreenshot
                  src="/screenshots/analytics.jpg"
                  alt="Vaultrobe wardrobe analytics: category breakdown, color palette, and most-worn items"
                  sizes="(max-width: 767px) 215px, 235px"
                />
              </div>
            </div>
            <div className="absolute left-1/2 top-1 z-10 w-[240px] -translate-x-1/2 sm:left-auto sm:right-0 sm:top-0 sm:w-[255px] sm:translate-x-0 md:right-4 md:w-[280px]">
              <div className="hero-phone-reveal hero-phone">
                <PhoneScreenshot
                  src="/screenshots/closet.jpg"
                  alt="Vaultrobe closet grid with scanned garments, categories, and laundry tools"
                  sizes="(max-width: 639px) 240px, (max-width: 767px) 255px, 280px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneScreenshot({
  src,
  alt,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className="hero-phone-screen relative aspect-[636/1480] w-full overflow-hidden bg-[#F7F2E8]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain"
        priority={priority}
      />
    </div>
  );
}
