"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 text-center">
          <p className="text-sm text-muted-foreground font-light">
            © {currentYear} Zalak Rajvanshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}