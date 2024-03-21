'use strict'

import styles from '@styles/Portfolio.module.css'

export const PortfolioPage = () => (
    <div className={styles.PortfolioPage}>
        <div className={`${styles.PortfolioPage__Header} container`}>
            <span>- PROJECTS</span>
            <header>
                <h3>Recent completed works</h3>
                <div>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} viewBox="0 0 320 512">
                            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                        </svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} viewBox="0 0 320 512">
                            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                        </svg>
                    </a>
                </div>
            </header>
        </div>
        <section>
            <div className={`${styles.PortfolioPage__Items} container`}>
                <article>
                    <picture>
                        <img src="/images/img-1.jpg" alt="image" />
                    </picture>
                    <div>
                        <span>
                            <a href="#">Youtube</a>
                        </span>
                        <h3 class="title">
                            <a href="https://www.youtube.com/watch?v=7e90gBu4pas">New Technology</a>
                        </h3>
                    </div>
                </article>
                <article>
                    <picture>
                        <img src="/images/bg-page-posts.webp" alt="image" />
                    </picture>
                    <div>
                        <span>
                            <a href="#">Vimeo</a>
                        </span>
                        <h3 class="title">
                            <a href="https://www.youtube.com/watch?v=7e90gBu4pas">Firogo Majestic Ltd.</a>
                        </h3>
                    </div>
                </article>
                <article>
                    <picture>
                        <img src="/images/img-2.jpg" alt="image" />
                    </picture>
                    <div>
                        <span>
                            <a href="#">Soundcloud</a>
                        </span>
                        <h3 class="title">
                            <a href="https://www.youtube.com/watch?v=7e90gBu4pas">Creative Building</a>
                        </h3>
                    </div>
                </article>
                <article>
                    <picture>
                        <img src="/images/bg-page-posts.webp" alt="image" />
                    </picture>
                    <div>
                        <span>
                            <a href="#">Instagram</a>
                        </span>
                        <h3 class="title">
                            <a href="https://www.youtube.com/watch?v=7e90gBu4pas">Other Technology</a>
                        </h3>
                    </div>
                </article>
                <article>
                    <picture>
                        <img src="/images/img-3.jpg" alt="image" />
                    </picture>
                    <div>
                        <span>
                            <a href="#">Fiction Scienty</a>
                        </span>
                        <h3 class="title">
                            <a href="https://www.youtube.com/watch?v=7e90gBu4pas">Scienty</a>
                        </h3>
                    </div>
                </article>
                <article>
                    <picture>
                        <img src="/images/bg-page-posts.webp" alt="image" />
                    </picture>
                    <div>
                        <span>
                            <a href="#">Movies</a>
                        </span>
                        <h3 class="title">
                            <a href="https://www.youtube.com/watch?v=7e90gBu4pas">Netflix</a>
                        </h3>
                    </div>
                </article>
            </div>
        </section>
        <section className={styles.PortfolioPage__Testimonials}>
            <div className="container">
                <div>
                    <span>- Testimonial</span>
                    <h3>What client's say?</h3>
                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <p>
                                    Loved the template design, documentation, customizability and the customer support
                                    from Marketify team! I am a noob in programming but the Marketify team helped me
                                    successfully.
                                </p>
                            </div>
                            <div>
                                <div>
                                    <h3>Alan Walker</h3>
                                </div>
                            </div>
                            <p>Sales Manager at Vivaco Shop</p>
                        </div>
                        <div>
                            <div>
                                <p>
                                    I rarely like to write reviews, but the Marketify team truly deserve a standing
                                    ovation for their customer support, customisation and most importantly, friendliness
                                    and professionalism.
                                </p>
                            </div>
                            <div>
                                <div>
                                    <h3>John Doe</h3>
                                </div>
                            </div>
                            <p>User Interface Design at PCL Lab</p>
                        </div>
                        <div>
                            <div>
                                <p>
                                    Really the Code Quality, Customer Support, and design are awesome and its good
                                    support they are giving. They give an instant solution to our needs. Really awesome.
                                    I will strongly recommend to my friends.
                                </p>
                            </div>
                            <div>
                                <div>
                                    <h3>Keita Smith</h3>
                                </div>
                            </div>
                            <p>Senior Designer at Behance</p>
                        </div>
                    </div>
                    <div>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
)
