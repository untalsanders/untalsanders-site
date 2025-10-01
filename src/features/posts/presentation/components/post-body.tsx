import markdownStyles from '@/styles/markdown-styles.module.css'

type Props = {
  content: string
}

export function PostBody({ content }: Props) {
  return (
    <div className="container">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  )
}
