import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/data";
import { seoCopy } from "@/lib/landing-copy";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoCopy.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: seoCopy.description,
  keywords: seoCopy.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: "lifestyle",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: seoCopy.ogTitle,
    description: seoCopy.ogDescription,
    // opengraph-image.tsx generates the social card at build time
  },
  twitter: {
    card: "summary_large_image",
    title: seoCopy.ogTitle,
    description: seoCopy.ogDescription,
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "zMlAA7JtVte8F5T9qgKWB2IOTkR-55zeIUZelq5oXvc",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.name,
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0A08" },
    { media: "(prefers-color-scheme: light)", color: "#F7F2E8" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <JsonLd />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body
        className={`${display.variable} ${sans.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="page-atmosphere" aria-hidden />
          <div className="noise-overlay" aria-hidden />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
