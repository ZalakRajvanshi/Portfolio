"use client"

import { HeroAnimatedBackground } from "@/components/HeroAnimatedBackground"
import { useEffect, useState, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const roles = useMemo(() => ["IEEE Executive Officer", "GDG Content Lead", "AWS Volunteer", "Senior Curation Executive at IEEE SOU SB"], [])
  
  const workImages = useMemo(() => [
    {
      src: "/slideshow/ieee-work.jpg",
      alt: "IEEE SOU WIE Vice Chair work",
      caption: "Leading IEEE WIE initiatives"
    },
    {
      src: "/slideshow/gdg-work.jpg",
      alt: "GDG Content Lead work",
      caption: "Creating content for GDG community"
    },
    {
      src: "/slideshow/aws-work.jpeg",
      alt: "AWS Volunteer work",
      caption: "AWS community volunteering"
    },
    {
      src: "/slideshow/curation-work.jpg",
      alt: "Senior Curation Executive work",
      caption: "Content curation and management"
    }
  ], [])

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300)

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % 4)
      setCurrentImage((prev) => (prev + 1) % 4)
    }, 3000)

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Preload images
    const imagePromises = workImages.map((img) => {
      return new Promise((resolve, reject) => {
        const image = new window.Image()
        image.src = img.src
        image.onload = resolve
        image.onerror = reject
      })
    })

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true))

    return () => {
      clearTimeout(timer)
      clearInterval(roleInterval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll, workImages])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      const headerOffset = 80
      const elementPosition = aboutSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
      {/* Low-poly geometric background */}
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      }}>
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="poly1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a5568" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2d3748" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <polygon points="0,0 100,150 0,300" fill="url(#poly1)" className="animate-pulse" style={{ animationDuration: '8s' }} />
          <polygon points="100,150 300,100 200,350" fill="url(#poly1)" opacity="0.5" className="animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
          <polygon points="300,100 500,0 400,250" fill="url(#poly1)" opacity="0.3" className="animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
          <polygon points="500,0 800,100 600,300" fill="url(#poly1)" opacity="0.4" className="animate-pulse" style={{ animationDuration: '9s', animationDelay: '0.5s' }} />
          <polygon points="800,100 1000,0 900,250" fill="url(#poly1)" opacity="0.3" className="animate-pulse" style={{ animationDuration: '11s', animationDelay: '1.5s' }} />
          <polygon points="0,300 200,350 100,600" fill="url(#poly1)" opacity="0.5" className="animate-pulse" style={{ animationDuration: '10s', animationDelay: '2.5s' }} />
          <polygon points="200,350 400,250 300,550" fill="url(#poly1)" opacity="0.4" className="animate-pulse" style={{ animationDuration: '13s', animationDelay: '1s' }} />
          <polygon points="400,250 600,300 500,600" fill="url(#poly1)" opacity="0.3" className="animate-pulse" style={{ animationDuration: '9s', animationDelay: '3s' }} />
          <polygon points="600,300 900,250 800,550" fill="url(#poly1)" opacity="0.5" className="animate-pulse" style={{ animationDuration: '11s', animationDelay: '0.5s' }} />
          <polygon points="900,250 1200,300 1000,600" fill="url(#poly1)" opacity="0.4" className="animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        </svg>
      </div>

      {/* Full Screen Background Slideshow with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {workImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImage ? "opacity-30 scale-100" : "opacity-0 scale-100"
            }`}
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              willChange: 'transform, opacity',
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              quality={95}
              sizes="100vw"
              className="object-cover object-center"
              style={{
                filter: imagesLoaded ? 'none' : 'blur(20px)',
                transition: 'filter 0.5s ease-in-out',
                objectPosition: 'center 30%'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-black/3 to-black/5 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30" />
          </div>
        ))}
      </div>
      
      <HeroAnimatedBackground />

      {/* Your existing background grid pattern (unchanged) */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.008] z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="text-center space-y-4 sm:space-y-8 w-full">
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 leading-tight animate-fade-in-up text-white px-2">
              Hey, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300" style={{backgroundSize: "300% 300%", animation: "gradient-flow 4s ease infinite"}}>Zalak Rajvanshi</span>
            </h1>
            <div className="text-sm sm:text-lg md:text-xl text-gray-300 mb-2 sm:mb-4 font-light h-7 sm:h-10">
              <span key={currentRole} className="text-white font-normal inline-block" style={{animation: "slideUp 0.6s ease-out"}}>{ roles[currentRole]}</span>
            </div>
            <p className="text-sm sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-8 font-medium animate-fade-in-up px-4" style={{ animationDelay: '0.2s', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>Building AI and machine learning solutions that drive innovation and solve real-world challenges through strategic thinking and entrepreneurial vision.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-3 animate-fade-in-up px-4" style={{ animationDelay: '0.3s' }}>
              <Button size="sm" className="group relative overflow-hidden bg-foreground hover:bg-foreground/90 text-background px-6 sm:px-6 py-2 font-light border-hover-effect rounded-full ripple-button text-sm hover:scale-105 hover:shadow-lg transition-all duration-300" onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}>
                <span className="relative z-10">Connect</span>
              </Button>
              <Button variant="outline" size="sm" className="group border hover:bg-foreground hover:text-background bg-transparent px-6 sm:px-6 py-2 font-light border-hover-effect rounded-full ripple-button text-sm hover:scale-105 hover:shadow-lg transition-all duration-300" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-1 group-hover:animate-bounce" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-2 sm:bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1200 z-20 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center space-y-2 text-gray-300 hover:text-white transition-colors group"
        >
          <span className="text-xs sm:text-sm font-light">Discover More</span>
          <div className="w-4 sm:w-5 h-6 sm:h-8 border border-current rounded-full flex justify-center">
            <div className="w-0.5 h-1.5 sm:h-2 bg-current rounded-full mt-1 animate-bounce" />
          </div>
        </button>
      </div>

      {/* Animations */}
      <style jsx>{`
        .hero-gradient-overlay {
          background: linear-gradient(
            120deg,
            rgba(255, 0, 150, 0.35),
            rgba(0, 200, 255, 0.35),
            rgba(255, 200, 0, 0.35)
          );
          background-size: 300% 300%;
          animation: heroGradient 10s ease infinite;
          mix-blend-mode: overlay;
        }

        @keyframes heroGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .image-popup {
          transition: all 0.3s ease;
        }

        .image-popup:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .border-hover-effect {
          position: relative;
          overflow: hidden;
        }

        .border-hover-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent);
          transition: left 0.5s;
        }

        .border-hover-effect:hover::before {
          left: 100%;
        }
        
        .ripple-button {
          position: relative;
          overflow: hidden;
        }
        
        .ripple-button::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .ripple-button:active::after {
          width: 300px;
          height: 300px;
        }
      `}</style>
    </section>
  )
}
