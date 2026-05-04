"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ShoppingCart, Brain, Shield, ExternalLink, Eye, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectDetailsModal } from "@/components/project-details-modal"

const projects = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Website",
    description: "Full-stack platform with authentication and product management supporting 100+ users.",
    tech: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
    features: ["Authentication", "Product Management", "User Support", "Responsive Design"],
    githubLink: "",
    liveLink: "",
  },
  {
    icon: Brain,
    title: "AI Mental Health Assessment Tool",
    description: "ML-based system to analyze user responses with secure backend processing.",
    tech: ["Python", "Machine Learning"],
    features: ["Response Analysis", "AI Assessment", "Secure Processing", "Personalized Reports"],
    githubLink: "",
    liveLink: "",
  },
  {
    icon: Shield,
    title: "Women's Safety Monitoring Application",
    description: "Real-time tracking and SOS alert system with backend APIs.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: ["Real-time Tracking", "SOS Alerts", "Location Sharing", "Emergency Response"],
    githubLink: "",
    liveLink: "",
  },
  {
    icon: ShoppingCart,
    title: "Movie Streaming Platform",
    description: "Responsive streaming platform with authentication and dynamic movie data.",
    tech: ["React.js", "Node.js", "MongoDB"],
    features: ["User Authentication", "Movie Catalog", "Streaming", "Recommendations"],
    githubLink: "",
    liveLink: "",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="space-y-4 flex-1">
                  <div>
                    <p className="text-xs font-medium text-foreground mb-2">Features</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-foreground mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <button
                    onClick={() => {
                      setSelectedProject(project)
                      setIsModalOpen(true)
                    }}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium text-sm"
                    title="View full project details"
                  >
                    <Eye className="h-4 w-4" />
                    <span className="hidden sm:inline">Details</span>
                  </button>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary transition-colors font-medium text-sm"
                      title="View source code"
                    >
                      <Github className="h-4 w-4" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary transition-colors font-medium text-sm"
                      title="View live demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
