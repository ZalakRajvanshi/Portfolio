"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  category: string
}

export function ProjectsSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Fitness Pose Detection App",
      description:
        "AI-powered fitness app that detects exercise poses using MediaPipe and classifies them as correct or incorrect with a lightweight Dense Neural Network. Supports real-time webcam analysis.",
      image: "/projects/fitness-pose-detection.jpg",
      technologies: ["Python", "MediaPipe", "Neural Networks", "OpenCV"],
      liveUrl: "https://github.com/ZalakRajvanshi/Fitness-Pose-Detection-App",
      githubUrl: "https://github.com/ZalakRajvanshi/Fitness-Pose-Detection-App",
      category: "AI Project",
    },
    {
      id: 2,
      title: "Handwritten Text Recognition",
      description:
        "Handwriting recognition system combining CNN models for digits and letters with OCR for full-line text. Features a modern React UI and FastAPI backend for seamless user experience.",
      image: "/projects/handwritten-text-recognition.jpg",
      technologies: ["Python", "CNN", "OCR", "React", "FastAPI"],
      liveUrl: "https://github.com/ZalakRajvanshi/Handwritten-Text-Recognition",
      githubUrl: "https://github.com/ZalakRajvanshi/Handwritten-Text-Recognition",
      category: "AI Project",
    },
    {
      id: 3,
      title: "Sign Language Detection",
      description:
        "AI project for detecting sign language gestures in real-time using computer vision techniques. Enables communication accessibility through advanced gesture recognition.",
      image: "/projects/sign-language-detection.jpg",
      technologies: ["Python", "OpenCV", "CNN", "Computer Vision"],
      liveUrl: "https://github.com/ZalakRajvanshi/Sign-language-detection",
      githubUrl: "https://github.com/ZalakRajvanshi/Sign-language-detection",
      category: "AI Project",
    },
    {
      id: 4,
      title: "Smart Notes - Handwritten Text Recognition v3.0",
      description:
        "Converts handwritten notes into fully structured, editable, and searchable digital notes. Combines OCR, layout analysis, and semantic classification for document-level understanding.",
      image: "/projects/smart-notes.jpg",
      technologies: ["Python", "OCR", "Layout Analysis", "Computer Vision"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Document AI",
    },
    {
      id: 5,
      title: "HealthRAG - AI Menstrual Health System",
      description:
        "RAG system for menstrual health enabling natural language queries with accurate, context-aware answers using semantic search over trusted documents. Demonstrates real-world AI problem-solving.",
      image: "/projects/health-rag.jpg",
      technologies: ["Python", "RAG", "FAISS", "Sentence Transformers", "NLP"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI Project",
    },
    {
      id: 6,
      title: "SmartTask AI - Context-Aware Day Planner",
      description:
        "AI-powered day planner that converts natural-language goals into time-blocked, prioritized schedules. Adapts dynamically and improves over time through intelligent planning algorithms.",
      image: "/projects/smart-task-ai.jpg",
      technologies: ["Python", "NLP", "Task Scheduling", "AI Planning"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Productivity App",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative">
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="c-hotels">
        {/* Centered Heading */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Building <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <div className="w-16 h-px bg-foreground/20 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Transforming complex challenges into intelligent systems.
          </p>
        </div>


        {/* Project Cards List */}
        <ul className="c-hotels__list">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="c-hotels__item bg-white dark:bg-[#0e0e0e] project-card"
            >
              <figure className="c-hotels__item-figure">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
              </figure>

              <div className="c-hotels__item-info">
                <h2 className="c-hotels__item-title">{project.title}</h2>
                <p className="c-hotels__item-subtitle">{project.category}</p>
                <p className="c-hotels__item-excerpt">{project.description}</p>
                {project.githubUrl && project.githubUrl !== "#" ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="c-hotels__item-link group"
                  >
                    View More
                    <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </a>
                ) : (
                  <span className="c-hotels__item-link opacity-50 cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .c-hotels {
          width: min(1200px, 90%);
          margin: 0 auto;
        }

        .c-hotels__list {
          display: grid;
          grid-gap: 40px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .c-hotels__item {
          position: sticky;
          top: 50px;
          right: 0;
          left: 0;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto auto;
          border: 1px solid hsl(var(--border));
          border-radius: 12px;
          overflow: hidden;
          min-height: auto;
        }

        @media (min-width: 768px) {
          .c-hotels__item {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: minmax(400px, 70vh);
          }
        }

        .c-hotels__item:not(.c-hotels__item:last-child) {
          view-timeline-name: --card;
          view-timeline-axis: block;
          animation-timeline: --card;
          animation-name: in-n-out;
          animation-range: entry 90% cover 50%;
          animation-fill-mode: both;
        }

        .c-hotels__item-figure {
          grid-column: 1 / -1;
          grid-row: 1 / 2;
        }

        @media (min-width: 768px) {
          .c-hotels__item-figure {
            grid-column: 1 / 2;
            grid-row: 1 / -1;
          }
        }

        .c-hotels__item-figure img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 767px) {
          .c-hotels__item-figure img {
            max-height: 250px;
          }
        }

        .c-hotels__item-info {
          grid-column: 1 / -1;
          grid-row: 2 / -1;
          height: 100%;
          display: grid;
          align-content: center;
          padding: clamp(1.5rem, 5vw, 40px);
        }

        @media (min-width: 768px) {
          .c-hotels__item-info {
            grid-column: 2 / -1;
            grid-row: 1 / -1;
          }
        }

        .c-hotels__item-title {
          font-size: clamp(1.5rem, 5vw, 36px);
          font-weight: 300;
          font-family: var(--font-sans);
          color: hsl(var(--foreground));
          margin-bottom: 12px;
        }

        .c-hotels__item-subtitle {
          margin-bottom: 16px;
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 300;
          color: hsl(var(--muted-foreground));
          letter-spacing: 0.05em;
        }

        .c-hotels__item-excerpt {
          margin-bottom: 24px;
          line-height: 1.6;
          font-weight: 300;
          color: hsl(var(--muted-foreground));
        }
        
        .project-card {
          transition: transform 0.3s ease;
        }
        
        @media (hover: hover) and (pointer: fine) {
          .project-card:hover {
            transform: perspective(1000px) rotateX(2deg) rotateY(-2deg);
          }
        }nt-weight: 300;
          color: hsl(var(--muted-foreground));
        }

        .c-hotels__item-link {
          width: max-content;
          padding: 12px 24px;
          text-decoration: none;
          border: 1px solid hsl(var(--border));
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
          font-weight: 300;
          border-radius: 6px;
          transition: all 0.5s ease-in-out;
        }

        .c-hotels__item-link:hover {
          background-color: hsl(var(--foreground));
          color: hsl(var(--background));
        }

        @keyframes in-n-out {
          0%, 75% {
            scale: 100%;
          }

          100% {
            scale: 85%;
          }
        }
      `}</style>
    </section>
  )
}