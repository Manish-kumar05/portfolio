"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, School } from "lucide-react"

const educationData = [
  {
    icon: GraduationCap,
    institution: "Amity University Jharkhand",
    degree: "B.Tech in Computer Science and Engineering",
    year: "2023–2027",
    description: "Currently pursuing Bachelor of Technology with focus on software development, data structures, and algorithms.",
  },
  {
    icon: School,
    institution: "Oxford Public School",
    degree: "Class XII (CBSE - PCM)",
    year: "2022",
    description: "Completed higher secondary education with Physics, Chemistry, and Mathematics.",
  },
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {educationData.map((item, index) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-primary">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{item.institution}</h3>
                    <p className="text-primary font-medium mb-2">{item.degree}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
