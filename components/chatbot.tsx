"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

const portfolioData = {
  name: "Zalak Rajvanshi",
  roles: ["AI Engineer at The Product Folks", "IEEE SOU WIE Vice Chair", "GDG Content Lead", "AWS Volunteer", "Senior Curation Executive"],
  experience: {
    role: "AI Engineer",
    company: "The Product Folks",
    period: "2026 - Present",
    work: [
      "WhatsApp Recruitment Outreach Automation - 3-touch candidate outreach with AI reply classification",
      "Semantic Talent Discovery Engine - semantic search over 23,000+ profiles, live at tpf-profile-matcher.vercel.app"
    ]
  },
  education: {
    degree: "B.Tech Computer Engineering",
    university: "Silver Oak University",
    cgpa: "9.56",
    class12: "HSC - Adani Vidya Mandir (80%)",
    class10: "SSC - Adani Vidya Mandir (80%)"
  },
  skills: {
    aiml: ["Python", "TensorFlow", "PyTorch", "OpenCV", "LangChain", "RAG Systems"],
    development: ["React", "Next.js", "TypeScript", "FastAPI", "AWS", "Docker"],
    soft: ["Leadership", "Content Creation", "Innovation", "Entrepreneurship", "Communication"]
  },
  projects: [
    "WhatsApp Recruitment Outreach Automation - AI-driven candidate outreach pipeline",
    "Semantic Talent Discovery Engine - ranks best-fit candidates from 23,000+ profiles against any job description",
    "Smart Task AI - AI-powered task management",
    "Health RAG System - Medical information retrieval",
    "Sign Language Detection - Real-time gesture recognition",
    "Handwritten Text Recognition - OCR system",
    "Fitness Pose Detection - Computer vision for fitness",
    "Smart Notes - Intelligent note-taking app"
  ],
  certificates: ["Microsoft AI/ML Foundations", "Google Gen AI Study Jams", "Udemy 100 Days Python", "IEEE XTREME 18.0"],
  strengths: ["Confidence & Public Speaking", "Critical Thinking", "Technical Leadership", "Team Building"],
  contact: "zalakrajvanshi08@gmail.com",
  location: "Ahmedabad, Gujarat, India"
}

const generateResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase().trim()

  // Strengths
  if (lowerQuery.match(/(strength|strong|good at|best at|confident|confidence)/)) {
    return `💪 My Key Strengths:\n• Confidence & Public Speaking\n• Critical Thinking\n• Technical Leadership\n• Team Building`
  }
  
  // About section
  if (lowerQuery.match(/(about|who|introduction|bio|profile)/)) {
    return `👋 About Me:\nI'm a passionate student leader combining technical expertise with entrepreneurial vision. Currently pursuing B.Tech CE at Silver Oak University with 9.56 CGPA. I hold 4 key leadership roles and am committed to building impactful AI/ML solutions.`
  }
  
  // Name queries
  if (lowerQuery.match(/(who are you|what is your name|your name|tell me about yourself|introduce)/)) {
    return `I'm ${portfolioData.name}, a B.Tech CE student at Silver Oak University with a passion for AI/ML and entrepreneurship.`
  }
  
  // Current role at The Product Folks
  if (lowerQuery.match(/(product folks|tpf|internship|intern|where do you work|current job|company)/)) {
    return `💼 AI Engineer at The Product Folks (2026 - Present):\nI build and ship AI systems for hiring and product workflows.\n• WhatsApp Recruitment Outreach Automation - a 3-touch outreach pipeline with AI reply classification and Google Sheets tracking\n• Semantic Talent Discovery Engine - a live Next.js app that ranks best-fit candidates from 23,000+ indexed profiles against any uploaded job description, cutting multi-day screening to seconds`
  }

  // Projects - flexible matching
  if (lowerQuery.match(/(project|work|portfolio|built|created|developed|made)/)) {
    return `📁 My Projects:\n• WhatsApp Recruitment Outreach Automation - AI-driven candidate outreach (The Product Folks)\n• Semantic Talent Discovery Engine - AI candidate matching over 23,000+ profiles (The Product Folks)\n• Smart Task AI - AI-powered task management\n• Health RAG System - Medical information retrieval\n• Sign Language Detection - Real-time gesture recognition\n• Handwritten Text Recognition - OCR system\n• Fitness Pose Detection - Computer vision for fitness\n\nView all projects in the Projects section!`
  }
  
  // Achievements
  if (lowerQuery.match(/(achievement|accomplishment|award|recognition|success)/)) {
    return `🏆 Key Achievements:\n• Vice Chair - IEEE SOU WIE SB AG\n• Content Lead - Google Developer Groups\n• AWS Community Volunteer\n• Senior Curation Executive Officer\n• CGPA: 9.56/10\n• Multiple certifications in AI/ML`
  }
  
  // Specific role queries
  if (lowerQuery.match(/(curation|executive|senior curation)/)) {
    return `📝 Senior Curation Executive:\nI manage content strategy and curation, ensuring high-quality technical content reaches the right audience effectively.`
  }
  
  if (lowerQuery.match(/(ieee|women in engineering|wie)/)) {
    return `🔗 IEEE SOU WIE Vice Chair:\nI lead initiatives to empower women in engineering, promote diversity in tech, and organize community events and workshops.`
  }
  
  if (lowerQuery.match(/(gdg|google developer|developer group)/)) {
    return `🔗 GDG Content Lead:\nI create engaging technical content for Google Developer Groups, helping developers learn and grow their skills in modern technologies.`
  }
  
  if (lowerQuery.match(/(aws|amazon|cloud volunteer)/)) {
    return `☁️ AWS Volunteer:\nI volunteer with AWS communities, supporting cloud technology adoption and helping others understand scalable cloud solutions.`
  }
  
  // All roles
  if (lowerQuery.match(/(role|position|job|what do you do|current|leadership|responsibilities)/)) {
    return `I currently hold 4 key roles:\n• IEEE SOU WIE Vice Chair - Leading women in engineering initiatives\n• GDG Content Lead - Creating technical content for developers\n• AWS Volunteer - Supporting cloud communities\n• Senior Curation Executive - Managing content strategy`
  }
  
  // Education
  if (lowerQuery.match(/(education|degree|university|college|cgpa|gpa|study|student|school)/)) {
    return `📚 Education:\n• B.Tech Computer Engineering at Silver Oak University (CGPA: 9.56)\n• HSC at Adani Vidya Mandir (80%)\n• SSC at Adani Vidya Mandir (80%)`
  }
  
  // Certificates
  if (lowerQuery.match(/(certificate|certification|course|training|certified|credential)/)) {
    return `🏆 Certifications:\n• Microsoft AI/ML Foundations\n• Google Gen AI Study Jams\n• Udemy 100 Days Python\n• IEEE XTREME 18.0`
  }
  
  // AI/ML specific
  if (lowerQuery.match(/(ai|ml|machine learning|deep learning|neural|tensorflow|pytorch|computer vision|nlp|artificial intelligence)/)) {
    return `🤖 AI/ML Expertise:\n• Languages: Python\n• Frameworks: TensorFlow, PyTorch\n• Specializations: Computer Vision (OpenCV), NLP, RAG Systems, Agentic AI\n• Advanced: LangChain, LLM applications, Retrieval Augmented Generation`
  }
  
  // Development
  if (lowerQuery.match(/(development|programming|code|coding|frontend|backend|fullstack|web|react|next|typescript|developer)/)) {
    return `💻 Development Stack:\n• Frontend: React, Next.js, TypeScript\n• Backend: FastAPI, Python\n• Cloud: AWS services\n• DevOps: Docker, containerization`
  }
  
  // Skills general
  if (lowerQuery.match(/(skill|expertise|what can|proficient|tech stack|technologies|abilities|capabilities)/)) {
    return `🛠️ My Skills:\n• AI/ML: Python, TensorFlow, PyTorch, OpenCV, RAG, LangChain\n• Development: React, Next.js, TypeScript, FastAPI, AWS, Docker\n• Soft: Leadership, Content Creation, Innovation, Entrepreneurship`
  }
  
  // Soft skills
  if (lowerQuery.match(/(soft skill|communication|management|speaking|presentation|leader)/)) {
    return `🎯 Soft Skills:\n• Leadership - IEEE WIE Vice Chair\n• Content Creation - GDG Content Lead\n• Innovation & Problem Solving\n• Entrepreneurship & Business Strategy\n• Public Speaking & Communication`
  }
  
  // Contact
  if (lowerQuery.match(/(contact|email|reach|connect|message|phone|hire|opportunity|get in touch|talk)/)) {
    return `📧 Contact Me:\n• Email: ${portfolioData.contact}\n• Location: ${portfolioData.location}\n• LinkedIn & GitHub available on portfolio`
  }
  
  // Business/Entrepreneurship
  if (lowerQuery.match(/(business|entrepreneurship|startup|innovation|venture|entrepreneur|founder)/)) {
    return `💼 Business & Entrepreneurship:\nI'm passionate about combining technical AI/ML expertise with business strategy to build sustainable, innovative solutions and explore startup opportunities.`
  }
  
  // Location
  if (lowerQuery.match(/(where|location|from|based|live)/)) {
    return `📍 I'm based in ${portfolioData.location}`
  }
  
  // Experience
  if (lowerQuery.match(/(experience|background|journey|story)/)) {
    return `I'm an AI Engineer at The Product Folks and a B.Tech CE student (CGPA 9.56), alongside 4 leadership roles. Day to day I ship AI systems for hiring and product workflows, from outreach automation to candidate-to-role matching.`
  }
  
  // Default fallback
  return `Hi! I'm Zalak's portfolio assistant. I can help you learn about:\n• My background & education\n• AI/ML & development skills\n• Leadership roles (IEEE, GDG, AWS)\n• Certifications & projects\n• How to contact me\n\nWhat would you like to know?`
}

export function Chatbot({ isHeroVisible = true }: { isHeroVisible?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hi! I'm Zalak's portfolio assistant. Ask me anything about my background, skills, or experience!",
    },
  ])

  const handleSendMessage = () => {
    if (!message.trim()) return

    const newMessages = [
      ...messages,
      { type: "user", content: message },
      {
        type: "bot",
        content: generateResponse(message),
      },
    ]

    setMessages(newMessages)
    setMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    !isHeroVisible && (
      <>
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-20 z-50 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm border-2 border-border hover:bg-accent hover:text-accent-foreground flex items-center justify-center"
        aria-label="Open chat"
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-20 z-50 w-80 h-96 bg-background dark:bg-background rounded-lg shadow-2xl border border-border flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-4 border-b border-border bg-accent text-accent-foreground rounded-t-lg">
            <h3 className="font-semibold">Portfolio Assistant</h3>
            <p className="text-sm opacity-90">Ask me anything about my work!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm whitespace-pre-wrap ${
                    msg.type === "user"
                      ? "bg-accent text-accent-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="px-3 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors duration-200"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
      </>
    )
  )
}
