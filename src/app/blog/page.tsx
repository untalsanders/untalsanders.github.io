'use client'

import styles from '@/styles/Blog.module.css'
import PostList from '@/features/blog/presentation/post-list/post-list'
import { useEffect, useState } from 'react'
import { PostsService } from '@/features/blog/application/services/PostsService'
import { Post } from '@/features/blog/domain/models/Post'

export default function BlogPage() {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        (async () => {
            const postsService = new PostsService()
            const postList = await postsService.getPosts()
            setPosts(postList)
        })()
    }, [])

    return (
        <div className={styles.BlogPage}>
            <div className="container">
                <div className={styles.BlogPage__Header}>
                    <span>- BLOG</span>
                    <h3>My Blog and News</h3>
                </div>
                <PostList posts={posts}/>
            </div>
        </div>
    )
}
