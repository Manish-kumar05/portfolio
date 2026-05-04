"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Code2, Lightbulb, Rocket } from "lucide-react"

export function AboutSection() {
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

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with modern technologies",
    },
    {
      icon: Lightbulb,
      title: "Backend Engineering",
      description: "Designing scalable APIs and robust database solutions",
    },
    {
      icon: Rocket,
      title: "Problem Solving",
      description: "Turning complex challenges into efficient solutions",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
          <motion.div
            ref={ref}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 50 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="max-w-4xl mx-auto"
          >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-8 text-pretty"
          >
            I am a B.Tech Computer Science and Engineering student at Amity University Jharkhand (2023–2027) with a strong passion for backend development, full-stack applications, and building scalable systems. I enjoy turning complex problems into efficient and practical solutions through clean and optimized code.
          </motion.p>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.3 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-8 text-pretty"
          >
            I have hands-on experience in developing full-stack applications using technologies like React.js, Node.js, Express.js, and MongoDB, along with working knowledge of Java, Python, and MySQL. Through my projects, I have built real-world applications such as e-commerce platforms, real-time safety systems, and machine learning-based tools, which have strengthened my understanding of system design and API development.
          </motion.p>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.4 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-8 text-pretty"
          >
            I am particularly interested in backend engineering, where I focus on designing robust APIs, handling databases efficiently, and ensuring performance optimization. I continuously work on improving my problem-solving skills by practicing Data Structures and Algorithms and exploring new technologies.
          </motion.p>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.5 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-12 text-pretty"
          >
            I am currently seeking internship opportunities, open to remote work, and also interested in full-time opportunities where I can apply my skills and contribute to impactful software solutions.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
