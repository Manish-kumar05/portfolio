"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Code2, BookOpen } from "lucide-react"

const achievements = [
  {
    icon: Code2,
    title: "Built & Deployed Full-Stack Applications",
    description: "Successfully built and deployed multiple full-stack applications with responsive design and robust backend systems.",
  },
  {
    icon: BookOpen,
    title: "Learning Data Structures & Algorithms",
    description: "Actively learning and practicing data structures and algorithms to improve problem-solving skills.",
  },
  {
    icon: Award,
    title: "Regular Competitive Programming",
    description: "Consistent practice on competitive programming platforms to enhance coding and logical thinking abilities.",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-20 md:py-32 bg-secondary/30">
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Achievements</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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
