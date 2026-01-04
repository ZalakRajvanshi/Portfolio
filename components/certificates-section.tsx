"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Award, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

interface Certificate {
  id: number
  title: string
  excerpt: string
  description: string
  issueDate: string
  issuer: string
  category: string
  image: string
  featured: boolean
  pdfUrl?: string
  verifyUrl?: string
  skills: string[]
}

export function CertificatesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Foundations of AI and Machine Learning",
      excerpt: "Comprehensive foundation course covering AI and ML fundamentals, algorithms, and practical applications.",
      description: "This Microsoft certification covers the fundamental concepts of artificial intelligence and machine learning, including supervised and unsupervised learning, neural networks, and practical implementation of AI solutions in real-world scenarios.",
      issueDate: "2024-11-01",
      issuer: "Microsoft",
      category: "AI/ML",
      image: "/certificates/microsoft-ai-ml.png",
      featured: true,
      pdfUrl: "/certificates/microsoft-ai-ml.pdf",
      skills: ["Artificial Intelligence", "Machine Learning", "Data Science", "Microsoft AI"]
    },
    {
      id: 2,
      title: "Gen AI Study Jams 2024",
      excerpt: "Intensive study program focused on Generative AI technologies and Google Cloud AI services.",
      description: "Google Cloud Skills Boost program covering generative AI fundamentals, prompt engineering, and practical implementation of AI services using Google Cloud Platform tools and technologies.",
      issueDate: "2024-11-01",
      issuer: "Google Cloud Skills Boost",
      category: "Cloud AI",
      image: "/certificates/google-gen-ai.png",
      featured: true,
      pdfUrl: "/certificates/Gen AI Study Jams 2024.pdf",
      skills: ["Generative AI", "Google Cloud", "AI Services", "Prompt Engineering"]
    },
    {
      id: 3,
      title: "100 Days of Python",
      excerpt: "Comprehensive Python programming course covering fundamentals to advanced concepts through hands-on coding.",
      description: "Intensive 100-day Python programming course covering everything from basic syntax to advanced topics like web development, data analysis, automation, and GUI development with practical projects.",
      issueDate: "2024-01-01",
      issuer: "Udemy",
      category: "Programming",
      image: "/certificates/udemy-python.png",
      featured: false,
      pdfUrl: "/certificates/Udemy certificate .pdf",
      skills: ["Python", "Programming", "Web Development", "Data Analysis"]
    },
    {
      id: 4,
      title: "IEEE XTREME 18.0 Programming Competition",
      excerpt: "Participated in the prestigious IEEE XTREME programming competition, demonstrating problem-solving skills.",
      description: "IEEE XTREME is a global challenge in which teams of IEEE Student members compete in a 24-hour time span against each other to solve a set of programming problems, demonstrating algorithmic thinking and competitive programming skills.",
      issueDate: "2024-10-01",
      issuer: "IEEE",
      category: "Competition",
      image: "/certificates/ieee-xtreme.png",
      featured: false,
      pdfUrl: "/certificates/IEEE extreme certificate.pdf",
      skills: ["Competitive Programming", "Algorithms", "Problem Solving", "IEEE"]
    }
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % certificates.length)
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, certificates.length, currentSlide])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section ref={sectionRef} id="certificates" className="py-20 bg-gradient-to-b from-transparent to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Recognition & <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-16 h-px bg-foreground/20 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Validated expertise through industry certifications and leadership roles
          </p>
        </div>

        <div className={`relative mb-12 sm:mb-20 group transition-all duration-800 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
            <div
              className="flex transition-all duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {certificates.map((cert, index) => (
                <div key={cert.id} className="w-full flex-shrink-0">
                  <Card className="overflow-hidden border-0 bg-card/95 backdrop-blur-sm">
                    <div className="grid lg:grid-cols-2 gap-0 min-h-[400px] sm:min-h-[500px]">
                      <div className="relative overflow-hidden order-2 lg:order-1 hidden lg:block">
                        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 flex items-center justify-center p-4 sm:p-0">
                          {/* Certificate border design */}
                          <div className="relative w-32 sm:w-48 h-24 sm:h-32 border-2 sm:border-4 border-accent/30 rounded-lg bg-background/10 backdrop-blur-sm">
                            {/* Certificate decorative corners */}
                            <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-2 sm:w-4 h-2 sm:h-4 border-l-2 border-t-2 border-accent/50"></div>
                            <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-2 sm:w-4 h-2 sm:h-4 border-r-2 border-t-2 border-accent/50"></div>
                            <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 w-2 sm:w-4 h-2 sm:h-4 border-l-2 border-b-2 border-accent/50"></div>
                            <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 w-2 sm:w-4 h-2 sm:h-4 border-r-2 border-b-2 border-accent/50"></div>
                            
                            {/* Certificate content */}
                            <div className="flex flex-col items-center justify-center h-full space-y-1 sm:space-y-2">
                              <Award className="w-5 sm:w-8 h-5 sm:h-8 text-accent" />
                              <div className="text-center">
                                <div className="text-xs sm:text-sm font-medium text-foreground">Certificate</div>
                                <div className="text-xs text-muted-foreground">Achievement</div>
                              </div>
                            </div>
                            
                            {/* Certificate seal */}
                            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 sm:w-8 h-6 sm:h-8 bg-accent rounded-full flex items-center justify-center">
                              <svg className="w-3 sm:w-4 h-3 sm:h-4 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        <div className="absolute top-3 sm:top-6 left-3 sm:left-6 flex gap-2 flex-wrap">
                          <Badge className="bg-accent text-accent-foreground shadow-lg font-light text-xs sm:text-sm">
                            {cert.category}
                          </Badge>
                          {cert.featured && (
                            <Badge
                              variant="outline"
                              className="bg-background/80 backdrop-blur-sm border-accent text-accent font-light text-xs sm:text-sm"
                            >
                              Featured
                            </Badge>
                          )}
                        </div>

                        <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
                          <div className="flex items-center gap-2 sm:gap-4 text-white/90 flex-wrap">
                            <div className="flex items-center gap-1 sm:gap-2">
                              <Calendar className="w-3 sm:w-4 h-3 sm:h-4" />
                              <span className="text-xs sm:text-sm font-light">{formatDate(cert.issueDate)}</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2">
                              <Award className="w-3 sm:w-4 h-3 sm:h-4" />
                              <span className="text-xs sm:text-sm font-light">{cert.issuer}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
                        <div className="space-y-4 sm:space-y-6">
                          <div className="space-y-3 sm:space-y-4">
                            <h3 className="text-xl sm:text-3xl lg:text-4xl font-light font-sans text-foreground leading-tight">
                              {cert.title}
                            </h3>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">{cert.excerpt}</p>
                          </div>

                          <div className="relative hidden sm:block">
                            <p className="text-muted-foreground leading-relaxed line-clamp-4 font-light text-sm">
                              {cert.description}
                            </p>
                            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card to-transparent" />
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {cert.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs sm:text-sm">
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-3 pt-4 flex-wrap">
                            {cert.pdfUrl && (
                              <Button className="bg-accent hover:bg-accent/90 group/btn shadow-lg font-light text-sm sm:text-base py-2 px-4" asChild>
                                <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer">
                                  <Award className="w-4 h-4 mr-2" />
                                  View Certificate
                                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                                </a>
                              </Button>
                            )}
                            {cert.verifyUrl && (
                              <Button variant="outline" className="group/btn bg-transparent font-light text-sm sm:text-base py-2 px-4" asChild>
                                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                                  Verify
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm border-2 hover:border-accent hover:bg-accent hover:text-accent-foreground opacity-0 sm:group-hover:opacity-100 transition-all duration-300 shadow-lg w-8 h-8 sm:w-10 sm:h-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm border-2 hover:border-accent hover:bg-accent hover:text-accent-foreground opacity-0 sm:group-hover:opacity-100 transition-all duration-300 shadow-lg w-8 h-8 sm:w-10 sm:h-10"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </Button>

          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {certificates.map((_, index) => (
              <button
                key={index}
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8 sm:w-12 h-2 sm:h-3 bg-accent" : "w-2 sm:w-3 h-2 sm:h-3 bg-border hover:bg-accent/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                {index === currentSlide && isAutoPlaying && (
                  <div
                    className="absolute top-0 left-0 h-full bg-accent/60 animate-progress"
                    style={{ animation: "progress 5s linear infinite" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Achievement Wall */}
        <div className={`mt-20 transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Making an <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Impact</span>
            </h3>
            <p className="text-muted-foreground font-light">Leadership roles and impact across tech communities</p>
          </div>

          {/* Wall Background */}
          <div className="relative max-w-5xl mx-auto p-8 md:p-12 rounded-2xl bg-muted/30" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)'
          }}>
            
            {/* Achievement Cards Grid - 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* IEEE WIE */}
              <div className={`transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}>
                <div className="group relative transition-all duration-500 hover:-translate-y-2 focus-within:-translate-y-2 active:-translate-y-2" tabIndex={0} role="article" aria-label="IEEE WIE Vice Chair Achievement">
                  <Card className="relative p-8 bg-card border-2 border-accent/20 hover:border-accent active:border-accent shadow-xl hover:shadow-2xl focus-within:shadow-2xl active:shadow-2xl transition-all duration-500 overflow-hidden" style={{
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)'
                  }}>
                    {/* Solid color fill effect - top to bottom */}
                    <div className="absolute inset-0 bg-accent/90 translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500 ease-out" />
                    
                    {/* Top highlight line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-foreground to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-700" />
                    
                    {/* Gradient orb with glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:scale-150 group-hover:bg-accent/30 group-active:scale-150 group-active:bg-accent/30 transition-all duration-700" />
                    
                    <div className="relative text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 group-hover:bg-accent-foreground/20 group-active:bg-accent-foreground/20 flex items-center justify-center group-hover:scale-125 group-active:scale-125 group-hover:shadow-lg group-active:shadow-lg transition-all duration-500">
                        <Award className="w-8 h-8 text-accent group-hover:text-accent-foreground group-active:text-accent-foreground group-hover:scale-110 group-active:scale-110 transition-all duration-300" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-accent-foreground group-active:text-accent-foreground transition-colors duration-300">Vice Chair</h4>
                        <p className="text-sm text-accent group-hover:text-accent-foreground/90 group-active:text-accent-foreground/90 font-medium mb-3 transition-colors duration-300">IEEE SOU WIE</p>
                        <p className="text-xs text-muted-foreground group-hover:text-accent-foreground/80 group-active:text-accent-foreground/80 leading-relaxed transition-colors duration-300">Leading diversity initiatives and empowering women in engineering</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* GDG */}
              <div className={`transition-all duration-700 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
              }`}>
                <div className="group relative transition-all duration-500 hover:-translate-y-3 focus-within:-translate-y-3 active:-translate-y-3" tabIndex={0} role="article" aria-label="GDG Content Lead Achievement">
                  <Card className="relative p-8 bg-card border-2 border-accent/20 hover:border-accent active:border-accent shadow-xl hover:shadow-2xl focus-within:shadow-2xl active:shadow-2xl transition-all duration-500 overflow-hidden" style={{
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)'
                  }}>
                    <div className="absolute inset-0 bg-accent/90 translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 ease-out" style={{ transitionDelay: '0ms' }} />
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-foreground to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:scale-150 group-hover:bg-accent/30 group-active:scale-150 group-active:bg-accent/30 transition-all duration-700" />
                    
                    <div className="relative text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 group-hover:bg-accent-foreground/20 group-active:bg-accent-foreground/20 flex items-center justify-center group-hover:scale-125 group-active:scale-125 group-hover:shadow-lg group-active:shadow-lg transition-all duration-500">
                        <Award className="w-8 h-8 text-accent group-hover:text-accent-foreground group-active:text-accent-foreground group-hover:scale-110 group-active:scale-110 transition-all duration-300" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-accent-foreground group-active:text-accent-foreground transition-colors duration-300">Content Lead</h4>
                        <p className="text-sm text-accent group-hover:text-accent-foreground/90 group-active:text-accent-foreground/90 font-medium mb-3 transition-colors duration-300">Google Developer Groups</p>
                        <p className="text-xs text-muted-foreground group-hover:text-accent-foreground/80 group-active:text-accent-foreground/80 leading-relaxed transition-colors duration-300">Creating technical content for global developer communities</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* AWS */}
              <div className={`transition-all duration-700 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}>
                <div className="group relative transition-all duration-500 hover:-translate-y-2 focus-within:-translate-y-2 active:-translate-y-2" tabIndex={0} role="article" aria-label="AWS Community Volunteer Achievement">
                  <Card className="relative p-8 bg-card border-2 border-accent/20 hover:border-accent active:border-accent shadow-xl hover:shadow-2xl focus-within:shadow-2xl active:shadow-2xl transition-all duration-500 overflow-hidden" style={{
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)'
                  }}>
                    <div className="absolute inset-0 bg-accent/90 translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 ease-out" style={{ transitionDelay: '0ms' }} />
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-foreground to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:scale-150 group-hover:bg-accent/30 group-active:scale-150 group-active:bg-accent/30 transition-all duration-700" />
                    
                    <div className="relative text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 group-hover:bg-accent-foreground/20 group-active:bg-accent-foreground/20 flex items-center justify-center group-hover:scale-125 group-active:scale-125 group-hover:shadow-lg group-active:shadow-lg transition-all duration-500">
                        <Award className="w-8 h-8 text-accent group-hover:text-accent-foreground group-active:text-accent-foreground group-hover:scale-110 group-active:scale-110 transition-all duration-300" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-accent-foreground group-active:text-accent-foreground transition-colors duration-300">Community Volunteer</h4>
                        <p className="text-sm text-accent group-hover:text-accent-foreground/90 group-active:text-accent-foreground/90 font-medium mb-3 transition-colors duration-300">AWS Community</p>
                        <p className="text-xs text-muted-foreground group-hover:text-accent-foreground/80 group-active:text-accent-foreground/80 leading-relaxed transition-colors duration-300">Building cloud expertise and scalable technology solutions</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Curation */}
              <div className={`transition-all duration-700 delay-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-18"
              }`}>
                <div className="group relative transition-all duration-500 hover:-translate-y-3 focus-within:-translate-y-3 active:-translate-y-3" tabIndex={0} role="article" aria-label="Senior Curation Executive Achievement">
                  <Card className="relative p-8 bg-card border-2 border-accent/20 hover:border-accent active:border-accent shadow-xl hover:shadow-2xl focus-within:shadow-2xl active:shadow-2xl transition-all duration-500 overflow-hidden" style={{
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)'
                  }}>
                    <div className="absolute inset-0 bg-accent/90 translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 ease-out" style={{ transitionDelay: '0ms' }} />
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-foreground to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:scale-150 group-hover:bg-accent/30 group-active:scale-150 group-active:bg-accent/30 transition-all duration-700" />
                    
                    <div className="relative text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 group-hover:bg-accent-foreground/20 group-active:bg-accent-foreground/20 flex items-center justify-center group-hover:scale-125 group-active:scale-125 group-hover:shadow-lg group-active:shadow-lg transition-all duration-500">
                        <Award className="w-8 h-8 text-accent group-hover:text-accent-foreground group-active:text-accent-foreground group-hover:scale-110 group-active:scale-110 transition-all duration-300" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-accent-foreground group-active:text-accent-foreground transition-colors duration-300">Senior Curation Executive</h4>
                        <p className="text-sm text-accent group-hover:text-accent-foreground/90 group-active:text-accent-foreground/90 font-medium mb-3 transition-colors duration-300">Strategy & Execution</p>
                        <p className="text-xs text-muted-foreground group-hover:text-accent-foreground/80 group-active:text-accent-foreground/80 leading-relaxed transition-colors duration-300">Business strategy with technical execution for impact</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (hover: none) and (pointer: coarse) {
          .group:active .absolute.inset-0 {
            transform: translateY(0) !important;
            transition-duration: 400ms !important;
          }
          .group:active .absolute.top-0 {
            opacity: 1 !important;
          }
          .group:active .w-16.h-16 {
            transform: scale(1.25) !important;
            background: hsl(var(--accent-foreground) / 0.2) !important;
          }
          .group:active h4,
          .group:active p {
            color: hsl(var(--accent-foreground)) !important;
          }
        }
      `}</style>
    </section>
  )
}