"use client"

import { useEffect, useMemo, useState } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

const WORDS = [
  "AI",
  "ML",
  "Python",
  "TensorFlow",
  "PyTorch",
  "Computer Vision",
  "NLP",
  "LLMs",
  "RAG",
  "Deep Learning",
  "OpenCV",
  "FastAPI",
  "Agents",
  "Engineer",
  "Innovation",
  "Entrepreneurship",
  "Startup",
  "Strategy",
  "Vision",
  "Product",
  "Growth",
  "Leadership",
  "Impact",
  "Ideas",
  "IEEE",
  "GDG",
  "AWS",
  "Build",
]

const COLS = 6

// Deterministic pseudo-random so SSR and client render identically (no hydration mismatch).
function seeded(i: number, salt: number) {
  const x = Math.sin((i + 1) * 12.9898 + salt * 78.233) * 43758.5453
  return x - Math.floor(x)
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"activating" | "flying">("activating")

  const placed = useMemo(() => {
    const rows = Math.ceil(WORDS.length / COLS)
    const cellW = 100 / COLS
    const cellH = 100 / rows
    return WORDS.map((word, i) => {
      const col = i % COLS
      const row = Math.floor(i / COLS)
      const duration = 4 + seeded(i, 4) * 2.5
      return {
        word,
        // jittered grid placement keeps words from clustering/overlapping
        left: col * cellW + cellW * (0.15 + seeded(i, 1) * 0.7),
        top: row * cellH + cellH * (0.15 + seeded(i, 2) * 0.7),
        duration,
        // negative delay starts each word mid-flight, so the field is already full and flowing
        delay: -(seeded(i, 3) * duration),
        size: 2 + seeded(i, 5) * 2.4,
      }
    })
  }, [])

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduce) {
      const t = setTimeout(onComplete, 1200)
      return () => clearTimeout(t)
    }

    const toFlying = setTimeout(() => setPhase("flying"), 1200)
    const finish = setTimeout(onComplete, 1200 + 3200)
    return () => {
      clearTimeout(toFlying)
      clearTimeout(finish)
    }
  }, [onComplete])

  return (
    <div className="loading-root fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black">
      {phase === "activating" ? (
        <h1 className="activating-text">ACTIVATING</h1>
      ) : (
        <div className="intro-stage">
          {placed.map((p, i) => (
            <span
              key={`${p.word}-${i}`}
              className="intro-word"
              style={{
                left: `${p.left.toFixed(2)}%`,
                top: `${p.top.toFixed(2)}%`,
                fontSize: `${p.size.toFixed(2)}vmin`,
                animationDelay: `${p.delay.toFixed(2)}s`,
                animationDuration: `${p.duration.toFixed(2)}s`,
              }}
            >
              {p.word}
            </span>
          ))}
        </div>
      )}

      <style jsx>{`
        .activating-text {
          font-size: clamp(2rem, 7vw, 4.5rem);
          font-weight: 300;
          letter-spacing: 0.3em;
          color: transparent;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, #fff 50%, rgba(255, 255, 255, 0.25) 100%);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          animation: ls-shimmer 2.2s infinite linear, ls-activate-out 0.5s ease 0.7s forwards;
        }
        @keyframes ls-shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        @keyframes ls-activate-out {
          to {
            opacity: 0;
            transform: scale(0.96);
            filter: blur(2px);
          }
        }

        .intro-stage {
          position: absolute;
          inset: 0;
          perspective: 1100px;
          transform-style: preserve-3d;
          opacity: 0;
          animation: ls-stage 3.2s ease both;
        }
        @keyframes ls-stage {
          0% {
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .intro-word {
          position: absolute;
          transform: translate(-50%, -50%) translateZ(-1600px);
          opacity: 0;
          font-weight: 200;
          letter-spacing: 0.02em;
          white-space: nowrap;
          color: #e5e7eb;
          will-change: transform, opacity, filter;
          /* linear + infinite = a steady, continuous stream toward the viewer */
          animation-name: ls-stream;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes ls-stream {
          0% {
            transform: translate(-50%, -50%) translateZ(-1600px);
            opacity: 0;
            filter: blur(4px);
          }
          18% {
            opacity: 0.85;
            filter: blur(0.5px);
          }
          50% {
            filter: blur(0);
          }
          82% {
            opacity: 0.85;
            filter: blur(0.5px);
          }
          100% {
            transform: translate(-50%, -50%) translateZ(650px);
            opacity: 0;
            filter: blur(6px);
          }
        }
      `}</style>
    </div>
  )
}
