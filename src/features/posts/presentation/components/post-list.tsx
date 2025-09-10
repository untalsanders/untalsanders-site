import { Post } from '@/features/posts/domain/models/Post'
import styles from '../styles/posts.module.css'
import { PostPreview } from './post-preview'

export const PostList = ({ posts }: { posts: Post[] }) => {
    return (
        <div className={styles.articles}>
            {posts.map((post, index) => (
                <PostPreview
                    key={index}
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                    slug={post.slug}
                    excerpt={post.excerpt}
                />
            ))}
        </div>
    )
}
