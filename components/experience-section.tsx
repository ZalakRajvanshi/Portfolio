"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

interface ExperienceItem {
  id: number
  role: string
  company: string
  period: string
  current?: boolean
  description: string
  skills: string[]
}

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "AI Intern",
      company: "The Product Folks",
      period: "2026 - Present",
      current: true,
      description:
        "Building and deploying AI/ML solutions, developing intelligent features, prototypes, and data-driven tools for real-world products.",
      skills: ["AI/ML", "Python", "LLMs", "Problem Solving"],
    },
  ]

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
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.04) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Where I{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Build
            </span>
          </h2>
          <div className="w-16 h-px bg-foreground/20 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Applying AI and machine learning to real-world products
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="relative overflow-hidden p-6 sm:p-10 border border-border/60 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl">
                <div className="absolute -top-24 -right-24 w-56 h-56 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500" />

                <div className="relative flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Briefcase className="w-7 h-7 text-accent" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-light text-foreground">{exp.role}</h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Current
                          </span>
                        )}
                        <Badge variant="outline" className="font-light">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed font-light">{exp.description}</p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
