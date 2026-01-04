"use client"

import Lottie from "lottie-react"
import { useEffect, useState } from "react"

export function HeroAnimatedBackground() {
  const [animationData, setAnimationData] = useState<any>(null)

  useEffect(() => {
    fetch("https://assets10.lottiefiles.com/packages/lf20_azET21lAFG.json")
      .then((res) => res.json())
      .then(setAnimationData)
  }, [])

  if (!animationData) return null

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Lottie animation */}
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="absolute inset-0 w-full h-full scale-[1.15]"
      />

      {/* Multicolor animated gradient overlay */}
      <div className="absolute inset-0 hero-gradient-overlay" />

      {/* Contrast layer for readability */}
      <div className="absolute inset-0 bg-background/40 dark:bg-background/60 backdrop-blur-[2px]" />
    </div>
  )
}
