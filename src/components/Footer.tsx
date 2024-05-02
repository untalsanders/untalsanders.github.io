'use strict'

import styles from '@/assets/css/Footer.module.css'

const Copyright = () => <div>Copyright &copy; 2024 Sanders Gutiérrez. All rights reserved.</div>

const MadeIn = () => (
    <div className={styles.Footer__Content_MadeIn}>
        <span>Made in Argentina</span>
        <img src="/images/flag-argentina.svg" alt="flag-argentina" width={28} height={20} />
    </div>
)

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.Footer__Content}`}>
                <Copyright />
                <MadeIn />
            </div>
        </footer>
    )
}
