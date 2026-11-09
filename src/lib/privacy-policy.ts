/**
 * Public privacy policy and the Google Play Data safety answers that match it.
 * Facts are taken from the Android app (manifest, photo picker, Firebase callables).
 */
import { siteConfig } from "./data";

export const policyUpdated = "November 4, 2026";

export const policyContactEmail = "privacy@vaultrobe.app";

/** Play Console → Target audience and content. Not directed at children under 13. */
export const targetAudience = {
  label: "13+",
  ageGroups: ["13–15", "16–17", "18 and over"],
  summary:
    "Vaultrobe is a general wardrobe app for people 13 and older. It is not directed at children under 13. In Play Console, select 13–15, 16–17, and 18 and over, and leave every under-13 group unselected.",
};

export interface PolicySection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export const policyIntro = `This policy describes how ${siteConfig.name} (${siteConfig.packageName}) handles information when you catalog clothes, index garments, and use virtual try-on. It is the privacy policy URL for the Google Play listing.`;

export const policySections: PolicySection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    paragraphs: [
      `${siteConfig.name} is an Android digital wardrobe app. The operator of the app and this site is ${siteConfig.name}. Contact ${policyContactEmail} for privacy requests.`,
      `The app stores your closet catalog on your phone. Photos leave the phone when you choose a feature that needs cloud processing, or when you turn on backup.`,
    ],
  },
  {
    id: "audience",
    title: "Who the app is for",
    paragraphs: [
      targetAudience.summary,
      `Onboarding can record an age range you choose, including “Under 18,” as a style preference stored on the device. That range is not a check that lets children under 13 use the app. Do not use Vaultrobe if you are under 13.`,
    ],
  },
  {
    id: "photos",
    title: "Photos for wardrobe indexing and virtual try-on",
    paragraphs: [
      `Vaultrobe collects photos you take or choose. Those photos are used for wardrobe management and virtual try-on. The app does not collect videos.`,
      `You can photograph a garment with the camera, or choose existing pictures with the Android photo picker. The picker gives the app access only to the images you select. Virtual try-on uses two photos you provide: a photo of a person and a photo of a garment.`,
      `Two features send those photos off the device, and only after you run them:`,
    ],
    bullets: [
      "Wardrobe indexing. The app sends the garment image to the Firebase HTTPS callable function classifyWardrobeItem. The function returns catalog labels (category, color, formality, and similar attributes) so the item can be filed in your closet.",
      "Virtual try-on. The app sends the person photo and the garment photo to the Firebase HTTPS callable function virtualTryOn. The function returns a generated try-on image, which is saved back on your phone.",
      "On-device work stays on the phone. Your closet database, background removal with ML Kit, cropping, and outfit suggestions that do not call those functions are processed locally.",
    ],
  },
  {
    id: "transit",
    title: "How images are protected in transit",
    paragraphs: [
      `Images sent for indexing or virtual try-on travel over HTTPS. The app calls Firebase Cloud Functions with authenticated HTTPS callable requests. Google’s Firebase and Cloud infrastructure terminates that TLS connection and runs the function.`,
      `Before upload, indexing images are scaled down on the device and encoded as JPEG. Try-on images are also encoded as JPEG on the device. The payload is the image data needed for that request, plus a fixed cataloging prompt for indexing.`,
      `A Firebase user is required for those calls. If you are not already signed in with Google, the app can open an anonymous Firebase session for the request. Sign-in traffic also uses HTTPS.`,
    ],
  },
  {
    id: "other-data",
    title: "Other information",
    paragraphs: [
      `The closet itself — items, outfits, wear history, laundry state, and preferences such as style, gender, age range, height, and body shape — is stored in on-device storage (a local database and preferences). Those fields are sent off the phone if you export a backup or turn on Google Drive backup.`,
    ],
    bullets: [
      "Account. Google Sign-In, when you use it, provides your email address, name, and a Google ID token. Firebase Authentication keeps a user ID for that account. Anonymous sign-in creates a Firebase user ID without an email.",
      "Location. With your permission, the app reads approximate or precise location to request a weather forecast from Open-Meteo over HTTPS. If device location is unavailable, the app may request an approximate location from ipapi.co using your IP address.",
      "Voice. Optional voice remarks record audio on the device. Speech-to-text uses Android’s speech recognizer, which can send the utterance to Google’s speech service over the network.",
      "Purchases. Credit packs are sold with Google Play Billing. Google processes payment. The app records the credit balance on the device.",
      "Security signals. Firebase App Check (Play Integrity) sends an integrity token to Firebase so AI functions can reject abused clients.",
      "Backup. Google Drive backup is off until you connect it. It then stores an app backup in your Drive app-data folder. You can also export a local file.",
    ],
  },
  {
    id: "permissions",
    title: "App permissions",
    paragraphs: [
      `AndroidManifest.xml for ${siteConfig.packageName} requests CAMERA so you can capture garment photos and photos for virtual try-on. The camera is optional hardware; the app still installs on devices without one.`,
      `The manifest does not request READ_MEDIA_IMAGES or READ_EXTERNAL_STORAGE. Choosing a photo from the gallery uses the system photo picker, which does not need broad access to your library.`,
      `The manifest also requests RECORD_AUDIO for voice remarks, ACCESS_COARSE_LOCATION and ACCESS_FINE_LOCATION for weather outfits, INTERNET and ACCESS_NETWORK_STATE for network features, USE_BIOMETRIC for the optional app lock, and POST_NOTIFICATIONS, SCHEDULE_EXACT_ALARM, and RECEIVE_BOOT_COMPLETED for wear reminders.`,
    ],
  },
  {
    id: "use-and-sharing",
    title: "Use and sharing",
    paragraphs: [
      `Photos are used to build and show your wardrobe and to produce a try-on image you asked for. They are not sold, and they are not used for advertising. The app has no ad SDK.`,
      `Firebase (Google) processes indexing and try-on images, authentication, remote configuration, and App Check as a service provider for those features. Open-Meteo receives coordinates when a forecast is requested. ipapi.co receives a request from your network when IP location is used. Google’s speech service may receive voice audio when you dictate a remark. Google Drive receives a backup only after you connect backup. Google Play processes purchases.`,
    ],
  },
  {
    id: "delete-your-data",
    title: "Retention and deletion",
    paragraphs: [
      `Garment photos, try-on results, and the closet catalog remain on your device until you delete the item or uninstall the app. Device backup, if enabled in Android settings, may keep a copy with your Google account.`,
      `Indexing and try-on photos are transmitted to complete that request. Email ${policyContactEmail} to ask us to delete your Firebase account and any records tied to it. Use the Google account you signed in with, or include the address shown in the app. We will delete the Firebase Authentication user. Uninstalling the app removes its on-device files.`,
      `This page is the web request point for account and data deletion: ${siteConfig.url}/privacy#delete-your-data.`,
    ],
  },
  {
    id: "children",
    title: "Children",
    paragraphs: [
      `Vaultrobe is not directed at children under 13, and we do not knowingly collect personal information from them. If you believe a child under 13 has used the app, email ${policyContactEmail} and we will delete the associated account data we can identify.`,
    ],
  },
  {
    id: "changes",
    title: "Changes",
    paragraphs: [
      `We will post changes on this page and update the date above. Continued use of the app after the new date means the updated policy applies to later processing.`,
    ],
  },
];

