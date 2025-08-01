import { Author } from '@/interfaces/author'
import { Avatar } from './avatar'
import { CoverImage } from './cover-image'
import { DateFormatter } from './date-formatter'

type Props = {
    title: string
    coverImage: string
    date: string
    author: Author
}

export function PostHeader({ title, coverImage, date, author }: Props) {
    return (
        <>
            <h1>{title}</h1>
            <div>
                <Avatar name={author.name} picture={author.picture} />
            </div>
            <div>
                <CoverImage title={title} src={coverImage} />
            </div>
            <div>
                <DateFormatter dateString={date} />
            </div>
        </>
    )
}
