// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createPostSchema, postsQuerySchema } from '@/lib/validations/post'
import { createUniqueSlug } from '@/lib/utils/slug'
import { authGuard } from '@/lib/authGuard'
import { PaginatedPosts } from '@/lib/types'
import { roleGuard } from '@/lib/roleGuard'
import { Permissions, Roles } from '@/lib/rbac'
import { permissionGuard } from '@/lib/permissionGuard'

export async function POST(request: NextRequest) {
  try {
    // Authentication check
    const user = await authGuard(request)
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    if (!roleGuard(user, [Roles.ADMIN, Roles.SUPERADMIN])) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    if (!permissionGuard(user, Permissions.DELETE_POST)) {
      return NextResponse.json({ error: "No permission" }, { status: 403 });
    }

    const body = await request.json()
    
    // Validate request body
    const validationResult = createPostSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validationResult.error.format() 
        },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Generate unique slug
    const slug = await createUniqueSlug(data.title)

    // Create post
    const post = await prisma.post.create({
      data: {
        ...data,
        slug
      }
    })

    return NextResponse.json(post, { status: 201 })

  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Validate query parameters
    const queryResult = postsQuerySchema.safeParse({
      page: searchParams.get('page') || '1',
      limit: searchParams.get('limit') || '10',
      category: searchParams.get('category') || undefined,
      tag: searchParams.get('tag') || undefined,
      published: searchParams.get('published') || undefined
    })

    if (!queryResult.success) {
      return NextResponse.json(
        { error: 'Invalid query parameters' },
        { status: 400 }
      )
    }

    const { page, limit, category, tag, published } = queryResult.data

    // Build where clause
    const where: any = {}
    
    if (published !== undefined) {
      where.published = published
    }
    
    if (category) {
      where.category = category
    }
    
    if (tag) {
      where.tags = {
        has: tag
      }
    }

    // Get total count for pagination
    const totalPosts = await prisma.post.count({ where })
    const totalPages = Math.ceil(totalPosts / limit)
    const skip = (page - 1) * limit

    // Get posts
    const posts = await prisma.post.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      },
      skip,
      take: limit
    })

    const response: PaginatedPosts = {
      posts,
      pagination: {
        currentPage: page,
        totalPages,
        totalPosts,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}