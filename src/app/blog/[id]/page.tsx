'use client'

import styles from '@/styles/Blog.module.css'
import { PostService } from '@/features/blog/application/services/PostService'
import PostItem from '@/features/blog/presentation/post-item/post-item'
import { Post } from '@/features/blog/domain/models/Post'

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page({ params }: { params: Promise<{id: number}>}) {
    const { id } = (await params)
    const postService = new PostService()
    const { id : postId , title: postTitle, content: postContent } : Post = await postService.getPostById(id)

    return (
        <div className={styles.BlogPage}>
            <div className="container">
                <div className={styles.BlogPage__Header}>
                    <span>- BLOG</span>
                    <h3>My Blog and News</h3>
                </div>
                <PostItem id={postId} title={postTitle} content={postContent} />
            </div>
        </div>
    )
}


