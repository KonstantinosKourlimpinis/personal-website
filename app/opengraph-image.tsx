import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #020817 0%, #0a1628 50%, #0d2137 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "4px",
            height: "100%",
            background: "linear-gradient(180deg, #00d4ff 0%, transparent 100%)",
            display: "flex",
          }}
        />

        {/* KK badge */}
        <div
          style={{
            background: "rgba(0,212,255,0.1)",
            border: "1px solid rgba(0,212,255,0.3)",
            borderRadius: "8px",
            padding: "8px 16px",
            color: "#00d4ff",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "4px",
            marginBottom: "40px",
            display: "flex",
          }}
        >
          KK
        </div>

        {/* Name line 1 */}
        <div
          style={{
            color: "#f0f6ff",
            fontSize: "72px",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            display: "flex",
          }}
        >
          Konstantinos
        </div>

        {/* Name line 2 */}
        <div
          style={{
            color: "#f0f6ff",
            fontSize: "72px",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            marginBottom: "24px",
            display: "flex",
          }}
        >
          Kourlimpinis
        </div>

        {/* Title */}
        <div
          style={{
            color: "rgba(176,196,222,0.8)",
            fontSize: "28px",
            fontWeight: 400,
            letterSpacing: "1px",
            marginBottom: "48px",
            display: "flex",
          }}
        >
          Analyst · Software & AI Engineer · Curious Adventurer
        </div>

        {/* Location */}
        <div
          style={{
            color: "#00d4ff",
            fontSize: "20px",
            fontWeight: 500,
            letterSpacing: "2px",
            display: "flex",
          }}
        >
          Lausanne, Switzerland
        </div>
      </div>
    ),
    { ...size }
  );
}
