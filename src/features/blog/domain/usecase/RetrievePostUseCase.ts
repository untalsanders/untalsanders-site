import { Post } from '../model/Post'

export interface RetrievePostUseCase {
    /**
     * Retrieves a list of all posts.
     * @returns A Promise that resolves to an array of Post objects.
     */
    getPosts(): Promise<Post[]>

    /**
     * Retrieves a single post by its ID.
     * @param id The ID of the post to retrieve.
     * @returns A Promise that resolves to a Post object.
     */

    getPostById(id: number): Promise<Post>
}
