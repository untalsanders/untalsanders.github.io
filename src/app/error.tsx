'use client'

import styles from '@/assets/css/Error.module.css'

export default function ErrorPage() {
    return (
        <div className={styles.ErrorPage}>
            <section className={styles.ErrorPage__Description}>
                <span>404</span>
                <p>
                    <span>This page doesn't exist</span>
                    <span>Please check the URL in the address bar and try again.</span>
                </p>
            </section>
        </div>
    )
}
