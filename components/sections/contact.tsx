"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-b from-secondary/20 to-background/50 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <ContactInfo />
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
