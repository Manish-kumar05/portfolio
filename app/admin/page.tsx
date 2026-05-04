'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Message {
  _id: string
  name: string
  email: string
  subject: string
  message: string
  createdAt: string
}

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/contact')
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch messages')
      }

      setMessages(data.data || [])
      setError(null)
    } catch (err) {
      console.error('Fetch error:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch messages')
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground mb-2">Contact Messages</h1>
          <p className="text-muted-foreground">View all messages received through the contact form</p>
        </motion.div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-muted-foreground mt-4">Loading messages...</p>
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400">
            {error}
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-12 bg-card/50 rounded-lg border border-border">
            <p className="text-muted-foreground">No messages yet</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="space-y-4"
          >
            {messages.map((msg, index) => (
              <motion.div
                key={msg._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{msg.name}</h3>
                    <p className="text-sm text-muted-foreground">{msg.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{formatDate(msg.createdAt)}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-primary mb-2">Subject</h4>
                  <p className="text-foreground">{msg.subject}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-primary mb-2">Message</h4>
                  <p className="text-foreground whitespace-pre-wrap text-sm leading-relaxed">{msg.message}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">Total messages: {messages.length}</p>
        </div>
      </div>
    </div>
  )
}
