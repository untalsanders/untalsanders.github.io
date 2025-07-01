import styles from '@/styles/About.module.css'
import { FaUser } from 'react-icons/fa6'

export default function About() {
    return (
        <div id='about' className={styles.about}>
            <div className={`container`}>
                <div className={styles.aboutHeader}>
                    <h2>About <span>Me</span></h2>
                    <p>Passionate developer with a love for clean code, strong coffee, and open source contributions.</p>
                </div>
                <div className={`${styles.aboutBody}`}>
                    <picture className={styles.aboutPicture}>
                        <img src="/images/profile.jpg" alt="Profile" />
                    </picture>
                    <section className={styles.aboutInfo}>
                        <section className={styles.aboutDescription}>
                            <h3><FaUser /> Who Am I?</h3>
                            <p>
                                My name is Sanders and I&apos;m a professional with a strong career in Software
                                Engineering and a growing interest in Artificial Intelligence and Machine Learning, with
                                a passion for Physics and Mathematics.
                            </p>
                            <p>
                                I have more than 5 years of experience in software development with Java and Node.js. I
                                have creativity to solve problems and adapt to different environments and cultures.
                                Ability to work in a team and manage interpersonal relationships.
                            </p>
                        </section>
                        <section className={styles.aboutStats}>
                            <div>
                                <span>68</span>
                                <span>Repositories</span>
                            </div>
                            <div>
                                <span>2K</span>
                                <span>Commits</span>
                            </div>
                            <div>
                                <span>193</span>
                                <span>Issues</span>
                            </div>
                            <div>
                                <span>76</span>
                                <span>PRs Merged</span>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}
