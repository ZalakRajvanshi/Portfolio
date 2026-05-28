"use client"

import { Reveal } from "@/components/reveal"

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
    <section className="exp-cinematic film-grain relative overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/60" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-28 sm:py-36 lg:px-8">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-blue-300/80">Experience</p>
        </Reveal>

        <Reveal delay={120}>
          <h2
            className="text-5xl font-light leading-[1.05] sm:text-6xl md:text-7xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Where I{" "}
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text italic text-transparent">
              Build
            </span>
          </h2>
        </Reveal>

        {experiences.map((exp) => (
          <div key={exp.id} className="mt-16 sm:mt-24">
            <Reveal delay={200}>
              <div className="mb-6 flex items-center gap-5">
                <span className="text-xs uppercase tracking-[0.3em] text-white/60">{exp.period}</span>
                {exp.current && (
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Current
                  </span>
                )}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <h3 className="text-3xl font-light leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
                {exp.role}
              </h3>
            </Reveal>

            <Reveal delay={380}>
              <p className="mt-2 text-lg tracking-wide text-blue-200/90 sm:text-xl">{exp.company}</p>
            </Reveal>

            <Reveal delay={460}>
              <div className="my-8 h-px w-24 bg-gradient-to-r from-white/50 to-transparent" />
            </Reveal>

            <Reveal delay={520}>
              <p className="max-w-2xl text-base font-light leading-relaxed text-white/75 sm:text-lg">
                {exp.description}
              </p>
            </Reveal>

            <Reveal delay={620}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border-b border-white/15 pb-1 text-sm uppercase tracking-[0.15em] text-white/55"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}
