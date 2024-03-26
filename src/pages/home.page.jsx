'use strict'

import styles from '@styles/Home.module.css'
import { Link } from 'react-router-dom'

export const HomePage = () => (
    <div className={styles.Hero}>
        <div className={`${styles.Hero__Content} container`}>
            <picture className={styles.Hero__Content__Left}>
                <img src="/images/avatar.png" alt="" />
            </picture>
            <div className={styles.Hero__Content__Right}>
                <section className={styles.Hero__Content__Right_title}>
                    <h3>
                        Hi, I'm <span>Sanders!</span>
                    </h3>
                    <h3>
                        <span>SOFTWARE</span>
                        <span>ENGINEER</span>
                    </h3>
                    <h3>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            version="1"
                            viewBox="0 0 48 48"
                            enableBackground="new 0 0 48 48"
                            height={30}
                            width={30}
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="#5C6BC0" d="M40,40c-6.9,0-16,4-16,4V22c0,0,9-4,18-4L40,40z"></path>
                            <path fill="#7986CB" d="M8,40c6.9,0,16,4,16,4V22c0,0-9-4-18-4L8,40z"></path>
                            <g fill="#FFB74D">
                                <circle cx="24" cy="12" r="8"></circle>
                                <path d="M41,32h1c0.6,0,1-0.4,1-1v-4c0-0.6-0.4-1-1-1h-1c-1.7,0-3,1.3-3,3v0C38,30.7,39.3,32,41,32z"></path>
                                <path d="M7,26H6c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h1c1.7,0,3-1.3,3-3v0C10,27.3,8.7,26,7,26z"></path>
                            </g>
                        </svg>
                        AND I NEVER STOP LEARNING
                    </h3>
                </section>
                <section className={styles.Hero__Content__Right_subtitle}>
                    <p>
                        I'm a Buenos Aires, Argentina based Developer and Software Engineer with <span>8+ years</span>{' '}
                        of experience, and I want to work together and build something unique.
                    </p>
                </section>
                <section className={styles.Hero__Content__Right_buttons}>
                    <Link to={`portfolio`}>Got a projects?</Link>
                    <Link to={`contact`}>Let's talk</Link>
                </section>
                <section className={styles.Hero__Content__Right_info}>
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
        </div>
    </div>
)
