import { Container } from '@/components/container'
import { getAllPosts } from '@/features/posts/infrastructure/api/api'
import { Intro } from '@/features/posts/presentation/components/intro'
import { PostFeatured } from '@/features/posts/presentation/components/post-featured'
import { PostList } from '@/features/posts/presentation/components/post-list'

import styles from '@/styles/Blog.module.css'

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
            <Container className={styles.BlogPage}>
                <section className={styles.BlogHero}>
                    <h1 className={styles.Blog__Section_title}>Featured Post</h1>
                    <PostFeatured
                        title={title ?? ''}
                        coverImage={coverImage ?? ''}
                        date={date ?? ''}
                        author={author ?? { name: '', picture: '' }}
                        slug={slug ?? ''}
                        excerpt={excerpt ?? ''}
                    />
                </section>
                <section id="recent-articles">
                    <h1 className={styles.Blog__Section_title}>Recent Articles</h1>
                    <PostList posts={posts} />
                </section>
            </Container>
        </>
    )
}
