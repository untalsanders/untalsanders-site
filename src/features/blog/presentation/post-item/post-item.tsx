import { Post } from '@/features/blog/domain/model/Post'
import Link from 'next/link'

const PostItem = ({ id, title, content, author, date }: Post) => {
    return (
        <article key={id}>
            <header>
                <svg width={18} height={18} viewBox="0 0 448 512">
                    <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                </svg>
                <span>{date}</span>
            </header>
            <section className="post-content">
                <h2>{title}</h2>
                <p>{content}</p>
                <p>{author}</p>
            </section>
            <footer>
                <Link href={`blog/${id}`}>
                    Read more
                    <svg width={18} height={18} viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                </Link>
            </footer>
        </article>
    )
}

export default PostItem
