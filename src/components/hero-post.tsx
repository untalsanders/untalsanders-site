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
        <article className={styles.postHero}>
            <picture className={styles.postHero__cover}>
                <CoverImage className={styles.postHero__image} title={title} src={coverImage} slug={slug} />
            </picture>
            <div className={styles.postHero__content}>
                <header className={styles.postHero__header}>
                    <h3>
                        <Link href={`/blog/${slug}`}>{title}</Link>
                    </h3>
                </header>
                <section className={styles.postHero__body}>
                    <p>{excerpt}</p>
                </section>
                <footer className={styles.postHero__footer}>
                    <Avatar className={`${styles["avatar__name--display"]}`} name={author.name} picture={author.picture} />
                    <DateFormatter dateString={date} />
                </footer>
            </div>
        </article>
    )
}
