/**
 * Locked marketing copy for the Vaultrobe landing page.
 * Components render these strings only — no inline marketing sentences.
 */
import { siteConfig } from "./data";
import type {
  EasyStartCopy,
  FinalCtaCopy,
  FooterCopy,
  GettingStartedCopy,
  HeroCopy,
  InsightsCopy,
  LandingNavLink,
  OutfitsCopy,
  PrivacyCopy,
  ProblemCopy,
  SeoCopy,
} from "./types";

const play = siteConfig.playStoreUrl;

export const navLinks: LandingNavLink[] = [
  { href: "#why", label: "Why" },
  { href: "#insights", label: "Insights" },
  { href: "#outfits", label: "Outfits" },
  { href: "#privacy", label: "Privacy" },
  { href: "#getting-started", label: "Get started" },
];

export const seoCopy: SeoCopy = {
  title: "Vaultrobe — Privacy-first digital wardrobe for Android",
  description:
    "Catalog your closet, uncover wear insights, and get smart, weather-aware outfit recommendations. Vaultrobe is a privacy-first Android wardrobe app — on-device by design.",
  ogTitle: "Vaultrobe — Your wardrobe, private and clear",
  ogDescription:
    "A calm digital closet with bulk upload, wardrobe insights, and thoughtful outfit recommendations. Built for Android. Built for privacy.",
  keywords: [
    "digital wardrobe",
    "privacy-first closet app",
    "Android wardrobe",
    "on-device wardrobe",
    "weather-aware outfit recommendations",
    "wardrobe analytics",
    "bulk upload closet",
    "garment scanner",
    "digital closet",
    "family wardrobe profiles",
    "Vaultrobe",
  ],
};

export const heroCopy: HeroCopy = {
  eyebrow: "Privacy-first digital wardrobe · Android",
  headline: "Your wardrobe. Private.",
  headlineAccent: "Thoughtfully intelligent.",
  subheadline:
    "Vaultrobe helps you spend less time deciding what to wear and more time feeling good in your clothes. See what you actually own, understand how you wear it, and get thoughtful outfit suggestions — all while keeping your wardrobe completely private on your device.",
  chips: [
    { label: "On-device by design", icon: "Shield" },
    { label: "Bulk upload & garment scan", icon: "Upload" },
    { label: "Insights that actually help", icon: "BarChart3" },
  ],
  primaryCta: { label: "Get on Google Play", href: play },
  secondaryCta: { label: "See how it works", href: "#why" },
  micro: "No stylists. No wardrobe feed. Just your clothes, clearly.",
};

export const problemCopy: ProblemCopy = {
  label: "Sound familiar?",
  title: "A full closet. Still nothing to wear.",
  subtitle:
    "The problem usually isn’t a lack of clothes — it’s a lack of clarity. When your wardrobe is scattered across drawers, laundry piles, and half-remembered photos, every morning becomes a restart.",
  cards: [
    {
      title: "You can’t see what you own",
      description:
        "Pieces hide in drawers, laundry, and camera rolls. Without one calm view of your closet, good clothes get forgotten.",
      icon: "EyeOff",
    },
    {
      title: "The same outfits keep winning",
      description:
        "A few favorites do all the work while the rest go quiet. “Never worn” is often just never seen.",
      icon: "History",
    },
    {
      title: "The day doesn’t match the hangers",
      description:
        "Weather shifts. Plans change. Your closet stays the same — so you guess, re-wear, or give up.",
      icon: "CloudSun",
    },
    {
      title: "Style help wants your privacy",
      description:
        "Too many apps trade convenience for access, feeds, or a public version of your wardrobe. You shouldn’t have to share your closet to use it better.",
      icon: "ShieldOff",
    },
  ],
  bridge:
    "Vaultrobe doesn’t replace your taste. It makes your wardrobe legible — privately.",
};

export const insightsCopy: InsightsCopy = {
  label: "Insights",
  title: "See what you actually wear.",
  subtitle:
    "Most people own far more clothes than they regularly use. Vaultrobe gives you clear, honest visibility into your wardrobe so you can make better decisions about what to keep, wear, and buy.",
  items: [
    {
      title: "Never Worn items",
      description:
        "Discover pieces that deserve another chance — or a respectful goodbye.",
      icon: "Shirt",
      highlight: true,
    },
    {
      title: "Category & color balance",
      description:
        "Understand the real composition of your wardrobe, not just what you think it is.",
      icon: "LayoutGrid",
    },
    {
      title: "Wear frequency & history",
      description:
        "See which clothes actually earn their place over time.",
      icon: "BarChart3",
    },
    {
      title: "Laundry & care status",
      description:
        "Know what’s ready, what’s waiting, and what needs attention.",
      icon: "Layers",
    },
  ],
  supporting: "Real clarity. Not guesswork.",
};

