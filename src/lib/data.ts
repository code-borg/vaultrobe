/**
 * Consumer-facing data layer for the Vaultrobe landing site.
 * Source: project-root `vaultrobe-app-details.json`
 * Technical / developer fields are kept internal and not shown in the UI.
 */
import rawData from "../../vaultrobe-app-details.json";
import type {
  AppDetails,
  FeatureCard,
  HeroHighlight,
  OnboardingContent,
  OnboardingStep,
  PhotoTip,
  ShowcaseItem,
} from "./types";

export const app: AppDetails = rawData as AppDetails;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vaultrobe.app";

// ─── Copy helpers ───────────────────────────────────────────────────────────

function titleCase(value: string): string {
  return value
    .split(/(\s+|\/|\(|\))/)
    .map((part) => {
      if (!part || /^[\s/()]+$/.test(part)) return part;
      if (part === part.toUpperCase() && part.length <= 3) return part;
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("");
}

/** Strip developer jargon from product descriptions. */
function consumerCopy(text: string): string {
  return text
    .replace(/\s*built with Jetpack Compose\.?/gi, ".")
    .replace(/\s*with a focus on high-end UX and seamless sharing\.?/gi, ".")
    .replace(/\bmulti-user Android closet management application\b/gi, "digital closet app for you and your family")
    .replace(/\bAndroid closet management application\b/gi, "digital closet app")
    .replace(/\bhigh-end UX\b/gi, "beautiful design")
    .replace(/\s{2,}/g, " ")
    .replace(/\.\s*\./g, ".")
    .trim();
}

/** Friendlier feature titles for marketing. */
function friendlyFeatureTitle(feature: string): string {
  const map: [RegExp, string][] = [
    [/ai garment classification\s*\/\s*scan/i, "AI garment scan"],
    [/background removal/i, "Instant background removal"],
    [/photo editor.*/i, "Built-in photo editor"],
    [/ai outfit recommendations/i, "AI outfit recommendations"],
    [/freeform outfit canvas.*/i, "Freeform outfit canvas"],
    [/laundry tracker.*/i, "Laundry tracker"],
    [/weekly outfit planner/i, "Weekly outfit planner"],
    [/wear history.*/i, "Wear history & calendar"],
    [/wardrobe analytics.*/i, "Wardrobe insights"],
    [/voice remarks.*/i, "Voice notes"],
    [/backup.*/i, "Easy backup"],
    [/credit-based ai.*/i, "Optional AI credits"],
    [/app lock.*/i, "App lock"],
    [/weather-aware.*/i, "Weather-aware outfits"],
    [/multi-dimension outfit scoring.*/i, "Smart outfit scoring"],
    [/onboarding with google sign-in/i, "Quick Google sign-in"],
    [/photo capture guide.*/i, "Photo capture guide"],
    [/digital closet.*/i, "Digital closet grid"],
    [/saved outfit collections/i, "Saved outfit collections"],
    [/multi-profile support/i, "Family profiles"],
  ];
  for (const [re, label] of map) {
    if (re.test(feature)) return label;
  }
  return titleCase(feature.replace(/\s*\/\s*/g, " · ").replace(/\s*\(.*?\)\s*/g, " ").trim());
}

function friendlyFeatureBlurb(feature: string): string {
  const s = feature.toLowerCase();
  if (s.includes("ai") && s.includes("scan"))
    return "Snap a photo and let AI catalog the piece for you.";
  if (s.includes("background"))
    return "Clean studio-style shots without the messy background.";
  if (s.includes("photo editor") || s.includes("crop"))
    return "Crop, rotate, and refine every garment photo.";
  if (s.includes("recommend"))
    return "Get looks that match your style and the day ahead.";
  if (s.includes("canvas") || s.includes("collage"))
    return "Mix and match pieces on a freeform canvas.";
  if (s.includes("laundry"))
    return "Know what’s dirty, in the wash, or ready to wear.";
  if (s.includes("planner") || s.includes("weekly"))
    return "Plan your week of outfits in advance.";
  if (s.includes("wear") || s.includes("history") || s.includes("calendar"))
    return "See what you wore and rediscover favorites.";
  if (s.includes("analytics") || s.includes("stats"))
    return "Understand your wardrobe with simple insights.";
  if (s.includes("voice"))
    return "Add quick spoken notes to any piece.";
  if (s.includes("backup"))
    return "Back up your vault locally or to Google Drive.";
  if (s.includes("credit"))
    return "Use AI when you want — buy credits as you go.";
  if (s.includes("lock") || s.includes("biometric"))
    return "Keep your closet private with fingerprint or PIN.";
  if (s.includes("weather"))
    return "Dress for the forecast, not the guesswork.";
  if (s.includes("scoring"))
    return "See how well an outfit works before you wear it.";
  if (s.includes("onboarding") || s.includes("sign-in"))
    return "Get set up in minutes with Google sign-in.";
  if (s.includes("photo capture") || s.includes("photo guide"))
    return "Helpful tips so every photo looks polished.";
  if (s.includes("closet") || s.includes("wardrobe grid"))
    return "Browse your entire wardrobe in a beautiful grid.";
  if (s.includes("collection"))
    return "Save complete looks for work, weekends, and nights out.";
  if (s.includes("multi-profile") || s.includes("profile"))
    return "Separate closets for everyone in the family.";
  return friendlyFeatureTitle(feature);
}

export function iconForLabel(label: string): string {
  const s = label.toLowerCase();
  if (s.includes("ai") || s.includes("scan") || s.includes("classif"))
    return "Sparkles";
  if (s.includes("background") || s.includes("removal")) return "Eraser";
  if (s.includes("photo editor") || s.includes("crop") || s.includes("editor"))
    return "Crop";
  if (s.includes("recommend") || s.includes("scoring") || s.includes("suggest"))
    return "Wand2";
  if (
    s.includes("canvas") ||
    s.includes("collage") ||
    s.includes("grid") ||
    s.includes("closet") ||
    s.includes("wardrobe")
  )
    return "LayoutGrid";
  if (s.includes("planner") || s.includes("plan") || s.includes("weekly"))
    return "CalendarDays";
  if (s.includes("laundry")) return "Shirt";
  if (s.includes("wear") || s.includes("history") || s.includes("calendar"))
    return "History";
  if (s.includes("analytics") || s.includes("stats") || s.includes("insight"))
    return "BarChart3";
  if (s.includes("voice") || s.includes("speech") || s.includes("mic"))
    return "Mic";
  if (s.includes("lock") || s.includes("biometric") || s.includes("pin"))
    return "Fingerprint";
  if (s.includes("profile") || s.includes("family") || s.includes("multi-profile"))
    return "Users";
  if (s.includes("backup") || s.includes("drive")) return "Cloud";
  if (s.includes("credit")) return "CreditCard";
  if (s.includes("weather")) return "CloudSun";
  if (s.includes("sign-in") || s.includes("onboarding")) return "LogIn";
  if (s.includes("photo") || s.includes("camera") || s.includes("capture"))
    return "Camera";
  if (s.includes("collection") || s.includes("outfit")) return "Layers";
  if (s.includes("home") || s.includes("dashboard")) return "Home";
  return "Sparkles";
}

const HIGHLIGHT_KEYWORDS = ["ai", "multi-profile", "family", "recommend", "scan"];

function isHighlightFeature(feature: string): boolean {
  const s = feature.toLowerCase();
  return HIGHLIGHT_KEYWORDS.some((k) => s.includes(k));
}

/** Features that are too product-ops / billing for a lifestyle landing. */
const HIDDEN_FEATURES = [/credit-based/i, /in-app purchases/i];

// ─── Site config ────────────────────────────────────────────────────────────

const rawDescription = app.shortDescription || app.fullDescription;

export const siteConfig = {
  name: app.appName,
  /** Short consumer tagline — privacy-first positioning */
  tagline: "Your wardrobe, private and clear.",
  /** Meta / social description */
  description:
    "Catalog your closet, uncover wear insights, and get smart, weather-aware outfit recommendations. Vaultrobe is a privacy-first Android wardrobe app — on-device by design.",
  fullDescription: consumerCopy(app.fullDescription || rawDescription),
  url: siteUrl,
  packageName: app.packageName,
  version: app.versionName,
  locale: "en_US",
  twitterHandle: `@${app.appName.toLowerCase()}`,
  playStoreUrl: `https://play.google.com/store/apps/details?id=${app.packageName}`,
};

// ─── Hero ───────────────────────────────────────────────────────────────────

export const heroHighlights: HeroHighlight[] = app.keyFeatures
  .filter((f) => !HIDDEN_FEATURES.some((re) => re.test(f)))
  .slice(0, 3)
  .map((label) => ({
    label: friendlyFeatureTitle(label),
    icon: iconForLabel(label),
  }));

// ─── Features ───────────────────────────────────────────────────────────────

export const featureCards: FeatureCard[] = app.keyFeatures
  .filter((f) => !HIDDEN_FEATURES.some((re) => re.test(f)))
  .map((feature) => ({
    id: feature,
    title: friendlyFeatureTitle(feature),
    description: friendlyFeatureBlurb(feature),
    icon: iconForLabel(feature),
    highlight: isHighlightFeature(feature),
  }));

// ─── Showcase (user-facing screens only) ────────────────────────────────────

const ACCENTS = ["gold", "rose", "emerald"] as const;

const SHOWCASE_PRIORITY = [
  "Wardrobe Grid / Closet",
  "Closet",
  "Home / Dashboard",
  "Home",
  "AI Scan",
  "Outfit Planner",
  "Plan",
  "Laundry Tracker",
  "Laundry",
  "Wear Calendar",
  "Outfit Collections",
  "Outfits",
  "Photo Editor",
  "Stats",
  "Profiles",
];

/** Internal / scaffold screens — not for marketing showcase */
const HIDDEN_SCREENS =
  /splash|scaffold|tabs|buy credits|log wear|product info|camera preview|app lock|auth|welcome|settings|add to wardrobe|item detail|main tabs/i;

function pickShowcaseScreens(screens: string[], max = 6): string[] {
  const unique = Array.from(
    new Set(
      screens
        .map((s) => s.trim())
        .filter((s) => s && !HIDDEN_SCREENS.test(s))
    )
  );
  const prioritized: string[] = [];
  for (const name of SHOWCASE_PRIORITY) {
    const hit = unique.find((s) => s.toLowerCase() === name.toLowerCase());
    if (hit && !prioritized.includes(hit)) prioritized.push(hit);
  }
  for (const s of unique) {
    if (prioritized.length >= max) break;
    if (!prioritized.includes(s)) prioritized.push(s);
  }
  return prioritized.slice(0, max);
}

function screenBlurb(screen: string): string {
  const s = screen.toLowerCase();
  if (s.includes("closet") || s.includes("wardrobe") || s.includes("grid"))
    return "Browse every piece in a polished digital closet.";
  if (s.includes("home") || s.includes("dashboard"))
    return "Your style hub — outfits, plans, and what’s next.";
  if (s.includes("scan") || s.includes("ai"))
    return "Point, shoot, and catalog garments in seconds.";
  if (s.includes("plan"))
    return "Map looks onto your week with ease.";
  if (s.includes("laundry"))
    return "Track clothes from hamper to ready-to-wear.";
  if (s.includes("calendar") || s.includes("wear"))
    return "A calendar of what you wore and loved.";
  if (s.includes("collection") || s.includes("outfit"))
    return "Save complete looks for any occasion.";
  if (s.includes("editor") || s.includes("photo"))
    return "Fine-tune garment photos until they shine.";
  if (s.includes("stats"))
    return "Gentle insights into how you wear your wardrobe.";
  if (s.includes("profile"))
    return "A closet for everyone in the household.";
  return `Explore ${screen} in ${app.appName}.`;
}

function friendlyScreenTitle(screen: string): string {
  return screen
    .replace(/\s*\/\s*/g, " · ")
    .replace(/\bGrid\b/i, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function visualKeyForScreen(screen: string): string {
  const s = screen.toLowerCase();
  if (s.includes("closet") || s.includes("wardrobe") || s.includes("grid"))
    return "closet";
  if (s.includes("collection") || (s.includes("outfit") && !s.includes("plan")))
    return "collections";
  if (s.includes("scan") || s.includes("ai") || s.includes("camera"))
    return "scan";
  if (s.includes("calendar") || s.includes("wear")) return "calendar";
  if (s.includes("laundry")) return "laundry";
  if (s.includes("plan")) return "planner";
  if (s.includes("home") || s.includes("dashboard")) return "home";
  if (s.includes("editor") || s.includes("photo")) return "editor";
  return "default";
}

export const showcaseItems: ShowcaseItem[] = pickShowcaseScreens(
  app.mainScreens
).map((screen, i) => ({
  id: screen,
  title: friendlyScreenTitle(screen),
  description: screenBlurb(screen),
  accent: ACCENTS[i % ACCENTS.length],
  visual: visualKeyForScreen(screen),
}));

// ─── Onboarding ─────────────────────────────────────────────────────────────

const STEP_TITLES = ["Profile", "Style", "Starter Items", "Complete"] as const;

function parseOnboarding(highlights: string[]): OnboardingContent {
  const cleaned = highlights.map((h) => h.replace(/\uFFFD/g, "—").trim());

  const flowSummary =
    cleaned
      .find((h) => /^onboarding steps:/i.test(h))
      ?.replace(/^onboarding steps:\s*/i, "") ?? null;

  const steps: OnboardingStep[] = [];
  for (const title of STEP_TITLES) {
    const line = cleaned.find((h) =>
      new RegExp(`^${title}\\s*:`, "i").test(h)
    );
    if (line) {
      const description = line
        .replace(new RegExp(`^${title}\\s*:\\s*`, "i"), "")
        .replace(/nudge \(target 3\)/gi, "to add a few favorites")
        .replace(/\+ continue into the vault/gi, "then open your vault");
      steps.push({
        step: steps.length + 1,
        title,
        description,
      });
    }
  }

  if (steps.length === 0 && flowSummary) {
    flowSummary
      .split(/\s*[→\->]+\s*|,\s*/)
      .map((p) => p.trim())
      .filter(Boolean)
      .forEach((title, i) => {
        steps.push({ step: i + 1, title, description: title });
      });
  }

  const photoGuideTitle =
    cleaned
      .find((h) => /^photo guide sheet title:/i.test(h))
      ?.replace(/^photo guide sheet title:\s*/i, "")
      .trim() || "Tips for perfect photos";

  const photoGuideSubtitle =
    cleaned
      .find((h) => /^photo guide subtitle:/i.test(h))
      ?.replace(/^photo guide subtitle:\s*/i, "")
      .trim() ||
    "A few seconds of care makes every piece look its best.";

  const photoTips: PhotoTip[] = [];
  const tipTitleKeys = [
    "lighting",
    "background",
    "framing",
    "preparation",
    "bonus",
  ];
  for (const h of cleaned) {
    const colonIdx = h.indexOf(":");
    if (colonIdx < 1) continue;
    const maybeTitle = h.slice(0, colonIdx).replace(/^[^\w]+/, "").trim();
    const maybeBody = h.slice(colonIdx + 1).trim();
    if (
      tipTitleKeys.some((t) => maybeTitle.toLowerCase().includes(t)) &&
      maybeBody.length > 10
    ) {
      photoTips.push({
        title: titleCase(maybeTitle),
        description: maybeBody,
      });
    }
  }

  // Hide raw preference-collection / internal onboarding notes
  const extras = cleaned.filter((h) => {
    if (!h) return false;
    if (/^onboarding steps:/i.test(h)) return false;
    if (/^(profile|style|starter items|complete):/i.test(h)) return false;
    if (/^photo guide/i.test(h)) return false;
    if (/lighting|background|framing|preparation|bonus for/i.test(h))
      return false;
    if (/collects user preference/i.test(h)) return false;
    if (/starter wardrobe nudge/i.test(h)) return false;
    if (/photo guide tips present/i.test(h)) return false;
    // Keep friendly extras like Google Sign-In note
    return /google sign-in|welcome/i.test(h);
  });

  return {
    flowSummary,
    steps,
    photoGuideTitle,
    photoGuideSubtitle,
    photoTips,
    extras: extras.map((e) =>
      e
        .replace(/Welcome \/ pre-auth entry with /i, "")
        .replace(/Google Sign-In/i, "Sign in with Google to get started")
    ),
  };
}

export const onboarding: OnboardingContent = parseOnboarding(
  app.onboardingHighlights
);

export const onboardingSteps = onboarding.steps;
export const photoTips = onboarding.photoTips;

// ─── Privacy (consumer wording) ─────────────────────────────────────────────

function humanizePrivacy(item: string): string {
  const s = item.toLowerCase();
  if (s.includes("room database") || (s.includes("stored locally") && s.includes("wardrobe")))
    return "Your wardrobe lives privately on your phone.";
  if (s.includes("datastore") || (s.includes("preferences") && s.includes("locally")))
    return "Your preferences stay on your device.";
  if (s.includes("google drive"))
    return "Optional Google Drive backup — only when you turn it on.";
  if (s.includes("zip") || s.includes("saf"))
    return "Export a personal backup anytime.";
  if (s.includes("firebase") || s.includes("authentication"))
    return "Sign-in is only used for optional AI features.";
  if (s.includes("cloud function") || s.includes("sends images"))
    return "Photos leave your device only when you run an AI scan.";
  if (s.includes("app lock") || s.includes("biometric"))
    return "Optional lock with fingerprint or PIN.";
  if (s.includes("location") || s.includes("weather"))
    return "Location is only used for weather outfits, when you enable it.";
  if (s.includes("no ad"))
    return "No ads. Ever.";
  return item.replace(/\s*\([^)]*\)/g, "").trim();
}

export const privacyItems: string[] = app.privacyHighlights.map(humanizePrivacy);
