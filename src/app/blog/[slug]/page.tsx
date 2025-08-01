import { PostBody } from '@/components/post-body'
import { PostHeader } from '@/components/post-hearder'
import { getAllPosts, getFile } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export default async function BlogPostPage(props: Params) {
    const params = await props.params
    const post = getFile(params.slug)

    if (!post) {
        notFound()
    }

    const content = await markdownToHtml(post.content || '')

    return (
        <div className="container">
            <article>
                <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} />
                <PostBody content={content} />
            </article>
        </div>
    )
}

type Params = {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata(props: Params): Promise<Metadata> {
    const params = await props.params
    const post = getFile(params.slug)

    if (!post) {
        return notFound()
    }

    const title = `${post.title} | Next.js Blog Example with Markdown`

    return {
        title,
        openGraph: {
            title,
            images: [post.ogImage.url],
        },
    }
}

export async function generateStaticParams() {
    const posts = await getAllPosts()
    return posts?.map(post => ({
        slug: post.slug,
    }))
}
