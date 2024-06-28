import styles from '@/assets/css/Contact.module.css'

export default function ContactPage() {
    return (
        <div className={styles.ContactPage}>
            <div className={`container ${styles.ContactPage__Content}`}>
                <div className={styles.ContactPage__Header}>
                    <span>- Contact</span>
                    <h3>Get in touch</h3>
                    <p>
                        I&apos;m currently available to take on new projects, so feel free to send me a message about
                        anything that you want to run past me. You can contact anytime at 24/7.
                    </p>
                    <section className={styles.ContactPage__Info}>
                        <ul>
                            <li>
                                <a href="tel:+54 9 11 6021 9207">+54 9 11 6021 9207</a>
                            </li>
                            <li>
                                <a href="mailto:ing.sanders@gmail.com">info@untalsanders.dev</a>
                            </li>
                            <li>
                                <a href="#">Buenos Aires, Argentina</a>
                            </li>
                        </ul>
                    </section>
                </div>

                <div className={styles.ContactPage__Form}>
                    <form method="POST">
                        <input name="nickname" type="text" placeholder="Enter your name" />
                        <input name="email" type="email" placeholder="Enter your name" />
                        <textarea name="message" placeholder="Write something..."></textarea>
                        <button type="submit" className="link-button">
                            Submit now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
