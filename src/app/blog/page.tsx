import { Container } from '@/components/container'
import { HeroPost } from '@/components/hero-post'
import { Intro } from '@/components/intro'
import { PostPreview } from '@/components/post-preview'
import { getAllPosts } from '@/lib/api'

import styles from "@/styles/Blog.module.css"

export const metadata = {
    title: 'Blog',
    description: 'Read my blog',
}

export default async function Page() {
    const postsData = await getAllPosts()
    const { title, coverImage, date, author, slug, excerpt } = postsData?.[0] || {}
    const posts = postsData?.slice(1) || []

    return (
        <>
            <Intro />
            <Container className={styles.BlogPageHero}>
                <HeroPost
                    title={title ?? ''}
                    coverImage={coverImage ?? ''}
                    date={date ?? ''}
                    author={author ?? { name: '', picture: '' }}
                    slug={slug ?? ''}
                    excerpt={excerpt ?? ''}
                />
                {posts.length > 0 && posts.map(post => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                    />
                ))}
            </Container>
        </>
    )
}