export interface DataSafetyRow {
  type: string;
  collected: string;
  shared: string;
  purpose: string;
  transit: string;
}

/** Answers to copy into Play Console → App content → Data safety. */
export const dataSafety = {
  collectsOrShares: "Yes",
  encryptedInTransit:
    "Yes. Photos for wardrobe indexing and virtual try-on are sent with HTTPS through Firebase callable functions. Sign-in, weather, speech recognition, and backup use HTTPS as well.",
  deletion:
    "Yes. Users delete items in the app, uninstall to remove on-device data, and email privacy@vaultrobe.app to delete the Firebase account. Web URL: /privacy#delete-your-data.",
  rows: [
    {
      type: "Photos and videos — Photos",
      collected: "Yes",
      shared: "No. Firebase processes the photo for the app. Optional Drive backup is user-initiated.",
      purpose:
        "App functionality. Wardrobe management (indexing and catalog) and virtual try-on.",
      transit: "HTTPS via Firebase Cloud Functions",
    },
    {
      type: "Photos and videos — Videos",
      collected: "No",
      shared: "No",
      purpose: "The app does not collect videos.",
      transit: "—",
    },
    {
      type: "Email address, name, user IDs",
      collected: "Yes, when you use Google Sign-In or anonymous Firebase sign-in",
      shared: "No. Held in Firebase Authentication.",
      purpose: "Account management and app functionality (AI calls require a Firebase user).",
      transit: "HTTPS",
    },
    {
      type: "Approximate and precise location",
      collected: "Yes, if you allow location",
      shared: "Yes, with Open-Meteo (coordinates) or ipapi.co (IP lookup) to fetch weather.",
      purpose: "App functionality. Weather-aware outfit suggestions.",
      transit: "HTTPS",
    },
    {
      type: "Voice or sound recordings",
      collected: "Yes, if you record a voice remark or use speech-to-text",
      shared: "The recording file stays on the device. Speech-to-text may be processed by Google’s speech service.",
      purpose: "App functionality. Voice remarks on a garment.",
      transit: "HTTPS when the recognizer uses the network",
    },
    {
      type: "Device or other IDs",
      collected: "Yes. Firebase Authentication user ID and App Check integrity token.",
      shared: "Processed by Firebase to authenticate and protect AI functions.",
      purpose: "App functionality, fraud prevention, and account management.",
      transit: "HTTPS",
    },
  ] satisfies DataSafetyRow[],
};

