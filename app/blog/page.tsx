// app/blog/page.tsx
import { Suspense } from 'react'
import { Metadata } from 'next'
import BlogGrid from '@/components/BlogGrid'
import BlogFilters from '@/components/BlogFilters'
import { PaginatedPosts } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Blog | Your Company',
  description: 'Read our latest insights, tutorials, and industry updates.',
  openGraph: {
    title: 'Blog | Your Company',
    description: 'Read our latest insights, tutorials, and industry updates.',
    type: 'website',
    siteName: 'Your Company',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Your Company',
    description: 'Read our latest insights, tutorials, and industry updates.',
  }
}

interface BlogPageSearchParams {
  page?: string
  category?: string
  tag?: string
  search?: string
}

interface BlogPageProps {
  searchParams: Promise<BlogPageSearchParams>
}

async function fetchPosts(params: BlogPageSearchParams): Promise<PaginatedPosts> {
  const searchParams = new URLSearchParams()
  
  if (params.page) searchParams.set('page', params.page)
  if (params.category) searchParams.set('category', params.category)
  if (params.tag) searchParams.set('tag', params.tag)
  if (params.search) searchParams.set('search', params.search)

  const url = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blogs?${searchParams.toString()}`
  
  const res = await fetch(url, { cache: 'no-store' })
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  
  return res.json()
}

async function fetchCategories(): Promise<string[]> {
  // This would typically be a separate API endpoint
  // For now, we'll return some mock categories
  return ['Technology', 'Design', 'Business', 'Marketing', 'Development']
}

function LoadingSkeleton() {
  return (
    <div className="space-y-8">
      <div className="animate-pulse">
        <div className="h-10 bg-gray-200 rounded-lg mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-48 bg-gray-200 rounded-lg"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams

  try {
    const [postsData, categories] = await Promise.all([
      fetchPosts(resolvedSearchParams),
      fetchCategories()
    ])

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, tutorials, and updates from our team
            </p>
          </div>

          {/* Filters */}
          <Suspense fallback={<div className="h-20 bg-gray-100 rounded-lg animate-pulse mb-8"></div>}>
            <BlogFilters 
              categories={categories}
              currentCategory={resolvedSearchParams.category}
              currentTag={resolvedSearchParams.tag}
              currentSearch={resolvedSearchParams.search}
            />
          </Suspense>

          {/* Blog Grid */}
          <Suspense fallback={<LoadingSkeleton />}>
            <BlogGrid 
              postsData={postsData}
              currentPage={parseInt(resolvedSearchParams.page || '1')}
            />
          </Suspense>
        </div>
      </div>
    )
  } catch (_error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600">Failed to load blog posts. Please try again later.</p>
        </div>
      </div>
    )
  }
}