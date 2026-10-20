import { ImageResponse } from "next/og";

export const alt = "SafeSpace Rwanda: A place to belong. A space to be yourself.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FAF7F0", padding: 72, position: "relative" }}>
        <div style={{ position: "absolute", right: -120, top: -120, width: 520, height: 520, borderRadius: 9999, background: "#F3D8CA" }} />
        <div style={{ position: "absolute", right: 140, bottom: -160, width: 380, height: 380, borderRadius: 9999, background: "#A8C5B5" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontWeight: 800, color: "#173C35" }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, background: "#173C35" }} />
          SafeSpace Rwanda
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 800, color: "#173C35", lineHeight: 1.02, letterSpacing: -3, maxWidth: 900 }}>
          <span>A place to belong.</span>
          <span style={{ color: "#5b7d72" }}>A space to be yourself.</span>
        </div>
      </div>
    ),
    size,
  );
}
