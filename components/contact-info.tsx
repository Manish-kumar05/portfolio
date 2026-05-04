"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, MapPin } from "lucide-react"

export function ContactInfo() {
  const contactCards = [
    {
      icon: Github,
      title: "GitHub",
      link: "https://github.com/Manish-kumar05",
      displayText: "github.com/Manish-kumar05",
      description: "Check out my code and contributions",
      bgColor: "bg-primary/20",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/manish-kumar-701b14284",
      displayText: "linkedin.com/in/manish-kumar-701b14284",
      description: "Professional network and updates",
      bgColor: "bg-primary/20",
    },
  ]

  return (
    <div className="flex flex-col gap-8">
      {/* Heading and Subtext */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h3>
        <p className="text-muted-foreground leading-relaxed">
          Whether you&apos;re a recruiter looking for backend talent, a fellow developer interested in collaboration, or someone with an exciting project idea, I&apos;d love to hear from you. I typically respond within 24 hours.
        </p>
      </motion.div>

      {/* Info Cards */}
      <div className="space-y-4">
        {contactCards.map((card, index) => {
          const Icon = card.icon
          return (
            <motion.a
              key={card.title}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 4 }}
              className="group block p-4 rounded-lg border border-border hover:border-primary/50 bg-card/50 hover:bg-card transition-all"
            >
              <div className="flex gap-4 items-start">
                <div className={`p-3 rounded-lg ${card.bgColor} flex-shrink-0`}>
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground mb-1">{card.title}</h4>
                  <p className="text-sm text-primary font-medium group-hover:text-primary/80 transition-colors truncate">
                    {card.displayText}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{card.description}</p>
                </div>
              </div>
            </motion.a>
          )
        })}

        {/* Location & Availability Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-4 rounded-lg border border-border bg-card/50"
        >
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-lg bg-primary/20 flex-shrink-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-2">Location & Availability</h4>
              <p className="text-sm text-muted-foreground mb-3">Ranchi, India</p>
              <div className="space-y-1.5">
                {[
                  "Available for internships",
                  "Open to remote work",
                  "Interested in full-time opportunities",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
