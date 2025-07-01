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
                                Engineering and a growing interest in Artificial Intelligence, Machine Learning and Internet of Things,
                                with a passion for Physics and Mathematics.
                            </p>
                            <p>
                                Also, I&apos;m passionate developer with more than <strong>6+ years</strong> of experience building
                                web applications with Java, Python and Node.js. When I&apos;m not coding, you can find me exploring new
                                technologies, writting tech article or enjoying a fresh cup of coffee while debuggin complex problems.
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
