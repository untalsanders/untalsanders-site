import Link from 'next/link'
import { formatDate, getBlogPosts } from './utils'
import styles from '@/styles/Blog.module.css'

export const metadata = {
    title: 'Blog',
    description: 'Read my blog',
}

export default async function BlogPage() {
    const allPosts = getBlogPosts()

    return (
        <>
            <div className={styles.BlogPageHero}>
                <div className="container">
                    <h1>Blog</h1>
                    <p>
                        Dive into my thoughts on coding, tech trends, and developer life. Explore my latest posts below.
                    </p>
                </div>
            </div>
            <div
                className="container"
                style={{
                    paddingBlock: '4rem',
                }}>
                {allPosts
                    .sort((a, b) => {
                        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                            return -1
                        }
                        return 1
                    })
                    .map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <div>
                                <p>
                                    <span>{formatDate(post.metadata.publishedAt, false)} ---- </span>
                                    <span>{post.metadata.title}</span>
                                </p>
                            </div>
                        </Link>
                    ))}
            </div>
        </>
    )
}
