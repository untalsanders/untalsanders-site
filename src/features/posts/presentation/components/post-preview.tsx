import { type Author } from '@/features/posts/domain/models/Author'
import Link from 'next/link'
import styles from '../styles/posts.module.css'
import { Avatar } from './avatar'
import { CoverImage } from './cover-image'
import { DateFormatter } from './date-formatter'
import { PostTitle } from './post-title'

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
        <Link href={`/blog/${slug}`}>
            <article className={styles.article}>
                <CoverImage className={styles.articleCover} title={title} src={coverImage} />
                <div className={styles.articleContent}>
                    <PostTitle title={title} />
                    <p>{excerpt}</p>
                    <footer className={styles.articleHeader}>
                        <div className={styles.articleFooter}>
                            <Avatar name={author.name} picture={author.picture} />
                        </div>
                        <div>
                            <DateFormatter dateString={date} />
                        </div>
                    </footer>
                </div>
            </article>
        </Link>
    )
}
