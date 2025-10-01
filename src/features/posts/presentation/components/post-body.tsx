import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '@/mdx-components'

type Props = {
  content: string
}

export function PostBody({ content }: Props) {
  return (
    <div className="container">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={content} components={useMDXComponents()} />
        </div>
      </div>
    </div>
  )
}
