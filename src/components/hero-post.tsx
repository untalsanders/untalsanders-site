import { Author } from '@/interfaces/author'
import { CoverImage } from './cover-image'
import Link from 'next/link'
import { DateFormatter } from './date-formatter'
import { Avatar } from './avatar'

type Props = {
    title: string
    coverImage: string
    date: string
    excerpt: string
    author: Author
    slug: string
}

export function HeroPost({ title, coverImage, date, excerpt, author, slug }: Props) {
    return (
        <section>
            <div><CoverImage title={title} src={coverImage} slug={slug} /></div>
            <div>
                <h3>
                    <Link href={`/blog/${slug}`}>
                        {title}
                    </Link>
                </h3>
                <div><DateFormatter dateString={date} /></div>
            </div>
            <div>
                <p>{excerpt}</p>
                <Avatar name={author.name} picture={author.picture} />
            </div>
        </section>
    )
}
