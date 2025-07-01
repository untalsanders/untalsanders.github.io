import styles from '@/styles/Services.module.css'

export default function Services() {
    return (
        <div id='services' className={styles.ServicePage}>
            <div className="container">
                <section className={styles.ServicePage__Header}>
                    <header>
                        <h3>- SERVICES</h3>
                        <a href="mailto:support@untalsanders.dev">ing.sanders@gmail.com</a>
                    </header>
                </section>
                <section>
                    <div className={`${styles.ServicePage__Service_items} container`}>
                        <article>
                            <span>
                                <svg
                                    stroke="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 640 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
                                </svg>
                            </span>
                            <h3>Software Development</h3>
                            <p>
                                Get an optimized design aligned with the visual identity of your brand, planned from
                                usability and become more visible to your audiences through a friendly design
                                optimized for search engines.
                            </p>
                        </article>
                        <article>
                            <span>
                                <svg
                                    stroke="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm176-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12v312z"></path>
                                </svg>
                            </span>
                            <h3>Mobile Apps</h3>
                            <p>
                                Align current mobile trends, to improve your processes and increase the level of
                                accessibility and visibility of your customers, allowing you to build loyalty with
                                your target audience, since they can be in front of your business at all times.
                            </p>
                        </article>
                        <article>
                            <span>
                                <svg
                                    stroke="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                                        clipRule="evenodd"></path>
                                    <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z"></path>
                                    <path
                                        fillRule="evenodd"
                                        d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
                                        clipRule="evenodd"></path>
                                </svg>
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