import { Author } from '@/features/posts/domain/models/Author'
import { Avatar } from './avatar'
import { CoverImage } from './cover-image'
import { DateFormatter } from './date-formatter'
import { PostTitle } from './post-title'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <PostTitle title={title} />
      <div className="flex items-center justify-between mt-4 mb-6">
        <Avatar name={author.name} picture={author.picture} />
        <DateFormatter dateString={date} />
      </div>
      <CoverImage title={title} src={coverImage} />
    </div>
  )
}
