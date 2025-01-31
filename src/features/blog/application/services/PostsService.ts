import { PostsUseCases } from '../../domain/usecases/PostsUseCases'
import { Post } from '@/features/blog/domain/models/Post'

export class PostsService implements PostsUseCases {

    async getPosts(): Promise<Post[]> {
        const response = await fetch('/api/posts')

        if (!response.ok) {
            throw new Error(`Error fetching posts ${response.statusText}`)
        }

        return await response.json()
    }

    async getPostById(id: number) {
        const response = await fetch(`/api/posts/${id}`)

        if (!response.ok) {
            throw new Error(`Error fetching posts ${response.statusText}`)
        }

        return await response.json()
    }
}