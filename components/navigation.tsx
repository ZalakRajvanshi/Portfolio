"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"

interface NavigationProps {
  activeSection: string
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [scrollProgress, setScrollProgress] = useState(0)

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const initialTheme = savedTheme || "dark" // Default to dark mode

    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 z-[60] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-light font-sans">
                <span className="gradient-text">Zalak Rajvanshi</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-line-hover px-3 py-2 text-sm font-light transition-all duration-300 relative ${
                      activeSection === item.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-8 h-8 hover:bg-accent/10 transition-all duration-300 flex-shrink-0"
              >
                {theme === "light" ? (
                  <Moon className="h-3.5 w-3.5 transition-transform duration-300 hover:rotate-12" />
                ) : (
                  <Sun className="h-3.5 w-3.5 transition-transform duration-300 hover:rotate-12" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-8 h-8 flex-shrink-0"
              >
                {isMobileMenuOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 z-50">
              <div className="mx-4 mt-2 px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-lg">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-line-hover block px-3 py-3 text-base font-light w-full text-left transition-all duration-200 rounded-md ${
                      activeSection === item.id
                        ? "text-foreground bg-accent/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
