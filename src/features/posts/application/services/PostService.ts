import { RetrievePostUseCase } from '@/features/posts/domain/usecases/RetrievePostUseCase'
import { Post } from '@/features/posts/domain/models/Post'
import config from '@/shared/config/config'

export class PostService implements RetrievePostUseCase {
    private apiUrl: string = config.api.baseUrl

    async getPosts(): Promise<Post[]> {
        const response = await fetch(`${this.apiUrl}/posts`)

        if (!response.ok) {
            throw new Error(`Error fetching posts ${response.statusText}`)
        }

        return await response.json()
    }

    async getPostById(id: number) {
        const response = await fetch(`${this.apiUrl}/posts/${id}`, {
            cache: 'force-cache',
        })

        if (!response.ok) {
            throw new Error(`Error fetching posts ${response.statusText}`)
        }

        return await response.json()
    }

    async getPostBySlug(slug: string): Promise<Post> {
        throw new Error('Method not implemented.')
    }
}
