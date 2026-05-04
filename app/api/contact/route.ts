import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Message } from '@/models/Message'
import { z } from 'zod'

const messageSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validationResult = messageSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.errors[0].message },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = validationResult.data

    // Connect to database
    await connectDB()

    // Create new message in MongoDB
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully!',
        id: newMessage._id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await connectDB()
    const messages = await Message.find().sort({ createdAt: -1 })

    return NextResponse.json({
      success: true,
      count: messages.length,
      data: messages,
    })
  } catch (error) {
    console.error('Fetch messages error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
}
