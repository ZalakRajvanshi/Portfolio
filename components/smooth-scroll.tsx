"use client"

import { ReactLenis } from "lenis/react"
import "lenis/dist/lenis.css"
import type { ReactNode } from "react"

// Weighted ease-out so the page glides and settles instead of stopping flat.
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.35,
        easing: easeOutExpo,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      {children}
    </ReactLenis>
  )
}
