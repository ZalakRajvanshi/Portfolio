"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type RevealVariant = "blur" | "left" | "right" | "flip"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
  variant?: RevealVariant
}

export function Reveal({ children, className = "", delay = 0, threshold = 0.15, variant = "blur" }: RevealProps) {
  const [shown, setShown] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${shown ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
