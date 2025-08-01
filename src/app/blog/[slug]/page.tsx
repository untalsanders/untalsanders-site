import { notFound } from 'next/navigation'
import { formatDate, getBlogPosts } from '../utils'
import { CustomMDX } from '@/components/MDX'
import { baseUrl } from '@/app/sitemap'

export async function generateStaticParams() {
    return getBlogPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    let post = getBlogPosts().find(post => post.slug === slug)

    if (!post) {
        return
    }

    const { title, publishedAt: publishedTime, author, summary: description, cover, tags } = post.metadata
    let ogImage = cover ? cover : `${baseUrl}/og?title=${encodeURIComponent(title)}`

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `${baseUrl}/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getBlogPosts().find(post => post.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="container">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.metadata.title,
                        datePublished: post.metadata.publishedAt,
                        dateModified: post.metadata.publishedAt,
                        description: post.metadata.summary,
                        cover: post.metadata.cover
                            ? `${baseUrl}${post.metadata.cover}`
                            : `/og?title=${encodeURIComponent(post.metadata.title)}`,
                        url: `${baseUrl}/blog/${post.slug}`,
                        author: {
                            '@type': 'Person',
                            name: 'My Portfolio',
                        },
                    }),
                }}
            />
            <h2>{post.metadata.title}</h2>
            <span>{formatDate(post.metadata.publishedAt)}</span>
            <article>
                <CustomMDX source={post.content} />
            </article>
        </div>
    )
}
