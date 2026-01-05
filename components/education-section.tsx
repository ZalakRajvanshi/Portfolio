"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

interface TimelineItem {
  id: number
  year: string
  title: string
  institution: string
  description: string
  type: "education" | "certification" | "course"
  skills?: string[]
}

export function EducationSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      year: "2022-2026",
      title: "Bachelor of Engineering (Computer Engineering)",
      institution: "SOCET - Silver Oak University",
      description:
        "Currently pursuing Bachelor's in Computer Engineering with Hands-on experience in AI/ML. Maintaining excellent academic performance with focus on innovative technology solutions.",
      type: "education",
      skills: ["AIML", "Data Structures", "Algorithms", "Software Engineering"],
    },
    {
      id: 2,
      year: "2022",
      title: "Higher Secondary (12th)",
      institution: "CBSE",
      description:
        "Completed Higher Secondary Certificate, building strong foundation in science and mathematics.",
      type: "certification",
      skills: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    },
    {
      id: 3,
      year: "2020",
      title: "Secondary School (10th)",
      institution: "CBSE",
      description:
        "Completed Secondary School Certificate, establishing fundamental academic excellence.",
      type: "course",
      skills: ["Mathematics", "Science", "English", "Social Studies"],
    },
  ]

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current)
    }

    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, index])
          }
        },
        { threshold: 0.15 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      sectionObserver.disconnect()
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-5 h-5" />
      case "certification":
        return <Award className="w-5 h-5" />
      case "course":
        return <BookOpen className="w-5 h-5" />
      default:
        return <GraduationCap className="w-5 h-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education":
        return "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
      case "certification":
        return "bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600"
      case "course":
        return "bg-gradient-to-r from-purple-500 to-pink-500"
      default:
        return "bg-accent"
    }
  }

  return (
    <section ref={sectionRef} id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Growing <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Forward</span>
          </h2>
          <div className="w-16 h-px bg-foreground/20 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Building a strong foundation through continuous learning and growth
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => { itemRefs.current[index] = el; }}
                className={`relative flex items-start gap-8 transition-all duration-800 ${
                  visibleItems.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-background ${getTypeColor(item.type)} text-white transition-transform duration-300 ${
                    visibleItems.includes(index) ? "scale-100" : "scale-0"
                  }`}
                >
                  {getIcon(item.type)}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-light text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground font-light">{item.institution}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 sm:mt-0 font-light">
                        {item.year}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed font-light">{item.description}</p>

                    {item.skills && (
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className={`text-xs transition-all duration-300 ${
                              visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                            }`}
                            style={{ transitionDelay: `${index * 200 + skillIndex * 50}ms` }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  )
}