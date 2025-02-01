'use strict'

import styles from '@/styles/Header.module.css'
import { Logo, Navbar } from '@/components'
import { FaBars } from 'react-icons/fa'

export function Header() {
    return (
        <header className={styles.Header}>
            <div className="container">
                <Logo />
                <Navbar />
                <button className={styles.ButtonMobile}>
                    <FaBars />
                </button>
            </div>
        </header>
    )
}
