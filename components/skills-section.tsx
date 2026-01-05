"use client"
import { useEffect, useRef, useState } from "react"

interface Skill {
  name: string
  category: "AI & Machine Learning" | "Development & Cloud" | "Soft Skills"
  icon: string
  description: string
  color: string
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("AI & Machine Learning")
  const sectionRef = useRef<HTMLElement>(null)

  const skills: Skill[] = [
    // AI & Machine Learning
    { name: "Python", category: "AI & Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "AI/ML development", color: "#3776ab" },
    { name: "TensorFlow", category: "AI & Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", description: "Deep learning", color: "#ff6f00" },
    { name: "PyTorch", category: "AI & Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", description: "Neural networks", color: "#ee4c2c" },
    { name: "OpenCV", category: "AI & Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", description: "Computer vision", color: "#5c3ee8" },
    { name: "MediaPipe", category: "AI & Machine Learning", icon: "🎯", description: "Computer vision framework", color: "#4285f4" },
    { name: "LangChain", category: "AI & Machine Learning", icon: "🦜", description: "LLM applications", color: "#1c3c3c" },
    { name: "Pandas", category: "AI & Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", description: "Data manipulation", color: "#150458" },
    { name: "NumPy", category: "AI & Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", description: "Numerical computing", color: "#013243" },
    { name: "Scikit-learn", category: "AI & Machine Learning", icon: "🧠", description: "Machine learning", color: "#f7931e" },
    { name: "NLTK", category: "AI & Machine Learning", icon: "📝", description: "Natural language processing", color: "#8fbc8f" },
    { name: "Agentic AI", category: "AI & Machine Learning", icon: "🤖", description: "Autonomous AI agents", color: "#6366f1" },
    { name: "RAG Systems", category: "AI & Machine Learning", icon: "🔍", description: "Retrieval augmented generation", color: "#10b981" },
    { name: "n8n", category: "AI & Machine Learning", icon: "🔗", description: "Workflow automation", color: "#ea4b71" },
    { name: "Zapier", category: "AI & Machine Learning", icon: "⚡", description: "Process automation", color: "#ff4a00" },

    // Development & Cloud
    { name: "React", category: "Development & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Frontend framework", color: "#61dafb" },
    { name: "Next.js", category: "Development & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", description: "Full-stack framework", color: "#000000" },
    { name: "TypeScript", category: "Development & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", description: "Type-safe JavaScript", color: "#3178c6" },
    { name: "FastAPI", category: "Development & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", description: "Python web framework", color: "#009688" },
    { name: "AWS", category: "Development & Cloud", icon: "☁️", description: "Cloud services", color: "#ff9900" },
    { name: "Docker", category: "Development & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", description: "Containerization", color: "#2496ed" },
    { name: "Git", category: "Development & Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", description: "Version control", color: "#f05032" },

    // Business & Leadership - REMOVED

    // Soft Skills
    { name: "Leadership", category: "Soft Skills", icon: "👑", description: "IEEE WIE Vice Chair", color: "#ffd700" },
    { name: "Strategic Thinking", category: "Soft Skills", icon: "🎯", description: "Business planning", color: "#34a853" },
    { name: "Content Creation", category: "Soft Skills", icon: "✍️", description: "GDG Content Lead", color: "#4285f4" },
    { name: "Innovation", category: "Soft Skills", icon: "💡", description: "Creative solutions", color: "#fbbc04" },
    { name: "Entrepreneurship", category: "Soft Skills", icon: "🚀", description: "Business development", color: "#ea4335" },
    { name: "Communication", category: "Soft Skills", icon: "💬", description: "Public speaking", color: "#4285f4" },
    { name: "Problem Solving", category: "Soft Skills", icon: "🧩", description: "Analytical thinking", color: "#ea4335" },
    { name: "Team Collaboration", category: "Soft Skills", icon: "🤝", description: "Cross-functional teamwork", color: "#34a853" },
    { name: "Project Management", category: "Soft Skills", icon: "📋", description: "Planning & execution", color: "#fbbc04" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const categories = ["AI & Machine Learning", "Development & Cloud", "Soft Skills"]
  const getSkillsByCategory = (category: string) => skills.filter(skill => skill.category === category)

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Skills in <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Action</span>
          </h2>
          <div className="w-16 h-px bg-foreground/20 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            A commitment to continuous learning, growth and improvement
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-light transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                activeTab === category
                  ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Skills */}
        <div className="overflow-hidden pb-6">
          <div className="flex gap-6 w-max animate-scroll">
            {getSkillsByCategory(activeTab).map((skill, index) => (
              <div
                key={skill.name}
                className={`skill-card transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="skill-content">
                  <div className="skill-icon-wrapper">
                    {skill.icon.startsWith('http') ? (
                      <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                    ) : (
                      <span className="skill-icon-emoji">{skill.icon}</span>
                    )}
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                  <p className="skill-description">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll-horizontal 20s linear infinite;
        }
        
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .skill-card {
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          width: 280px;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s ease;
        }

        .skill-card:hover::before {
          left: 100%;
        }

        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: hsl(var(--foreground) / 0.2);
        }

        .skill-content {
          position: relative;
          z-index: 1;
        }

        .skill-icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          background: hsl(var(--muted) / 0.5);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .skill-card:hover .skill-icon-wrapper {
          transform: scale(1.1);
          background: hsl(var(--accent) / 0.2);
        }

        .skill-icon-img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .skill-icon-emoji {
          font-size: 2.5rem;
        }

        .skill-name {
          font-size: 1.25rem;
          font-weight: 500;
          color: hsl(var(--foreground));
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .skill-description {
          font-size: 0.95rem;
          color: hsl(var(--muted-foreground));
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .skill-card {
            padding: 24px 20px;
            width: 240px;
          }
          
          .skill-icon-wrapper {
            width: 60px;
            height: 60px;
          }
          
          .skill-icon-img {
            width: 30px;
            height: 30px;
          }
          
          .skill-icon-emoji {
            font-size: 2rem;
          }
          
          .skill-name {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  )
}
