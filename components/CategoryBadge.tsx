// components/CategoryBadge.tsx
import Link from 'next/link'

interface CategoryBadgeProps {
  category: string
  clickable?: boolean
}

const categoryColors: Record<string, string> = {
  'Technology': 'bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200',
  'Design': 'bg-pink-100 text-pink-800 border-pink-200 hover:bg-pink-200',
  'Business': 'bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200',
  'Marketing': 'bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200',
  'Development': 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200',
  'default': 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'
}

export default function CategoryBadge({ category, clickable = true }: CategoryBadgeProps) {
  const colorClass = categoryColors[category] || categoryColors.default

  const baseClasses = `
    inline-flex items-center px-3 py-1 text-sm font-medium rounded-full border transition-colors
    ${colorClass}
  `

  if (clickable) {
    return (
      <Link 
        href={`/blog?category=${encodeURIComponent(category)}`}
        className={baseClasses}
      >
        {category}
      </Link>
    )
  }

  return (
    <span className={baseClasses}>
      {category}
    </span>
  )
}