"use client"

import type React from "react"
import emailjs from '@emailjs/browser'
import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { Instagram } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'zalakrajvanshi08@gmail.com',
          sent_time: new Date().toLocaleString()
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      
      alert('Message sent successfully!')
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "zalakrajvanshi08@gmail.com",
      href: "mailto:zalakrajvanshi08@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXX",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/ZalakRajvanshi",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zalak-rajvanshi-21a7162ba",
      color: "hover:text-blue-600",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://www.instagram.com/zalakrajvanshii",
      color: "hover:text-pink-600",
    },
  ]

  return (
    <section ref={sectionRef} id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-light mb-4">Let's <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Connect</span></h2>
          <div className="w-16 h-px bg-foreground/20 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Ready to collaborate on innovative projects? Let's build something amazing together.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 transition-all duration-800 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Contact Form */}
          <Card className="p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">Let's Talk</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-light">Got an opportunity, want to collaborate, or need help with AI/ML? Drop me a message—I'd love to connect!</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs sm:text-sm">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-accent/20 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs sm:text-sm">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-accent/20 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-xs sm:text-sm">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-accent/20 text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs sm:text-sm">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="transition-all duration-200 focus:ring-2 focus:ring-accent/20 resize-none text-sm"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 group relative overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      Send Message
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6">Get in Touch</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-accent/10 text-accent rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-primary text-sm sm:text-base">{item.label}</p>
                      <p className="text-muted-foreground text-xs sm:text-sm truncate">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-light text-foreground mb-6">Follow Me</h3>
              <div className="flex gap-3 sm:gap-4 mb-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-muted rounded-lg transition-all duration-200 hover:scale-110 ${link.color}`}
                  >
                    {link.icon}
                    <span className="sr-only">{link.label}</span>
                  </a>
                ))}
              </div>
              
              <div className="space-y-3">
                <h4 className="text-base sm:text-lg font-light text-foreground">Open to New Opportunities</h4>
                <p className="text-muted-foreground font-light text-xs sm:text-sm leading-relaxed">
                  Passionate about building impactful AI/ML solutions and driving innovation. Always open to collaborations, business ventures, and exciting tech challenges.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2 sm:px-3 py-1 bg-foreground/10 text-foreground rounded-full text-xs font-light">
                    AI/ML Engineering
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-foreground/10 text-foreground rounded-full text-xs font-light">
                  Entrepreneurship
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-foreground/10 text-foreground rounded-full text-xs font-light">
                  Innovative Tech Solutions
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
