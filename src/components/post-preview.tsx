import { type Author } from '@/interfaces/author'
import Link from 'next/link'
import { Avatar } from './avatar'
import { CoverImage } from './cover-image'
import { DateFormatter } from './date-formatter'

type Props = {
    title: string
    coverImage: string
    date: string
    excerpt: string
    author: Author
    slug: string
}

export function PostPreview({ title, coverImage, date, excerpt, author, slug }: Props) {
    return (
        <div className="container">
            <div>
                <CoverImage title={title} src={coverImage} slug={slug} />
            </div>
            <h3>
                <Link href={`/blog/${slug}`}>{title}</Link>
            </h3>
            <div>
                <DateFormatter dateString={date} />
            </div>
            <p>{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
        </div>
    )
}
