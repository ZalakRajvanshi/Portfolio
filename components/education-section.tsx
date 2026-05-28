"use client"

import { Reveal } from "@/components/reveal"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  const fields = [
    { label: "Field of Study", value: "Computer Engineering", accent: true },
    { label: "Duration", value: "2022 to 2026" },
    { label: "Institution", value: "SOCET, Silver Oak University" },
    { label: "Focus", value: "AI / Machine Learning" },
  ]

  const skills = ["AIML", "Data Structures", "Algorithms", "Software Engineering"]

  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-light md:text-4xl">
            Growing{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Forward
            </span>
          </h2>
          <div className="mx-auto mb-6 h-px w-16 bg-foreground/20" />
          <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
            A strong academic foundation in computer engineering
          </p>
        </Reveal>

        <Reveal delay={120} variant="flip">
          <div className="edu-card relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-sm sm:p-12">
            {/* decorative corner brackets */}
            <span className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-accent/40" />
            <span className="pointer-events-none absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-accent/40" />
            <span className="pointer-events-none absolute bottom-4 left-4 h-5 w-5 border-b-2 border-l-2 border-accent/40" />
            <span className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b-2 border-r-2 border-accent/40" />

            {/* header */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20">
                <GraduationCap className="h-7 w-7 text-accent" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Degree</p>
                <h3 className="text-2xl font-light leading-tight text-foreground sm:text-3xl">Bachelor of Engineering</h3>
              </div>
            </div>

            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* structured field grid */}
            <dl className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.label}>
                  <dt className="mb-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{f.label}</dt>
                  <dd className={`text-base font-light ${f.accent ? "text-accent" : "text-foreground"}`}>{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* key areas */}
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Key Areas</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-3.5 py-1.5 text-xs text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:text-white hover:[background:linear-gradient(135deg,#60a5fa,#a78bfa,#f472b6)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        .edu-card {
          transition:
            transform 0.45s ease,
            box-shadow 0.45s ease;
        }
        .edu-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px -24px rgba(0, 0, 0, 0.4);
        }
        .edu-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 55%;
          height: 100%;
          background: linear-gradient(110deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: skewX(-18deg);
          transition: left 0.75s ease;
          pointer-events: none;
        }
        .edu-card:hover::before {
          left: 150%;
        }
        @media (prefers-reduced-motion: reduce) {
          .edu-card,
          .edu-card::before {
            transition: none;
          }
          .edu-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
