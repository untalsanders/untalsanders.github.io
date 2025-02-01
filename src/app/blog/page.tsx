import styles from '@/styles/Blog.module.css'
import PostList from '@/features/blog/presentation/post-list/post-list'
import { PostService } from '@/features/blog/application/services/PostService'

export default async function BlogPage() {
    const postService = new PostService()
    const posts = await postService.getPosts()

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
