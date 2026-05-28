"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const skills = ["AIML", "Data Structures", "Algorithms", "Software Engineering"]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Growing{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Forward
            </span>
          </h2>
          <div className="w-16 h-px bg-foreground/20 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            A strong academic foundation in computer engineering
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="group relative overflow-hidden p-6 sm:p-10 border border-border/60 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl">
            <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-blue-500 to-purple-600" />

            <div className="relative flex flex-col sm:flex-row sm:items-center gap-8">
              <div className="flex items-start gap-5 flex-1">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400/20 via-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap className="w-7 h-7 text-accent" />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-2xl font-light text-foreground">Bachelor of Engineering</h3>
                    <p className="text-accent font-medium">Computer Engineering</p>
                    <p className="text-muted-foreground font-light text-sm mt-1">SOCET - Silver Oak University</p>
                  </div>
                  <Badge variant="outline" className="font-light">
                    2022 - 2026
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    Pursuing Computer Engineering with a hands-on focus on AI/ML, maintaining strong academic
                    performance while building innovative technology solutions.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 sm:border-l sm:border-border/50 sm:pl-8 flex sm:flex-col items-center justify-center gap-2 self-stretch">
                <div className="text-4xl sm:text-5xl font-light bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  9.56
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">CGPA / 10</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
