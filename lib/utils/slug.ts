// lib/utils/slug.ts
import { prisma } from '@/lib/prisma'

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

export async function createUniqueSlug(title: string): Promise<string> {
  const baseSlug = generateSlug(title)
  let slug = baseSlug
  let counter = 1

  // Check if slug already exists
  while (true) {
    const existingPost = await prisma.post.findUnique({
      where: { slug },
      select: { id: true }
    })

    if (!existingPost) {
      break
    }

    slug = `${baseSlug}-${counter}`
    counter++
  }

  return slug
}