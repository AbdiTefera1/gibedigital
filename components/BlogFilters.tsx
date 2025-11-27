// components/BlogFilters.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
// import { Search, X } from '@heroicons/react/24/outline'
import { Search, X } from "lucide-react";

interface BlogFiltersProps {
  categories: string[]
  currentCategory?: string
  currentTag?: string
  currentSearch?: string
}

export default function BlogFilters({ 
  categories, 
  currentCategory, 
  currentTag, 
  currentSearch 
}: BlogFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(currentSearch || '')

  useEffect(() => {
    setSearch(currentSearch || '')
  }, [currentSearch])

  const updateFilters = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    
    // Reset to page 1 when filters change
    params.delete('page')
    
    router.push(`?${params.toString()}`)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateFilters('search', search.trim() || null)
  }

  const clearAllFilters = () => {
    setSearch('')
    router.push('/blog')
  }

  const hasActiveFilters = currentCategory || currentTag || currentSearch

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
      <div className="space-y-4">
        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>
        </form>

        {/* Filters Row */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          {/* Category Filter */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Category:
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => updateFilters('category', null)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  !currentCategory
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => updateFilters('category', category)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    currentCategory === category
                      ? 'bg-blue-100 text-blue-800 border border-blue-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors self-start md:self-center"
            >
              <X className="h-4 w-4" />
              Clear Filters
            </button>
          )}
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
            <span className="text-sm text-gray-500">Active filters:</span>
            {currentCategory && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                Category: {currentCategory}
                <button onClick={() => updateFilters('category', null)}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {currentTag && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                Tag: {currentTag}
                <button onClick={() => updateFilters('tag', null)}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {currentSearch && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">
                Search: {currentSearch}
                <button onClick={() => updateFilters('search', null)}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}