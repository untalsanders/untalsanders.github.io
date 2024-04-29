'use strict'

import styles from '@styles/Error.module.css'

export const ErrorPage = () => (
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
