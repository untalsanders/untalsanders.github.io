import styles from '@/styles/Services.module.css'
import { FaMobileAlt } from 'react-icons/fa'
import { FaCode, FaScrewdriverWrench } from 'react-icons/fa6'

export default function Services() {
    return (
        <div id="services" className={styles.services}>
            <div className="container">
                <header className={styles.servicesHeader}>
                    <h2>
                        Services
                    </h2>
                    <p>
                        Have a project in mind or just want to chat about code? Drop me a message, and let&apos;s make
                        things happen!
                    </p>
                </header>
                <section>
                    <div className={`${styles.ServicePage__Service_items} container`}>
                        <article>
                            <span>
                                <FaCode />
                            </span>
                            <h3>Software Development</h3>
                            <p>
                                Get an optimized design aligned with the visual identity of your brand, planned from
                                usability and become more visible to your audiences through a friendly design optimized
                                for search engines.
                            </p>
                        </article>
                        <article>
                            <span>
                                <FaMobileAlt />
                            </span>
                            <h3>Mobile Apps</h3>
                            <p>
                                Align current mobile trends, to improve your processes and increase the level of
                                accessibility and visibility of your customers, allowing you to build loyalty with your
                                target audience, since they can be in front of your business at all times.
                            </p>
                        </article>
                        <article>
                            <span>
                                <FaScrewdriverWrench />
                            </span>
                            <h3>Consultancy</h3>
                            <p>
                                Ensure the perfect functioning of your company, through a specialized computer
                                consultancy, which ranges from the analysis of requirements to the analysis and
                                corrective and preventive maintenance of your computer applications.
                            </p>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    )
}
