"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Github, Linkedin, ArrowDown, FileText, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const mobileQuery = window.matchMedia("(max-width: 768px)")
    
    setPrefersReducedMotion(motionQuery.matches)
    setIsMobile(mobileQuery.matches)

    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    const handleMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)

    motionQuery.addEventListener("change", handleMotionChange)
    mobileQuery.addEventListener("change", handleMobileChange)
    
    return () => {
      motionQuery.removeEventListener("change", handleMotionChange)
      mobileQuery.removeEventListener("change", handleMobileChange)
    }
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const bgAnimationDuration = prefersReducedMotion ? 0 : isMobile ? 12 : 8

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0 md:pt-0">
      {/* Animated Background - Disabled on mobile for performance */}
      {!isMobile && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          {!prefersReducedMotion && (
            <>
              <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl hidden md:block"
                animate={{
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: bgAnimationDuration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl hidden md:block"
                animate={{
                  x: [0, -50, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: bgAnimationDuration + 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </>
          )}
        </div>
      )}

      <div className="container mx-auto px-4 md:px-6 py-20 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4"
          >
            Manish Kumar
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.2 }}
            className="text-xl md:text-2xl text-primary font-medium mb-4"
          >
            Full Stack Developer | Backend Enthusiast
          </motion.p>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
          >
            Computer Science undergraduate with experience in building full-stack applications and REST APIs using React.js, Node.js, and MongoDB. Strong focus on backend development and problem solving.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
              <a
                href="https://drive.google.com/drive/folders/1atisxHjGDgO3a-liHB9Le2zdOOH95RWu?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact} className="gap-2 w-full sm:w-auto">
              <MessageCircle className="h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/Manish-kumar05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/manish-kumar-701b14284"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Disable on reduced motion */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll down</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