export interface ManifestPermission {
  name: string;
  declared: boolean;
  purpose: string;
}

export const manifestPermissions: ManifestPermission[] = [
  {
    name: "android.permission.CAMERA",
    declared: true,
    purpose: "Capture garment photos and photos for virtual try-on.",
  },
  {
    name: "android.permission.READ_MEDIA_IMAGES",
    declared: false,
    purpose:
      "Not declared. Gallery selection uses the Android photo picker (PickVisualMedia), which returns only the images the user picks.",
  },
  {
    name: "android.permission.READ_EXTERNAL_STORAGE",
    declared: false,
    purpose:
      "Not declared. Older broad storage access is unused for the same photo-picker flow.",
  },
  {
    name: "android.permission.RECORD_AUDIO",
    declared: true,
    purpose: "Voice remarks and speech-to-text.",
  },
  {
    name: "android.permission.ACCESS_COARSE_LOCATION",
    declared: true,
    purpose: "Approximate location for weather outfits.",
  },
  {
    name: "android.permission.ACCESS_FINE_LOCATION",
    declared: true,
    purpose: "Precise location for weather outfits.",
  },
  {
    name: "android.permission.INTERNET",
    declared: true,
    purpose: "Firebase AI calls, sign-in, weather, and optional backup.",
  },
  {
    name: "android.permission.ACCESS_NETWORK_STATE",
    declared: true,
    purpose: "Check connectivity before network features.",
  },
  {
    name: "android.permission.USE_BIOMETRIC",
    declared: true,
    purpose: "Optional app lock.",
  },
  {
    name: "android.permission.POST_NOTIFICATIONS",
    declared: true,
    purpose: "Wear reminders.",
  },
  {
    name: "android.permission.SCHEDULE_EXACT_ALARM",
    declared: true,
    purpose: "Schedule wear reminders.",
  },
  {
    name: "android.permission.RECEIVE_BOOT_COMPLETED",
    declared: true,
    purpose: "Restore reminders after restart.",
  },
];
