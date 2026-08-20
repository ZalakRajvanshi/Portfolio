"use client"

import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight } from "lucide-react"
import { useLenis } from "lenis/react"

const PROFILE_IMAGE = "/profile/professional-developer-portrait.png"

export function AboutSection() {
  const lenis = useLenis()

  const goTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    if (lenis) {
      lenis.scrollTo(el, { offset: -80 })
    } else {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const teasers = [
    {
      label: "Experience",
      text: "AI Engineer at The Product Folks, shipping LLM-powered features for real products.",
      target: "experience",
    },
    {
      label: "My Work",
      text: "AI/ML projects spanning computer vision, NLP, and developer tooling.",
      target: "projects",
    },
  ]

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden py-24 lg:py-0">
      {/* Full-height cutout portrait, centered, with cinematic treatment (desktop) */}
      <div className="pointer-events-none absolute inset-0 hidden items-end justify-center lg:flex">
        <div className="about-spotlight absolute left-1/2 top-[42%] h-[60%] w-[42%] rounded-full blur-3xl" />
        <img
          src={PROFILE_IMAGE}
          alt="Zalak Rajvanshi"
          className="about-portrait relative h-[85%] max-h-[620px] w-auto max-w-none object-contain object-bottom"
        />
      </div>

      {/* Subtle film grain */}
      <div className="about-grain" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        {/* Left: heading + intro + CTA */}
        <div className="max-w-md space-y-6 lg:max-w-[22rem]">
          <Reveal>
            <h2 className="text-4xl font-light leading-[1.1] sm:text-5xl xl:text-6xl">
              I'm Zalak,
              <br />
              an{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text font-normal text-transparent">
                AI/ML Engineer
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-base font-light leading-relaxed text-muted-foreground">
              A student leader who pairs technical depth with entrepreneurial vision, building AI and machine learning
              solutions that solve real problems across IEEE WIE, GDG, and the AWS community.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <Button
              onClick={() => goTo("experience")}
              variant="outline"
              className="group rounded-full border-foreground/20 bg-transparent px-6 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>

        {/* Portrait inline (mobile only) */}
        <div className="relative mx-auto w-full max-w-xs lg:hidden">
          <div className="about-spotlight absolute left-1/2 top-[40%] h-[55%] w-[80%] rounded-full blur-3xl" />
          <img src={PROFILE_IMAGE} alt="Zalak Rajvanshi" className="about-portrait relative h-auto w-full object-contain" />
        </div>

        {/* Right: section teasers */}
        <div className="max-w-md space-y-8 lg:max-w-[18rem]">
          {teasers.map((t, i) => (
            <Reveal key={t.label} delay={200 + i * 120}>
              <button onClick={() => goTo(t.target)} className="group block w-full text-left">
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-accent">{t.label}</p>
                <p className="mb-3 text-sm font-light leading-relaxed text-muted-foreground">{t.text}</p>
                <span className="inline-flex items-center gap-1 text-sm text-foreground transition-all duration-300 group-hover:gap-2">
                  View more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Bottom-left scroll cue */}
      <button
        onClick={() => goTo("experience")}
        aria-label="Scroll to experience"
        className="absolute bottom-8 left-4 z-20 hidden h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-110 sm:left-8 lg:flex"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </button>

      <style jsx>{`
        .about-portrait {
          filter: contrast(1.06) saturate(1.08) brightness(1.02);
          -webkit-mask-image: linear-gradient(to bottom, #000 68%, transparent 96%);
          mask-image: linear-gradient(to bottom, #000 68%, transparent 96%);
          animation: about-portrait-in 1.1s ease-out both;
        }
        @keyframes about-portrait-in {
          from {
            opacity: 0;
            transform: translateY(24px) scale(1.04);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .about-spotlight {
          transform: translate(-50%, -50%);
          background: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.32) 0%,
            rgba(139, 92, 246, 0.18) 36%,
            rgba(236, 72, 153, 0.07) 55%,
            transparent 70%
          );
          animation: about-spotlight-pulse 7s ease-in-out infinite;
        }
        @keyframes about-spotlight-pulse {
          0%,
          100% {
            opacity: 0.85;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.07);
          }
        }
        .about-grain {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.06;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          animation: about-grain-shift 0.6s steps(3) infinite;
        }
        @keyframes about-grain-shift {
          0% {
            background-position: 0 0;
          }
          33% {
            background-position: -7px 3px;
          }
          66% {
            background-position: 4px -6px;
          }
          100% {
            background-position: 0 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-portrait,
          .about-spotlight,
          .about-grain {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
