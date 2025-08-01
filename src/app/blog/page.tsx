import { HeroPost } from '@/components/hero-post'
import { PostPreview } from '@/components/post-preview'
import { getAllPosts } from '@/lib/api'

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
            <div className="container">
                <h1>Blog</h1>
                <p>Lee mis últimos artículos</p>
            </div>
            <div className="container">
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
            </div>
        </>
    )
}
