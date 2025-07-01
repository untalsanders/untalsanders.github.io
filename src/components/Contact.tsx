import styles from '@/styles/Contact.module.css'
import { FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'

export default function Contact() {
    return (
        <div id="contact" className={styles.ContactPage}>
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
                                <a href="tel:+5491165690846" target="_blank">
                                    <FaPhone />
                                    +54 (11) 6569-0846
                                </a>
                            </li>
                            <li>
                                <a href="mailto:ing.sanders@gmail.com" target="_blank">
                                    <FaEnvelope />
                                    ing.sanders@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://maps.app.goo.gl/e7AdznMGpiHcBEaS6" target="_blank">
                                    <FaMapMarkerAlt />
                                    Buenos Aires, Argentina
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>

                <form className={styles.contactForm} method="POST">
                    <label>Name</label>
                    <input name="nickname" type="text" placeholder="Your Name" required />
                    <label>Email</label>
                    <input name="email" type="email" placeholder="Your Email" required />
                    <label>Message</label>
                    <textarea name="message" placeholder="Your Message" rows={8} required></textarea>
                    <button type="submit" className={styles.buttonSubmit}>
                        <FaPaperPlane />
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}
