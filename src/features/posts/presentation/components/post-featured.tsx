import { Author } from '@/features/posts/domain/models/Author'
import Link from 'next/link'
import { CoverImage } from './cover-image'

import styles from '@/styles/Blog.module.css'
import { Avatar } from './avatar'
import { DateFormatter } from './date-formatter'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

// mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl

export function PostFeatured({ title, coverImage, date, excerpt, author, slug }: Props) {
  return (
    <article className="mx-auto overflow-hidden">
      <div className="md:flex">
        <picture className="md:shrink-0">
          <img
            className="h-[22rem]"
            src={coverImage}
            alt={`Cover Image for ${title}`}
          />
        </picture>
        <div className="p-8">
          <Link
            href={`/blog/${slug}`}
            className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
            {title}
          </Link>
          <p className="mt-2 text-gray-500">{excerpt}</p>
          <div className="mt-2 flex items-center justify-between">
            <Avatar className={`${styles['avatar__name--display']}`} name={author.name} picture={author.picture} />
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </article>
  )
}