export const outfitsCopy: OutfitsCopy = {
  label: "Outfits",
  title: "Outfits that fit your day — not a trend feed.",
  subtitle:
    "Smart, weather-aware recommendations shaped by color harmony, formality, and how your pieces work together — refined by the looks you skip.",
  items: [
    {
      title: "Weather-aware",
      description: "Dress for the forecast, not the guesswork.",
      icon: "CloudSun",
    },
    {
      title: "Color harmony",
      description: "Combinations that feel intentional, not accidental.",
      icon: "Palette",
    },
    {
      title: "Formality & style coherence",
      description: "Work, weekend, and evening without the random clash.",
      icon: "Layers",
    },
    {
      title: "Learns from you",
      description:
        "Every “not today” quietly improves the next suggestion.",
      icon: "ThumbsDown",
    },
    {
      title: "Thoughtful by design",
      description: "Clear, rule-based intelligence you can trust.",
      icon: "Scale",
      highlight: true,
    },
  ],
  reassurance:
    "Recommendations when you want them. Your judgment stays in charge.",
};

export const easyStartCopy: EasyStartCopy = {
  label: "Easy start",
  title: "Your closet, on your phone — without the endless setup.",
  subtitle:
    "Start with what you already have. Bulk upload from your gallery, scan garments with AI assistance, and get clean product-style shots with background removal.",
  items: [
    {
      title: "Bulk upload from gallery",
      description:
        "Add many pieces at once — not one slow photo at a time.",
      icon: "Upload",
      highlight: true,
    },
    {
      title: "AI garment scanning",
      description:
        "Capture and organize details faster, so cataloging doesn’t become a project.",
      icon: "Sparkles",
    },
    {
      title: "Background removal",
      description:
        "Studio-clean images without a photoshoot or perfect lighting ritual.",
      icon: "Eraser",
    },
    {
      title: "Family profiles",
      description:
        "Separate wardrobes for everyone in the home — when you’re ready.",
      icon: "Users",
    },
  ],
  supporting: "Getting started should not require a weekend.",
};

export const privacyCopy: PrivacyCopy = {
  label: "Privacy",
  title: "Your wardrobe stays completely private.",
  subtitle:
    "Vaultrobe is built with privacy at its core. Your clothes, photos, habits, and preferences live on your device — not in the cloud and never shared with stylists or anyone else.",
  items: [
    {
      title: "On-device by design",
      description: "Your wardrobe data never leaves your phone.",
      icon: "Smartphone",
      highlight: true,
    },
    {
      title: "No stylists. No social features.",
      description: "No one sees your closet except you.",
      icon: "Shield",
    },
    {
      title: "Optional encrypted backup",
      description: "You control when and if it happens.",
      icon: "Cloud",
    },
    {
      title: "Intelligent suggestions without intrusion",
      description:
        "Smart recommendations that don’t require sending your data anywhere.",
      icon: "Sparkles",
    },
  ],
  closer:
    "Privacy isn’t a feature we added. It’s how Vaultrobe was built.",
};

export const gettingStartedCopy: GettingStartedCopy = {
  label: "Get started",
  title: "Ready in minutes.",
  subtitle:
    "A short path from install to a wardrobe you can actually use.",
  steps: [
    {
      step: 1,
      title: "Download Vaultrobe",
      description: "Install on Android and open the app.",
    },
    {
      step: 2,
      title: "Add your first pieces",
      description: "Bulk upload from your gallery and scan as you go.",
    },
    {
      step: 3,
      title: "Explore insights & outfits",
      description:
        "See what’s in your closet — then get weather-aware suggestions for the day.",
    },
  ],
  note: "Family profiles can wait. Day one is about your wardrobe.",
  photoGuide: {
    title: "Tips for better results",
    subtitle:
      "A few simple habits when adding clothes will give you cleaner results and a more useful wardrobe.",
    tips: [
      {
        title: "Lighting",
        description:
          "Use even, natural light when possible. Avoid harsh shadows or direct flash.",
      },
      {
        title: "Background",
        description:
          "A plain, solid-colored background (white or light gray) works best.",
      },
      {
        title: "Framing & Angle",
        description:
          "Lay garments flat or hang them straight. Capture the full item with some breathing room.",
      },
      {
        title: "Multiple angles (optional)",
        description:
          "For patterned or detailed pieces, add a second photo of the texture or print.",
      },
      {
        title: "Preparation",
        description:
          "Smooth out wrinkles and remove tags or stickers before photographing.",
      },
    ],
    closer:
      "Good photos lead to better organization and more accurate suggestions.",
  },
};

export const finalCtaCopy: FinalCtaCopy = {
  title: "A wardrobe that works with you — privately.",
  subtitle:
    "Catalog with ease. Understand what you own. Dress for the day with smart recommendations — designed to stay on your device.",
  primaryCta: { label: "Get on Google Play", href: play },
  secondaryCta: { label: "See how it works", href: "#why" },
  micro: "Your clothes. Your data. Your judgment.",
};

export const footerCopy: FooterCopy = {
  tagline: "Privacy-first digital wardrobe for Android.",
  productLinks: [
    { href: "#insights", label: "Insights" },
    { href: "#outfits", label: "Outfits" },
    { href: "#start", label: "Easy start" },
    { href: "#privacy", label: "Privacy" },
  ],
};

/** Feature list for structured data (concise product capabilities). */
export const jsonLdFeatures = [
  "On-device digital closet",
  "Bulk gallery upload",
  "AI garment scanning",
  "Background removal",
  "Wardrobe insights & never-worn",
  "Weather-aware outfit recommendations",
  "Laundry pipeline",
  "Family profiles",
  "App lock",
];
