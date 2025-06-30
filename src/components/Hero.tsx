import styles from '@/styles/Hero.module.css'
import Link from 'next/link'
import { FaCode, FaEnvelope, FaMap, FaPhone } from 'react-icons/fa6'
import { FcReading } from 'react-icons/fc'

const Hero = () => {
    return (
        <>
            <picture>
                <img className={styles.heroPicture} src="/images/avatar.png" alt="Profile" />
            </picture>
            <div className={styles.heroContent}>
                <section className={styles.heroHeader}>
                    <h3 className={styles.heroHeader__hello}>
                        Hello World! I&apos;m <span>Software Engineer</span>
                    </h3>
                    <h3 className={styles.heroHeader__name}>Sanders Gutiérrez</h3>
                    <h3 className={styles.heroHeader__learning}>
                        <FcReading />
                        AND I NEVER STOP LEARNING
                    </h3>
                </section>
                <section>
                    <p className={styles.heroBody__description}>
                        I&apos;m a Software Engineer and Developer based in Buenos Aires - Argentina, with more than{' '}
                        <strong>6+ years</strong> of experience, and I want to work together and build something unique.
                    </p>
                    <div className={styles.heroBody__buttons}>
                        <Link href="/projects">
                            <FaCode />
                            View Projects
                        </Link>
                        <Link href="/contact">
                            <FaEnvelope />
                            Contact Me
                        </Link>
                    </div>
                </section>
                <section className={styles.heroFooter}>
                    <ul>
                        <li>
                            <a href="tel:+5491165690846" target="_blank">
                                <FaPhone />
                                +54 9 11 6569-0846
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
                                <FaMap />
                                Buenos Aires, Argentina
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default Hero