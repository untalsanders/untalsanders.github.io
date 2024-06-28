import styles from '@/assets/css/Blog.module.css'
import { PostList } from '@/components/PostList'

export default function BlogPage() {
    return (
        <div className={styles.BlogPage}>
            <div className="container">
                <div className={styles.BlogPage__Header}>
                    <span>- BLOG</span>
                    <h3>My Blog and News</h3>
                </div>
                <PostList />
            </div>
        </div>
    )
}
