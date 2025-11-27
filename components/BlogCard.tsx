// components/BlogCard.tsx
import Link from 'next/link'
import Image from 'next/image'
import AuthorBadge from './AuthorBadge'
import Tag from './Tag'
import CategoryBadge from './CategoryBadge'
import { Post } from '@/lib/types'

interface BlogCardProps {
  post: Post
}

function formatDate(dateValue: string | Date): string {
  const date = new Date(dateValue)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Cover Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <CategoryBadge category={post.category} />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <Tag key={tag} name={tag} size="sm" />
              ))}
              {post.tags.length > 3 && (
                <span className="text-sm text-gray-500">+{post.tags.length - 3}</span>
              )}
            </div>
          )}

          {/* Author and Date */}
          <AuthorBadge
            name={post.authorName}
            image={post.authorImage}
            date={formatDate(post.createdAt)}
            compact
          />
        </div>
      </Link>
    </article>
  )
}