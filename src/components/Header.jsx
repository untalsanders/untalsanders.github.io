'use strict'

import styles from '@styles/Header.module.css'
import { Logo } from '@components'

export function Header() {
    return (
        <header className={styles.Header}>
            <div className="container">
                <Logo />
            </div>
        </header>
    )
}
