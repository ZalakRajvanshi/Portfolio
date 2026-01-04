"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificatesSection } from "@/components/certificates-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { LoadingScreen } from "@/components/loading-screen"
import { Chatbot } from "@/components/chatbot"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isHeroVisible, setIsHeroVisible] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => {
      setShowContent(true)
    }, 100)
  }

  const handleScroll = () => {
    const heroSection = document.getElementById("hero")
    if (heroSection) {
      const heroBottom = heroSection.getBoundingClientRect().bottom
      setIsHeroVisible(heroBottom > 0)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <>
      <Navigation activeSection={activeSection} />

      <main className="relative" style={{ zIndex: 1 }}>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="education">
          <EducationSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="certificates">
          <CertificatesSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />

      <Chatbot isHeroVisible={isHeroVisible} />

      {!isHeroVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  )
}
