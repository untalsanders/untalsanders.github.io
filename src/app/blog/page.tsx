import PostList from '@/features/blog/presentation/post-list/post-list'
import { PostService } from '@/features/blog/application/services/PostService'
import styles from '@/styles/Blog.module.css'

const BlogPage = async () => {
    const postService = new PostService()
    const posts = await postService.getPosts()
    return (
        <>
            <div className={styles.BlogPageHero}>
                <div className="container">
                    <h1>Blog</h1>
                    <p>
                        Dive into my thoughts on coding, tech trends, and developer life. Explore my latest posts below.
                    </p>
                </div>
            </div>
            <div className="container">
                <PostList posts={posts} />
            </div>
        </>
    )
}

export default BlogPage
