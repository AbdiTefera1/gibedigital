// lib/types.ts
// import { Post } from '@prisma/client'

import { Post } from "@/app/generated/prisma/client"

export type { Post }

export interface CreatePostData {
  title: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  tags: string[]
  authorName: string
  authorImage: string
  seoTitle: string
  seoDescription: string
  published?: boolean
}

export interface PostAtr {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  tags: string[]
  authorName: string
  authorImage: string
  createdAt: string
}

export interface UpdatePostData extends Partial<CreatePostData> {
  title?: string
}

export interface PostsQuery {
  page?: number
  limit?: number
  category?: string
  tag?: string
  published?: boolean
}

export interface PaginatedPosts {
  posts: Post[]
  pagination: {
    currentPage: number
    totalPages: number
    totalPosts: number
    hasNext: boolean
    hasPrev: boolean
  }
}