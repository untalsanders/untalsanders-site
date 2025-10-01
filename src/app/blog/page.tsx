import { getAllPosts } from '@/features/posts/infrastructure/api/api'
import { Intro } from '@/features/posts/presentation/components/intro'
import { PostFeatured } from '@/features/posts/presentation/components/post-featured'
import { PostList } from '@/features/posts/presentation/components/post-list'

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
      <div className="wrapper mx-auto py-16">
        <section
          style={{
            paddingBlockEnd: '2rem',
          }}>
          <h1
            className="my-8 text-[clamp(1.75rem,2vw,3rem)] font-black underline decoration-[#ff9600] underline-offset-10"
            style={{
              wordSpacing: '0.25rem',
            }}>
            Featured
          </h1>
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
          <h1
            className="my-8 text-[clamp(1.75rem,2vw,3rem)] font-black underline decoration-[#ff9600] underline-offset-10"
            style={{
              wordSpacing: '0.25rem',
            }}>
            All Posts
          </h1>
          <PostList posts={posts} />
        </section>
      </div>
    </>
  )
}
