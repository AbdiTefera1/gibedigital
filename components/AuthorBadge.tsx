// components/AuthorBadge.tsx
import Image from 'next/image'

interface AuthorBadgeProps {
  name: string
  image: string
  date: string
  compact?: boolean
}

export default function AuthorBadge({ name, image, date, compact = false }: AuthorBadgeProps) {
  return (
    <div className={`flex items-center gap-3 ${compact ? 'text-sm' : ''}`}>
      <div className={`relative rounded-full overflow-hidden ${compact ? 'w-8 h-8' : 'w-12 h-12'}`}>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <p className={`font-medium text-gray-900 ${compact ? 'text-sm' : ''}`}>
          {name}
        </p>
        <p className={`text-gray-500 ${compact ? 'text-xs' : 'text-sm'}`}>
          {date}
        </p>
      </div>
    </div>
  )
}