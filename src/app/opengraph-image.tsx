import { ImageResponse } from "next/og";

export const alt =
  "Vaultrobe — Privacy-first digital wardrobe for Android";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "72px",
          background:
            "linear-gradient(145deg, #0E0C0A 0%, #1A1710 50%, #0E0C14 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: 100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,169,110,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: 80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(129,199,132,0.12) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #E5CA72, #C9A96E, #BA9038)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#161208",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            V
          </div>
          <span
            style={{
              fontSize: 36,
              color: "#F0EAD6",
              letterSpacing: 2,
            }}
          >
            Vaultrobe
          </span>
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 500,
            color: "#F0EAD6",
            lineHeight: 1.15,
            maxWidth: 800,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Your wardrobe. Private.</span>
          <span style={{ color: "#C9A96E" }}>Thoughtfully intelligent.</span>
        </div>

        <p
          style={{
            marginTop: 28,
            fontSize: 24,
            color: "#8A7E6C",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          On-device closet · Wardrobe insights · Weather-aware recommendations
        </p>

        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 72,
            right: 72,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(201,169,110,0.25)",
            paddingTop: 20,
          }}
        >
          <span style={{ fontSize: 18, color: "#C9A96E" }}>vaultrobe.app</span>
          <span style={{ fontSize: 16, color: "#8A7E6C" }}>
            Android · Privacy-first
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
