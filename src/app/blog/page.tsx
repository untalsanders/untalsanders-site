import { PostPreview } from '@/components/post-preview'
import { getAllPosts } from '@/lib/api'

export const metadata = {
    title: 'Blog',
    description: 'Read my blog',
}

export default async function Page() {
    const posts = await getAllPosts()

    return (
        <>
            <div className="container">
                <h1>Blog</h1>
                <p>Lee mis últimos artículos</p>
            </div>
            <div className="container">
                {posts?.map(post => (
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
