// components/PostContent.tsx
interface PostContentProps {
    content: string
  }
  
  export default function PostContent({ content }: PostContentProps) {
    // This component renders the blog post content
    // You can enhance this to support markdown, rich text, or HTML
    
    return (
      <div className="prose prose-lg prose-gray max-w-none">
        <div 
          className="
            [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-gray-900 [&>h1]:mb-6 [&>h1]:mt-8
            [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mb-4 [&>h2]:mt-8
            [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h3]:mb-3 [&>h3]:mt-6
            [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:text-gray-900 [&>h4]:mb-3 [&>h4]:mt-6
            [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-6
            [&>ul]:mb-6 [&>ul]:ml-6
            [&>ol]:mb-6 [&>ol]:ml-6
            [&>li]:text-gray-700 [&>li]:mb-2
            [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:mb-6
            [&>code]:bg-gray-100 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:text-gray-800
            [&>pre]:bg-gray-900 [&>pre]:text-gray-100 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:mb-6
            [&>img]:rounded-lg [&>img]:shadow-md [&>img]:mb-6
            [&>a]:text-blue-600 [&>a]:hover:text-blue-800 [&>a]:underline
            [&>strong]:font-semibold [&>strong]:text-gray-900
            [&>em]:italic
          "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    )
  }