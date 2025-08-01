import { Author } from './author'

export type Post = {
    slug: string
    title: string
    excerpt: string
    coverImage: string
    date: string
    author: Author
    ogImage: {
        url: string
    }
    content: string
    preview?: boolean
}
