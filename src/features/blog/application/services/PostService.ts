import { PostsUseCases } from '../../domain/usecases/PostsUseCases'
import { Post } from '@/features/blog/domain/models/Post'
import config from '@/config/config'

export class PostService implements PostsUseCases {
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
}