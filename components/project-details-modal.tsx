"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectDetailsModal({ project, isOpen, onClose }) {
  const projectDetails = {
    "E-Commerce Website": {
      overview: "A full-stack e-commerce platform designed to manage users, products, and transactions efficiently with a responsive UI and secure backend.",
      problem: "Users needed a simple and efficient system to browse products, manage accounts, and perform operations securely.",
      features: [
        "User authentication and authorization system",
        "Product listing and management dashboard",
        "Database integration with optimized queries",
        "Responsive UI for all devices",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
      architecture: "Frontend handles user interaction, backend manages logic using Java, and MySQL handles data storage with optimized queries.",
      role: "Full-stack developer responsible for both frontend and backend.",
      challenges: [
        "Managing user sessions",
        "Optimizing database queries",
      ],
      solutions: [
        "Implemented efficient session handling",
        "Used optimized SQL queries",
      ],
      outcome: "Successfully handled 100+ users with smooth performance.",
      futureImprovements: [
        "Payment gateway integration",
        "Advanced search filters",
      ],
      githubLink: "",
      liveLink: "",
    },
    "AI Mental Health Assessment Tool": {
      overview: "A machine learning-based system to analyze user responses and provide mental health insights.",
      problem: "Need for automated analysis of user responses in a secure and efficient way.",
      features: [
        "ML-based response analysis",
        "Secure backend processing",
        "Data handling and prediction system",
      ],
      techStack: ["Python", "Machine Learning"],
      architecture: "Input data processed through ML model and backend ensures secure handling of sensitive data.",
      role: "Backend and ML developer.",
      challenges: [
        "Handling sensitive data securely",
        "Model accuracy",
      ],
      solutions: [
        "Implemented secure processing",
        "Improved model performance",
      ],
      outcome: "Accurate response analysis system.",
      futureImprovements: [
        "Improve ML model accuracy",
        "Add real-time chat system",
      ],
      githubLink: "",
      liveLink: "",
    },
    "Women's Safety Monitoring Application": {
      overview: "A real-time tracking and SOS alert system designed for emergency situations.",
      problem: "Need for fast emergency response and tracking system.",
      features: [
        "Real-time location tracking",
        "SOS alert system",
        "Backend communication APIs",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      architecture: "Frontend sends live data → backend APIs process → MongoDB stores → alerts triggered.",
      role: "Full-stack developer.",
      challenges: [
        "Real-time data handling",
        "Reliable alert system",
      ],
      solutions: [
        "Optimized backend APIs",
        "Efficient data flow",
      ],
      outcome: "Improved response efficiency.",
      futureImprovements: [
        "Integration with emergency services",
        "Mobile app version",
      ],
      githubLink: "",
      liveLink: "",
    },
    "Movie Streaming Platform": {
      overview: "A Netflix-inspired platform for streaming dynamic movie content.",
      problem: "Need for a responsive and dynamic movie platform.",
      features: [
        "User authentication",
        "Dynamic movie data integration",
        "Fast and responsive UI",
      ],
      techStack: ["React.js", "Node.js", "MongoDB"],
      architecture: "Frontend fetches data from backend APIs → MongoDB stores movie data → authentication ensures secure access.",
      role: "Frontend + backend developer.",
      challenges: [
        "Handling large data",
        "UI performance optimization",
      ],
      solutions: [
        "Optimized rendering",
        "Efficient API calls",
      ],
      outcome: "Smooth and fast streaming UI.",
      futureImprovements: [
        "Recommendation system",
        "Watchlist feature",
      ],
      githubLink: "",
      liveLink: "",
    },
  }

  const details = projectDetails[project?.title] || {}

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">{project?.title}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Close modal"
              >
                <X className="h-6 w-6 text-muted-foreground" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Overview */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Overview</h3>
                <p className="text-muted-foreground leading-relaxed">{details.overview}</p>
              </div>

              {/* Problem Statement */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Problem Statement</h3>
                <p className="text-muted-foreground leading-relaxed">{details.problem}</p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {details.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {details.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Architecture / Working Flow</h3>
                <p className="text-muted-foreground leading-relaxed">{details.architecture}</p>
              </div>

              {/* Role */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">My Role</h3>
                <p className="text-muted-foreground leading-relaxed">{details.role}</p>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Challenges Faced</h3>
                <ul className="space-y-2">
                  {details.challenges?.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Solutions Implemented</h3>
                <ul className="space-y-2">
                  {details.solutions?.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Outcome / Results</h3>
                <p className="text-muted-foreground leading-relaxed">{details.outcome}</p>
              </div>

              {/* Future Improvements */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Future Improvements</h3>
                <ul className="space-y-2">
                  {details.futureImprovements?.map((improvement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                {details.githubLink && (
                  <Button asChild variant="outline" className="gap-2">
                    <a href={details.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                {details.liveLink && (
                  <Button asChild variant="outline" className="gap-2">
                    <a href={details.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
