import { Author } from '@/interfaces/author'
import { CoverImage } from './cover-image'
import Link from 'next/link'
import { DateFormatter } from './date-formatter'
import { Avatar } from './avatar'

import styles from '@/styles/Blog.module.css'

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
        <article className={styles.heroPost}>
            <CoverImage className={styles.heroPost__image} title={title} src={coverImage} slug={slug} />
            <div className={styles.heroPost__content}>
                <header className={styles.heroPost__header}>
                    <h3 className={styles.heroPost__hearder_title}>
                        <Link href={`/blog/${slug}`}>{title}</Link>
                    </h3>
                </header>
                <section className={styles.heroPost__body}>
                    <p>{excerpt}</p>
                </section>
                <footer className={styles.heroPost__footer}>
                    <Avatar className={`${styles["avatar__name--display"]}`} name={author.name} picture={author.picture} />
                    <DateFormatter dateString={date} />
                </footer>
            </div>
        </article>
    )
}
