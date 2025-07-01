import { Post } from '../models/Post'

export interface PostUseCases {
    getPosts(): Promise<Post[]>
    getPostById(id: number): Promise<Post>
}
