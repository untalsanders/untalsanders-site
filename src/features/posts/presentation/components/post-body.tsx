import markdownStyles from '@/styles/markdown-styles.module.css'

type Props = {
  content: string
}

export function PostBody({ content }: Props) {
  return (
    <div className="container">
      <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
}
