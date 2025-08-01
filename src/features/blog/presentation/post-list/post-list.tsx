import { Post } from '@/features/blog/domain/model/Post'
import PostItem from '../post-item/post-item'
import styles from './post-list.module.css'

const PostList = ({ posts }: { posts: Post[] }) => {
    return (
        <div className={styles.PostList}>
            {posts.map((post: Post) => (
                <PostItem key={post.id} {...post} />
            ))}
        </div>
    )
}

export default PostList
