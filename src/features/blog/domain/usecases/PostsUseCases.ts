import { Post } from '../models/Post';

export interface PostsUseCases {
    getPosts(): Promise<Post[]>
    getPostById(id: number): Promise<Post>
}