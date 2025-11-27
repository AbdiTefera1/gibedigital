// app/blog/[slug]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import PostContent from '@/components/PostContent'
import AuthorBadge from '@/components/AuthorBadge'
import Tag from '@/components/Tag'
import CategoryBadge from '@/components/CategoryBadge'
import { PostAtr } from '@/lib/types'

interface BlogPostPageParams {
  slug: string
}

interface BlogPostPageProps {
  params: Promise<BlogPostPageParams>
}

async function fetchPost(slug: string): Promise<PostAtr> {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blogs/post/${slug}`
  
  const res = await fetch(url, { cache: 'no-store' })
  
  if (!res.ok) {
    if (res.status === 404) {
      notFound()
    }
    throw new Error('Failed to fetch post')
  }
  
  return res.json()
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params

  try {
    const post = await fetchPost(resolvedParams.slug)
    
    return {
      title: `${post.title} | Your Company Blog`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        images: [{ url: post.coverImage }],
        siteName: 'Your Company',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [post.coverImage],
      }
    }
  } catch {
    return {
      title: 'Post Not Found | Your Company Blog',
      description: 'The requested blog post could not be found.',
    }
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params

  try {
    const post = await fetchPost(resolvedParams.slug)

    return (
      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 -mt-20 relative z-10">
          {/* Content Container */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            {/* Category */}
            <div className="mb-4">
              <CategoryBadge category={post.category} />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-8 border-b border-gray-200">
              <AuthorBadge
                name={post.authorName}
                image={post.authorImage}
                date={formatDate(post.createdAt)}
              />
              
              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Tag key={tag} name={tag} />
                  ))}
                </div>
              )}
            </div>

            {/* Excerpt */}
            <div className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
              {post.excerpt}
            </div>

            {/* Content */}
            <PostContent content={post.content} />
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="h-20"></div>
      </article>
    )
  } catch (_error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600">Failed to load the blog post. Please try again later.</p>
        </div>
      </div>
    )
  }
}