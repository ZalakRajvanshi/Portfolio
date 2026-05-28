"use client"

import { Reveal } from "@/components/reveal"
import { SpotlightCard } from "@/components/spotlight-card"

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
      period: "2026 / Present",
      current: true,
      description:
        "Building and deploying AI/ML solutions, developing intelligent features, prototypes, and data-driven tools for real-world products.",
      skills: ["AI/ML", "Python", "LLMs", "Problem Solving"],
    },
  ]

  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-light md:text-4xl">
            Where I{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Build
            </span>
          </h2>
          <div className="mx-auto mb-6 h-px w-16 bg-foreground/20" />
          <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
            Applying AI and machine learning to real-world products
          </p>
        </Reveal>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <Reveal key={exp.id} delay={120} variant="left">
              <SpotlightCard className="p-8 sm:p-12">
                {/* faint editorial watermark */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-6 select-none text-[7rem] font-extralight leading-none text-foreground/[0.04] sm:text-[9rem]"
                >
                  {exp.period.split(" ")[0]}
                </span>

                <div className="relative grid items-start gap-8 sm:grid-cols-[auto_1fr] sm:gap-12">
                  {/* period column */}
                  <div className="space-y-4">
                    {exp.current && (
                      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-500">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        Currently
                      </span>
                    )}
                    <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">{exp.period}</p>
                  </div>

                  {/* details column */}
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-3xl font-light leading-tight text-foreground sm:text-4xl">{exp.role}</h3>
                      <p className="mt-1 text-lg font-medium text-accent">{exp.company}</p>
                    </div>

                    <div className="h-px w-20 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" />

                    <p className="max-w-xl text-base font-light leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border px-3.5 py-1.5 text-xs text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:text-white hover:[background:linear-gradient(135deg,#60a5fa,#a78bfa,#f472b6)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
