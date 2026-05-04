"use client"

import { motion } from "framer-motion"
import { Send, MessageCircle, Mail } from "lucide-react"
import { useState } from "react"
import { ContactMethodModal } from "@/components/contact-method-modal"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitMessage({ type: 'error', text: 'All fields are required' })
      return
    }

    setIsLoading(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setSubmitMessage({ type: 'error', text: data.error || 'Failed to send message' })
        return
      }

      setSubmitMessage({ type: 'success', text: 'Message sent successfully!' })
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(null), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitMessage({ type: 'error', text: 'An error occurred. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="p-4 rounded-lg border border-border bg-card/50"
      >
        {/* Form Heading */}
        <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name and Email - Side by side on desktop */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary text-foreground placeholder-muted-foreground rounded-lg border border-border hover:border-border/50 focus:border-primary/80 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary text-foreground placeholder-muted-foreground rounded-lg border border-border hover:border-border/50 focus:border-primary/80 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Subject - Full width */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-secondary text-foreground placeholder-muted-foreground rounded-lg border border-border hover:border-border/50 focus:border-primary/80 focus:outline-none transition-colors"
            />
          </div>

          {/* Message - Full width textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or opportunity..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-secondary text-foreground placeholder-muted-foreground rounded-lg border border-border hover:border-border/50 focus:border-primary/80 focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Send Button - Full width with gradient */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            className="w-full py-3 px-6 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 disabled:from-purple-600/50 disabled:to-blue-600/50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl mt-6"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Send Message
              </>
            )}
          </motion.button>

          {/* Submit Message Alert */}
          {submitMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`p-4 rounded-lg font-medium text-sm ${
                submitMessage.type === 'success'
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}
            >
              {submitMessage.text}
            </motion.div>
          )}
        </form>

        {/* Quick Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-border/30 flex flex-col sm:flex-row gap-3"
        >
          <motion.a
            href="https://wa.me/919065674813?text=Hi%20Manish%2C%20I%20saw%20your%20portfolio"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 bg-green-600/20 border border-green-500/30 text-green-400 hover:bg-green-600/30 hover:border-green-500/50 transition-all"
          >
            <MessageCircle className="h-5 w-5" />
            Send via WhatsApp
          </motion.a>
          <motion.a
            href={`mailto:patarmanishjuly06@gmail.com?subject=Portfolio%20Contact&body=Hi%20Manish,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600/30 hover:border-blue-500/50 transition-all"
          >
            <Mail className="h-5 w-5" />
            Send via Email
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  )
}
