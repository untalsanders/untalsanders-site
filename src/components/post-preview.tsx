import { type Author } from '@/interfaces/author'
import styles from '@/styles/Blog.module.css'
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
        <article className={styles.article}>
            <picture>
                <CoverImage className={styles.articleCover} title={title} src={coverImage} slug={slug} />
            </picture>
            <div className={styles.articleContent}>
                <h3 className={styles.articleTitle}>
                    <Link href={`/blog/${slug}`}>{title}</Link>
                </h3>
                <header className={styles.articleHeader}>
                    <div className={styles.articleFooter}>
                        <Avatar name={author.name} picture={author.picture} />
                    </div>
                    <div>
                        <DateFormatter dateString={date} />
                    </div>
                </header>
                <section className="body">
                    <p>{excerpt}</p>
                </section>
            </div>
        </article>
    )
}
