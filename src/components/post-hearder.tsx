import { Author } from '@/interfaces/author'
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
        <>
            <PostTitle title={title} />
            <Avatar name={author.name} picture={author.picture} />
            <CoverImage title={title} src={coverImage} />
            <DateFormatter dateString={date} />
        </>
    )
}
