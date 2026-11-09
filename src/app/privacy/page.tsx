import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/data";
import {
  dataSafety,
  manifestPermissions,
  policyContactEmail,
  policyIntro,
  policySections,
  policyUpdated,
  targetAudience,
} from "@/lib/privacy-policy";

const canonical = `${siteConfig.url}/privacy`;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}. Photos used for wardrobe indexing and virtual try-on are sent over HTTPS through Firebase. Target audience 13+.`,
  alternates: { canonical },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description: `How ${siteConfig.name} handles wardrobe photos, virtual try-on, and account data.`,
    url: canonical,
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
        <p className="section-label">Legal</p>
        <h1 className="mt-4 font-display text-4xl text-lux-ivory sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-lux-ink-faint">
          Last updated {policyUpdated}. {siteConfig.name} · {siteConfig.packageName}.
          Target audience {targetAudience.label}.
        </p>
        <p className="mt-8 text-base leading-relaxed text-lux-ink-soft">
          {policyIntro}
        </p>
        <p className="mt-4 text-base leading-relaxed text-lux-ink-soft">
          Questions and deletion requests:{" "}
          <a
            className="text-lux-gold underline-offset-4 hover:underline"
            href={`mailto:${policyContactEmail}`}
          >
            {policyContactEmail}
          </a>
          .
        </p>

        <div className="mt-12 space-y-12">
          {policySections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="font-display text-2xl text-lux-ivory sm:text-3xl">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-base leading-relaxed text-lux-ink-soft"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-lux-ink-soft">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <section id="data-safety" className="mt-16 scroll-mt-28">
          <h2 className="font-display text-2xl text-lux-ivory sm:text-3xl">
            Google Play Data safety
          </h2>
          <p className="mt-4 text-base leading-relaxed text-lux-ink-soft">
            Use these answers in Play Console under App content → Data safety.
            They match the practices described above.
          </p>
          <dl className="mt-6 space-y-4 text-sm leading-relaxed">
            <div className="glass rounded-2xl p-4">
              <dt className="font-medium text-lux-ivory">
                Does the app collect or share user data?
              </dt>
              <dd className="mt-1 text-lux-ink-soft">{dataSafety.collectsOrShares}</dd>
            </div>
            <div className="glass rounded-2xl p-4">
              <dt className="font-medium text-lux-ivory">
                Is all collected user data encrypted in transit?
              </dt>
              <dd className="mt-1 text-lux-ink-soft">{dataSafety.encryptedInTransit}</dd>
            </div>
            <div className="glass rounded-2xl p-4">
              <dt className="font-medium text-lux-ivory">
                Can users request that their data be deleted?
              </dt>
              <dd className="mt-1 text-lux-ink-soft">
                Yes. Delete items in the app, uninstall to remove on-device data, or
                email {policyContactEmail}. Web URL: {canonical}#delete-your-data.
              </dd>
            </div>
          </dl>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-subtle">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead className="bg-lux-surface/60 text-lux-gold">
                <tr>
                  <th className="px-4 py-3 font-medium">Data type</th>
                  <th className="px-4 py-3 font-medium">Collected</th>
                  <th className="px-4 py-3 font-medium">Shared</th>
                  <th className="px-4 py-3 font-medium">Purpose</th>
                  <th className="px-4 py-3 font-medium">In transit</th>
                </tr>
              </thead>
              <tbody className="text-lux-ink-soft">
                {dataSafety.rows.map((row) => (
                  <tr key={row.type} className="border-t border-subtle align-top">
                    <th className="px-4 py-3 font-medium text-lux-ivory">{row.type}</th>
                    <td className="px-4 py-3">{row.collected}</td>
                    <td className="px-4 py-3">{row.shared}</td>
                    <td className="px-4 py-3">{row.purpose}</td>
                    <td className="px-4 py-3">{row.transit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-lux-ink-faint">
            For Photos, mark the data as collected for app functionality. Images
            are processed securely in transit via HTTPS and Firebase. Leave Videos
            unchecked. The gallery flow never reads the whole library.
          </p>
        </section>

        <section id="manifest" className="mt-16 scroll-mt-28">
          <h2 className="font-display text-2xl text-lux-ivory sm:text-3xl">
            AndroidManifest.xml permissions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-lux-ink-soft">
            Confirmed against the {siteConfig.packageName} manifest. Declare only
            the rows marked “Declared” in the Play permission forms.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-subtle">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead className="bg-lux-surface/60 text-lux-gold">
                <tr>
                  <th className="px-4 py-3 font-medium">Permission</th>
                  <th className="px-4 py-3 font-medium">Declared</th>
                  <th className="px-4 py-3 font-medium">Why</th>
                </tr>
              </thead>
              <tbody className="text-lux-ink-soft">
                {manifestPermissions.map((row) => (
                  <tr key={row.name} className="border-t border-subtle align-top">
                    <th className="px-4 py-3 font-mono text-xs font-medium text-lux-ivory">
                      {row.name}
                    </th>
                    <td className="px-4 py-3">{row.declared ? "Yes" : "No"}</td>
                    <td className="px-4 py-3">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
