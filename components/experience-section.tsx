"use client"

import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"

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

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
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

        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id}>
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{exp.period}</span>
                  {exp.current && (
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-emerald-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Current
                    </span>
                  )}
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h3 className="text-3xl sm:text-4xl font-light text-foreground">{exp.role}</h3>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-1 text-lg font-medium text-accent">{exp.company}</p>
              </Reveal>

              <Reveal delay={220}>
                <div className="my-6 h-px w-20 bg-foreground/20" />
              </Reveal>

              <Reveal delay={280}>
                <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground font-light">
                  {exp.description}
                </p>
              </Reveal>

              <Reveal delay={360}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
