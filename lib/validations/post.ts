// lib/validations/post.ts
import { z } from 'zod'

export const createPostSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  excerpt: z.string().min(1, 'Excerpt is required').max(500, 'Excerpt too long'),
  content: z.string().min(1, 'Content is required'),
  coverImage: z.string().url('Invalid cover image URL'),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  authorName: z.string().min(1, 'Author name is required'),
  authorImage: z.string().url('Invalid author image URL'),
  seoTitle: z.string().min(1, 'SEO title is required').max(60, 'SEO title too long'),
  seoDescription: z.string().min(1, 'SEO description is required').max(160, 'SEO description too long'),
  published: z.boolean().optional().default(false)
})

export const updatePostSchema = createPostSchema.partial().extend({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long').optional()
})

export const postsQuerySchema = z.object({
  page: z.string().transform(val => parseInt(val, 10)).pipe(z.number().min(1)).optional().default(1),
  limit: z.string().transform(val => parseInt(val, 10)).pipe(z.number().min(1).max(100)).optional().default(10),
  category: z.string().optional(),
  tag: z.string().optional(),
  published: z.string().transform(val => val === 'true').optional()
})

export type CreatePostInput = z.infer<typeof createPostSchema>
export type UpdatePostInput = z.infer<typeof updatePostSchema>
export type PostsQueryInput = z.infer<typeof postsQuerySchema>