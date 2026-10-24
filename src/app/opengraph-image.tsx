import { ImageResponse } from "next/og";

export const alt = "SafeSpace Rwanda: A place to belong. A space to be yourself.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#F3F6F2", padding: 72, position: "relative" }}>
        <svg width="500" height="400" viewBox="0 0 400 320" style={{ position: "absolute", right: 40, top: 130 }}>
          <defs>
            <clipPath id="c"><circle cx="150" cy="170" r="120" /></clipPath>
          </defs>
          <circle cx="150" cy="170" r="120" fill="#A8C5B5" />
          <rect x="200" y="20" width="160" height="290" rx="80" fill="#1F4234" />
          <rect x="200" y="20" width="160" height="290" rx="80" fill="#13261E" clipPath="url(#c)" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800, color: "#13261E" }}>SafeSpace Rwanda</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 78, fontWeight: 800, color: "#13261E", lineHeight: 1.04, letterSpacing: -2.5, maxWidth: 640 }}>
            <span>A place to belong.</span>
            <span style={{ color: "#1F4234" }}>A space to be yourself.</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
