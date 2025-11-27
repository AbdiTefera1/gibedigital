// components/Tag.tsx
import Link from 'next/link'

interface TagProps {
  name: string
  size?: 'sm' | 'md'
  clickable?: boolean
}

export default function Tag({ name, size = 'md', clickable = true }: TagProps) {
  const baseClasses = `
    inline-flex items-center font-medium rounded-full transition-colors
    ${size === 'sm' 
      ? 'px-2 py-1 text-xs' 
      : 'px-3 py-1 text-sm'
    }
  `

  const colorClasses = `
    bg-blue-50 text-blue-700 border border-blue-200
    ${clickable ? 'hover:bg-blue-100 hover:border-blue-300' : ''}
  `

  if (clickable) {
    return (
      <Link 
        href={`/blog?tag=${encodeURIComponent(name)}`}
        className={`${baseClasses} ${colorClasses}`}
      >
        {name}
      </Link>
    )
  }

  return (
    <span className={`${baseClasses} ${colorClasses}`}>
      {name}
    </span>
  )
}