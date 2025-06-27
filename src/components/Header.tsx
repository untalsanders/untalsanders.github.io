'use strict'

import styles from '@/styles/Header.module.css'
import { Logo, Navbar } from '@/components'

export function Header() {
    return (
        <header className={styles.Header}>
            <div className="container">
                <Logo />
                <Navbar />
            </div>
        </header>
    )
}
