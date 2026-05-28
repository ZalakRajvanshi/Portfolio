"use client"

import { useLenis } from "lenis/react"
import { useRef, type ReactNode } from "react"

interface BreatheProps {
  children: ReactNode
  /** Peak-to-edge scale drop (0.05 = scales down to 0.95 at viewport edges). */
  intensity?: number
  /** Vertical drift in px at viewport edges. */
  drift?: number
}

export function Breathe({ children, intensity = 0.05, drift = 16 }: BreatheProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLenis(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.transform = ""
      return
    }

    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight
    // 0 when the element is centered in the viewport, approaching ±1 at the edges.
    const offset = (rect.top + rect.height / 2 - vh / 2) / vh
    const t = Math.min(Math.abs(offset), 1)
    const eased = t * t // ease so the effect is gentle near center, stronger at edges
    const scale = 1 - eased * intensity
    const ty = -offset * drift * eased
    el.style.transform = `translate3d(0, ${ty}px, 0) scale(${scale})`
  })

  return (
    <div ref={ref} style={{ willChange: "transform" }}>
      {children}
    </div>
  )
}
