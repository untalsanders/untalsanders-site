import { Author } from './Author'

export interface Post {
    id: number
    title: string
    slug: string
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
