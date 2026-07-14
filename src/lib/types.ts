/** Shape of vaultrobe-app-details.json (project root) */

export interface CreditPack {
  productId: string;
  credits: number;
  displayPrice: string;
}

export interface Monetization {
  model: string;
  premiumFeatures: string[];
  creditPacks: CreditPack[];
  pricingHints: string[];
  notes: string[];
}

export interface Permission {
  name: string;
  description: string;
}

export interface SdkInfo {
  minSdk: number;
  targetSdk: number;
  compileSdk: number;
}

export interface ColorPalette {
  semantic: {
    primary: string;
    accent: string;
    background: string;
    surface: string;
    onSurface: string;
  };
  fromColorsXml: Record<string, string>;
  fromThemeKotlin: Record<string, string>;
}

export interface AppDetails {
  appName: string;
  packageName: string;
  versionName: string;
  versionCode: number;
  sdk: SdkInfo;
  shortDescription: string;
  tagline: string;
  fullDescription: string;
  keyFeatures: string[];
  themes: string[];
  colorPalette: ColorPalette;
  mainScreens: string[];
  techStack: string[];
  privacyHighlights: string[];
  onboardingHighlights: string[];
  monetization: Monetization;
  permissions: Permission[];
}

/** View models derived from AppDetails for UI sections */

export interface FeatureCard {
  /** Original string from keyFeatures */
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight: boolean;
}

export interface ShowcaseItem {
  /** Original string from mainScreens */
  id: string;
  title: string;
  description: string;
  accent: "gold" | "rose" | "emerald";
  /** Visual mockup variant key */
  visual: string;
}

export interface OnboardingStep {
  step: number;
  title: string;
  description: string;
}

export interface PhotoTip {
  title: string;
  description: string;
}

export interface OnboardingContent {
  flowSummary: string | null;
  steps: OnboardingStep[];
  photoGuideTitle: string;
  photoGuideSubtitle: string;
  photoTips: PhotoTip[];
  extras: string[];
}

export interface HeroHighlight {
  label: string;
  icon: string;
}

/** Marketing landing page view models */

export interface LandingCta {
  label: string;
  href: string;
}

export interface LandingChip {
  label: string;
  icon: string;
}

export interface LandingCard {
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

export interface LandingStep {
  step: number;
  title: string;
  description: string;
}

export interface LandingNavLink {
  href: string;
  label: string;
}

export interface HeroCopy {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  chips: LandingChip[];
  primaryCta: LandingCta;
  secondaryCta: LandingCta;
  micro: string;
}

export interface SectionCopy {
  label: string;
  title: string;
  subtitle: string;
}

export interface ProblemCopy extends SectionCopy {
  cards: LandingCard[];
  bridge: string;
}

export interface InsightsCopy extends SectionCopy {
  items: LandingCard[];
  supporting: string;
}

export interface OutfitsCopy extends SectionCopy {
  items: LandingCard[];
  reassurance: string;
}

export interface EasyStartCopy extends SectionCopy {
  items: LandingCard[];
  supporting: string;
}

export interface PrivacyCopy extends SectionCopy {
  items: LandingCard[];
  closer: string;
}

export interface GettingStartedCopy extends SectionCopy {
  steps: LandingStep[];
  note: string;
  photoGuide: {
    title: string;
    subtitle: string;
    tips: PhotoTip[];
    closer: string;
  };
}

export interface FinalCtaCopy {
  title: string;
  subtitle: string;
  primaryCta: LandingCta;
  secondaryCta: LandingCta;
  micro: string;
}

export interface FooterCopy {
  tagline: string;
  productLinks: LandingNavLink[];
  madeFor: string;
}

export interface SeoCopy {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  keywords: string[];
}
