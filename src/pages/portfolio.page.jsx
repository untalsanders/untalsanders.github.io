'use strict'

import styles from '@styles/Portfolio.module.css'

export const PortfolioPage = () => (
    <div className={styles.PortfolioPage}>
        <div className="container">
            <h3>- EXPERIENCE</h3>
        </div>
        <section>
            <div className={`${styles.About__Experience_items} container`}>
                <article>
                    <span>Feb 2019 - Present</span>
                    <h3>Freelancer</h3>
                    <span>Software Developer</span>
                    <p>
                        Development of custom applications for personal use using the technologies that I know the most
                        and that every day I try to learn a little more about each one. Among them I can mention Java
                        (Mainly), Nodejs, PHP and Python in Back-end and Front-end HTML5, CSS3 and Javascript and a
                        constant learning of frameworks such as Angular and the Reactjs component development library.
                    </p>
                </article>
                <article>
                    <span>Mar 2019 - Oct 2022</span>
                    <h3>Latam Airlines (Globant)</h3>
                    <span>Senior Java Developer</span>
                    <p>Development of use cases for the area of airport agents of the company Latam Airline.</p>
                </article>
                <article>
                    <span>Sep 2021 - Feb 2022</span>
                    <h3>Falabella Bank (Technisys - Contractor)</h3>
                    <span>Senior Software Developer</span>
                    <p>
                        Development and maintenance of Core Banking modules of Falabella Bank of Chile. I had the
                        opportunity to develop a project called CARD-Rules from 0%, which consisted of activating or
                        deactivating permits for the use of credit and debit cards inside and outside the country.
                    </p>
                </article>
                <article>
                    <span>Apr 2021 - Sep 2021</span>
                    <h3>Associate Professor @ DigitalHouse</h3>
                    <span>Java Teacher</span>
                    <p>
                        Professor of Java Programming and object orientation, especially I teach to use the Spring
                        framework and various subprojects such as SpringBoot, Spring Data, Spring Security among others.
                        Also basic concepts of both relational and non-relational database design.
                    </p>
                </article>
            </div>
        </section>
    </div>
)
