'use client'

import styles from '@/styles/Blog.module.css'
import { useEffect, useState } from 'react'
import { PostsService } from '@/features/blog/application/services/PostsService'
import PostItem from '@/features/blog/presentation/post-item/post-item'
import { Post } from '@/features/blog/domain/models/Post'

const PostItemPage = ({ params }: { params: Promise<{id: number}>}) => {
    const [post, setPost] = useState<Post | null>(null)

    useEffect(() => {
        (async () => {
            const { id } = (await params)
            const postsService = new PostsService()
            const data = await postsService.getPostById(id)
            setPost(data)
        })()
    }, [])

    return (
        <div className={styles.BlogPage}>
            <div className="container">
                <div className={styles.BlogPage__Header}>
                    <span>- BLOG</span>
                    <h3>My Blog and News</h3>
                </div>
                <PostItem id={post?.id ?? 0} title={post?.title ?? ""} content={post?.content ?? ""} />
            </div>
        </div>
    )
}

export default PostItemPage
