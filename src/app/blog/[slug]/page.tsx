import { getAllPosts, getFile } from '@/features/posts/infrastructure/api/api'
import { PostBody } from '@/features/posts/presentation/components/post-body'
import { PostHeader } from '@/features/posts/presentation/components/post-hearder'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export default async function Page(props: Params) {
  const params = await props.params
  const post = getFile(params.slug)

  if (!post) {
    notFound()
  }

  const content = post.content || ''

  return (
    <div className="wrapper mx-auto">
      <article className="py-16">
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

  const title = `${post.title} | Blog`

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
  return posts
    ? posts.map(post => ({
        slug: post.slug,
      }))
    : []
}
