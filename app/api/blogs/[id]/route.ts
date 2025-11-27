// app/api/posts/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { updatePostSchema } from '@/lib/validations/post'
import { createUniqueSlug } from '@/lib/utils/slug'
import { authGuard } from '@/lib/authGuard'
import type { Prisma } from '@/app/generated/prisma/client'

interface RouteContext {
  params: Promise<{
    id: string
  }>
}

export async function PUT(
  request: NextRequest,
  context: RouteContext
) {
  try {
    // Authentication check
    const isAuthenticated = await authGuard(request)
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await context.params
    const body = await request.json()

    // Validate request body
    const validationResult = updatePostSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validationResult.error.format() 
        },
        { status: 400 }
      )
    }

    // Check if post exists
    const existingPost = await prisma.post.findUnique({
      where: { id },
      select: { id: true, slug: true, title: true }
    })

    if (!existingPost) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    const data = validationResult.data
    const updateData: Prisma.PostUpdateInput = { ...data }

    // Generate new slug if title is being updated
    if (data.title && data.title !== existingPost.title) {
      updateData.slug = await createUniqueSlug(data.title)
    }

    // Update post
    const updatedPost = await prisma.post.update({
      where: { id },
      data: updateData
    })

    return NextResponse.json(updatedPost)

  } catch (error) {
    console.error('Error updating post:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  context: RouteContext
) {
  try {
    // Authentication check
    const isAuthenticated = await authGuard(request)
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await context.params

    // Check if post exists
    const existingPost = await prisma.post.findUnique({
      where: { id },
      select: { id: true }
    })

    if (!existingPost) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    // Delete post
    await prisma.post.delete({
      where: { id }
    })

    return NextResponse.json(
      { message: 'Post deleted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params

    const post = await prisma.post.findUnique({
      where: { id }
    })

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(post)

  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}