import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import { Resend } from 'resend';
import { headers } from 'next/headers';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting store (in production, use Redis)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

// Validation schema
const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.email('Invalid email address').max(255, 'Email too long'),
  phone: z.string().min(10, 'Phone number too short').max(20, 'Phone number too long'),
  service: z.string().min(1, 'Service is required').max(100, 'Service name too long'),
  budget: z.enum(['under-1000','1000-5000','5000-10000','over-10000'], {
    error: () => ({ message: 'Invalid budget range' })
  }),
  timeline: z.enum(['asap', '1-2weeks', '1month', '2-3months', 'flexible'], {
    error: () => ({ message: 'Invalid timeline option' })
  }),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message too long')
});

type BookingType = {
  message: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per 15 minutes

  const record = rateLimit.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

// Email template
function createEmailTemplate(booking: BookingType): string {
  const budgetMap = {
    'under-1000': 'Under $1,000',
    '1000-5000': '$1,000 - $5,000',
    '5000-10000': '$5,000 - $10,000',
    'over-10000': '$10,000+'
  };

  const timelineMap = {
    'asap': 'ASAP (Rush Order)',
    '1-2weeks': '1-2 Weeks',
    '1month': '1 Month',
    '2-3months': '2-3 Months',
    'flexible': 'Flexible Timeline'
  };

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid #667eea; border-radius: 5px; }
          .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
          .value { color: #333; }
          .priority { background: #fff3cd; border-left-color: #ffc107; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Project Booking</h1>
            <p>A new client has submitted a booking request</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">👤 Client Information</div>
              <div class="value">
                <strong>Name:</strong> ${booking.name}<br>
                <strong>Email:</strong> ${booking.email}<br>
                <strong>Phone:</strong> ${booking.phone}
              </div>
            </div>

            <div class="field">
              <div class="label">💼 Project Details</div>
              <div class="value">
                <strong>Service:</strong> ${booking.service}<br>
                <strong>Budget:</strong> ${budgetMap[booking.budget as keyof typeof budgetMap]}<br>
                <strong>Timeline:</strong> ${timelineMap[booking.timeline as keyof typeof timelineMap]}
              </div>
            </div>

            <div class="field ${booking.timeline === 'asap' ? 'priority' : ''}">
              <div class="label">💬 Project Description</div>
              <div class="value">${booking.message}</div>
            </div>

            <div class="field">
              <div class="label">📅 Submission Details</div>
              <div class="value">
                <strong>Submitted:</strong> ${new Date().toLocaleString()}<br>
                <strong>Booking ID:</strong> ${booking.id}
              </div>
            </div>
          </div>

          <div class="footer">
            <p>Please respond to this booking within 24 hours for the best client experience.</p>
            <p><em>Gibe Digital - Premium Digital Solutions</em></p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function GET() {
  const bookings = await prisma.booking.findMany();

  return NextResponse.json({
    success: true,
    data: bookings
  },
  { status: 200 }
)
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const headersList = await headers();
    const forwarded = headersList.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please try again in 15 minutes.' 
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = bookingSchema.parse(body);

    // Save to database
    const booking = await prisma.booking.create({
      data: {
        ...validatedData,
        createdAt: new Date(),
      },
    });

    // Send email notification
    try {
      await resend.emails.send({
        from: validatedData.email,
        to: ['gibe.digital5@gmail.com'],
        subject: `🚀 New ${validatedData.service} Booking - ${validatedData.name}`,
        html: createEmailTemplate(booking),
        replyTo: validatedData.email,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Booking submitted successfully!',
        bookingId: booking.id,
        data: {
          id: booking.id,
          service: booking.service,
          timeline: booking.timeline,
          createdAt: booking.createdAt,
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Booking submission error:', error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data',
          details: error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        },
        { status: 400 }
      );
    }

    // Handle database errors
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json(
        {
          success: false,
          error: 'A booking with this information already exists'
        },
        { status: 409 }
      );
    }

    // Generic error response
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error. Please try again later.'
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
        ? 'https://yourdomain.com' 
        : '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}