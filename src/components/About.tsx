import styles from '@/styles/About.module.css'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function About() {
    return (
        <div id='about' className={styles.about}>
            <div className={`${styles.aboutContainer} container`}>
                <picture className={styles.heroPicture}>
                    <img src="/images/profile.jpg" alt="Profile" />
                </picture>
                <section className={styles.aboutContent}>
                    <section>
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
                    <section className={styles.aboutContent__stats}>
                        <div>
                            <span>68</span>
                            <span>Repositories</span>
                        </div>
                        <div>
                            <span>4k</span>
                            <span>Commits</span>
                        </div>
                        <div>
                            <span>76</span>
                            <span>PRs Merged</span>
                        </div>
                    </section>
                    {/* <section className={styles.aboutContent__social}>
                        <ul>
                            <li>
                                <a href="https://github.com/untalsanders" target="_blank">
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/untalsanders" target="_blank">
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com/@untalsanders" target="_blank">
                                    <FaYoutube />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/untalsanders" target="_blank">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/untalsanders" target="_blank">
                                    <FaTwitter />
                                </a>
                            </li>
                        </ul>
                    </section> */}
                </section>
            </div>
        </div>
    )
}
