'use strict'

import styles from '@styles/Blog.module.css'
import { Link } from 'react-router-dom'

export const BlogPage = () => (
    <div className={styles.BlogPage}>
        <div className="container">
            <div className={styles.BlogPage__Header}>
                <span>- BLOG</span>
                <h3>My Blog and News</h3>
            </div>
            <section className={styles.BlogPage__PostList}>
                <article>
                    <header>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                        </svg>
                        <span>April 12, 2023</span>
                    </header>
                    <div className="post-content">
                        <h2>Et enim duis consectetur consectetur tempor veniam.</h2>
                    </div>
                    <footer>
                        <Link to="#">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </footer>
                </article>
                <article>
                    <header>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                        </svg>
                        <span>April 12, 2023</span>
                    </header>
                    <div className="post-content">
                        <h2>Magna amet ex ipsum exercitation.</h2>
                    </div>
                    <footer>
                        <Link to="#">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </footer>
                </article>
                <article>
                    <header>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                        </svg>
                        <span>April 12, 2023</span>
                    </header>
                    <div className="post-content">
                        <h2>Deserunt incididunt cillum qui velit.</h2>
                    </div>
                    <footer>
                        <Link to="#">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </footer>
                </article>
                <article>
                    <header>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                        </svg>
                        <span>April 12, 2023</span>
                    </header>
                    <div className="post-content">
                        <h2>Ex velit nisi eu ullamco eiusmod.</h2>
                    </div>
                    <footer>
                        <Link to="#">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </footer>
                </article>
                <article>
                    <header>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                        </svg>
                        <span>April 12, 2023</span>
                    </header>
                    <div className="post-content">
                        <h2>Elit in veniam aute deserunt aute proident eu adipisicing et magna.</h2>
                    </div>
                    <footer>
                        <Link to="#">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </footer>
                </article>
                <article>
                    <header>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                        </svg>
                        <span>April 12, 2023</span>
                    </header>
                    <div className="post-content">
                        <h2>Ipsum dolor duis aute anim dolor non fugiat.</h2>
                    </div>
                    <footer>
                        <Link to="#">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </footer>
                </article>
                <article>
                    <header>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                        </svg>
                        <span>April 12, 2023</span>
                    </header>
                    <div className="post-content">
                        <h2>Lorem ut amet qui laboris cillum reprehenderit adipisicing.</h2>
                    </div>
                    <footer>
                        <Link to="#">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </footer>
                </article>
                <article>
                    <header>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                        </svg>
                        <span>April 12, 2023</span>
                    </header>
                    <div className="post-content">
                        <h2>Excepteur elit sit eiusmod cupidatat ea laboris id elit dolore.</h2>
                    </div>
                    <footer>
                        <Link to="#">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </footer>
                </article>
                <article>
                    <header>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                        </svg>
                        <span>April 12, 2023</span>
                    </header>
                    <div className="post-content">
                        <h2>Aliqua reprehenderit excepteur laboris velit dolore aliquip.</h2>
                    </div>
                    <footer>
                        <Link to="#">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </footer>
                </article>
                <article>
                    <header>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                        </svg>
                        <span>April 12, 2023</span>
                    </header>
                    <div className="post-content">
                        <h2>Enim do in reprehenderit consectetur ut ad est est voluptate.</h2>
                    </div>
                    <footer>
                        <Link to="#">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </footer>
                </article>
                <article>
                    <header>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                        </svg>
                        <span>April 12, 2023</span>
                    </header>
                    <div className="post-content">
                        <h2>Enim reprehenderit elit Lorem Lorem sit mollit aliquip aliqua.</h2>
                    </div>
                    <footer>
                        <Link to="#">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </footer>
                </article>
                <article>
                    <header>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                        </svg>
                        <span>April 12, 2023</span>
                    </header>
                    <div className="post-content">
                        <h2>Esse quis esse culpa dolor ex in et eiusmod id enim officia et veniam.</h2>
                    </div>
                    <footer>
                        <Link to="#">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </footer>
                </article>
                <article>
                    <header>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                        </svg>
                        <span>April 12, 2023</span>
                    </header>
                    <div className="post-content">
                        <h2>Nulla eiusmod id sint aute reprehenderit et non irure.</h2>
                    </div>
                    <footer>
                        <Link to="#">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </footer>
                </article>
                <article>
                    <header>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                        </svg>
                        <span>April 12, 2023</span>
                    </header>
                    <div className="post-content">
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    </div>
                    <footer>
                        <Link to="#">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </footer>
                </article>
            </section>
        </div>
    </div>
)
