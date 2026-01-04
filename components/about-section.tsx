"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [photoRevealed, setPhotoRevealed] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setPhotoRevealed(true), 500)
        }
      },
      { threshold: 0.05 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    "Python",
    "Machine Learning",
    "TensorFlow",
    "Business Strategy",
    "Entrepreneurship",
    "Content Creation",
    "Community Leadership",
    "AWS",
    "Technical Writing",
    "Project Management",
    "Public Speaking",
    "Innovation",
  ]

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            The <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-16 h-px bg-foreground/20 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Transforming ideas into intelligent solutions through innovation and leadership
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}>
                I am a passionate student leader combining technical expertise with entrepreneurial vision. My journey spans leadership roles as Vice Chair of IEEE SOU WIE SB AG, Content Lead at GDG On Campus SOU, AWS Community Volunteer, and Senior Curation Executive Officer at IEEE SOU SB—all while exploring innovation and building impactful solutions.
              </p>

              <p className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}>
                As Vice Chair of IEEE SOU WIE SB AG, I spearhead initiatives to empower women in engineering and promote diversity in technology. As GDG Content Lead, I develop engaging technical content that supports developer communities in growing their skills.
              </p>

              <p className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}>
                My AWS community volunteering experience has deepened my understanding of cloud technologies and scalable solutions. As Senior Curation Executive Officer at IEEE SOU SB, I leverage both technical knowledge and strategic thinking to deliver impactful results.
              </p>

              <p className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}>
                I am passionate about AI and machine learning technologies, committed to harnessing their power to solve practical problems while building sustainable, innovative solutions.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-primary">Core Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs sm:text-sm text-center">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="space-y-6">
            <div className="relative">
              <div className={`w-full max-w-sm mx-auto aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-border/50 transition-all duration-1000 ${
                photoRevealed ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}>
                <img
                  src="/profile/professional-developer-portrait.jpeg"
                  alt="Zalak Rajvanshi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Floating Achievement Cards */}
              <div className={`absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-background border border-border/50 rounded-lg p-2 sm:p-3 shadow-lg transition-all duration-700 ${
                photoRevealed ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-4 -translate-y-4"
              }`} style={{ willChange: 'transform, opacity' }}>
                <div className="text-center">
                  <div className="text-base sm:text-lg font-medium text-blue-500">9.56</div>
                  <div className="text-xs text-muted-foreground">CGPA</div>
                </div>
              </div>
              
              <div className={`absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-background border border-border/50 rounded-lg p-2 sm:p-3 shadow-lg transition-all duration-700 ${
                photoRevealed ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-4 translate-y-4"
              }`} style={{ willChange: 'transform, opacity' }}>
                <div className="text-center">
                  <div className="text-base sm:text-lg font-medium text-purple-500">AIML</div>
                  <div className="text-xs text-muted-foreground">Focus</div>
                </div>
              </div>
            </div>

            <Card className="p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-4">
                <h4 className="font-semibold text-primary text-base sm:text-lg">What I Do</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    Building AI/ML solutions that solve real-world problems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    Leading tech communities and empowering diverse talent
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    Creating impactful content for developer ecosystems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    Driving innovation through strategic thinking and execution
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
