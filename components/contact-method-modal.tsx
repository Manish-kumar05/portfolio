"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Mail } from "lucide-react"

interface ContactMethodModalProps {
  formData: {
    name: string
    email: string
    subject: string
    message: string
  }
  isOpen: boolean
  onClose: () => void
}

export function ContactMethodModal({ formData, isOpen, onClose }: ContactMethodModalProps) {
  const whatsappNumber = "919065674813"
  const userEmail = "patarmanishjuly06@gmail.com"

  const handleWhatsApp = () => {
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, "_blank")
    onClose()
  }

  const handleEmail = () => {
    const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-card border border-border rounded-2xl max-w-lg w-full shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">Choose Contact Method</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Form Data Preview */}
            <div className="p-6 bg-secondary/30 border-b border-border/50 mx-6 mt-4 rounded-lg">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Message Preview</h3>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="text-muted-foreground">From:</span> <span className="text-foreground">{formData.name}</span>
                </p>
                <p className="text-sm">
                  <span className="text-muted-foreground">Email:</span> <span className="text-foreground">{formData.email}</span>
                </p>
                <p className="text-sm">
                  <span className="text-muted-foreground">Subject:</span> <span className="text-foreground">{formData.subject}</span>
                </p>
                <div className="pt-3 border-t border-border/30">
                  <p className="text-sm text-muted-foreground mb-1">Message:</p>
                  <p className="text-sm text-foreground line-clamp-3">{formData.message}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 space-y-3">
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Send via WhatsApp
              </motion.button>
              <motion.button
                onClick={handleEmail}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 transition-all"
              >
                <Mail className="h-5 w-5" />
                Send via Email
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
