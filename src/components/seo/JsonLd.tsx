import { siteConfig } from "@/lib/data";
import {
  jsonLdFeatures,
  privacyCopy,
  seoCopy,
} from "@/lib/landing-copy";

export function JsonLd() {
  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    operatingSystem: "Android",
    applicationCategory: "LifestyleApplication",
    applicationSubCategory: "Fashion & Wardrobe",
    description: seoCopy.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    downloadUrl: siteConfig.playStoreUrl,
    featureList: jsonLdFeatures.join(", "),
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
    sameAs: [siteConfig.playStoreUrl],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: seoCopy.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${siteConfig.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: seoCopy.description,
        },
      },
      {
        "@type": "Question",
        name: "Is my wardrobe data private?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `${privacyCopy.subtitle} ${privacyCopy.items.map((i) => `${i.title}: ${i.description}`).join(" ")}`,
        },
      },
      {
        "@type": "Question",
        name: `What can I do with ${siteConfig.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: jsonLdFeatures.join("; "),
        },
      },
    ],
  };

  const schemas = [softwareApp, organization, website, faq];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
