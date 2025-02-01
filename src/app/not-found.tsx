import styles from '@/styles/NotFound.module.css'

export default function NotFound() {
    return (
        <section className={`${styles.NotFound}`}>
            <span>404</span>
            <p>
                <span>This page does not exist</span>
                <span>Please check the URL in the address bar and try again.</span>
            </p>
        </section>
    )
}
