import { ImageResponse } from "next/og"

export const alt = "Zalak Rajvanshi - AI/ML Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "90px",
          background: "linear-gradient(135deg, #0b1020 0%, #0a0a14 55%, #120a1c 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#a78bfa",
          }}
        >
          Portfolio
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            marginTop: 24,
            lineHeight: 1.05,
          }}
        >
          Zalak Rajvanshi
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 52,
            marginTop: 18,
            color: "#cbd5e1",
            fontWeight: 300,
          }}
        >
          AI / ML Engineer
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            height: 10,
            width: 320,
            borderRadius: 9999,
            background: "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
          }}
        />

        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 26,
            color: "#94a3b8",
            fontWeight: 300,
          }}
        >
          Building intelligent solutions through AI and machine learning
        </div>
      </div>
    ),
    { ...size },
  )
}
