"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [fadeCount, setFadeCount] = useState(0)
  const [showImage, setShowImage] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const fadeInterval = setInterval(() => {
      setFadeCount((prev) => {
        if (prev >= 3) {
          clearInterval(fadeInterval)
          setShowImage(true)
          return prev
        }
        return prev + 1
      })
    }, 1000)

    return () => clearInterval(fadeInterval)
  }, [])

  useEffect(() => {
    if (showImage) {
      const imageTimer = setTimeout(() => {
        setImageLoaded(true)
        setTimeout(() => {
          onComplete()
        }, 2000)
      }, 800)

      return () => clearTimeout(imageTimer)
    }
  }, [showImage, onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {!showImage && (
        <div className="text-center px-4">
          <h1
            className={`text-3xl sm:text-5xl md:text-7xl font-light tracking-[0.2em] sm:tracking-[0.3em] text-transparent transition-opacity duration-700 ${
              fadeCount % 2 === 0 ? "opacity-100" : "opacity-20"
            }`}
            style={{
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
              fontWeight: 300,
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.3) 100%)",
              backgroundSize: "200% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              animation: "shimmerRightToLeft 2.5s infinite linear",
            }}
          >
            ACTIVATING
          </h1>
        </div>
      )}

      {showImage && (
        <div
          className={`transition-all duration-2000 ease-in-out ${
            imageLoaded ? "scale-[20] opacity-0" : "scale-100 opacity-100"
          }`}
          style={{
            transformOrigin: "center center",
          }}
        >
          <div className="w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 flex items-center justify-center rounded-lg">
            <img 
              src="/logo/logo.jpg" 
              alt="Logo" 
              className="w-full h-full object-contain rounded-lg"
              onError={(e) => {
                e.currentTarget.src = '/logo/logo.png'
              }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmerRightToLeft {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  )
}
