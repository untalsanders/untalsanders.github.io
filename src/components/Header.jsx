'use strict'

import { useState } from 'react'
import BurgerButton from './BurgerButton'
import Logo from './Logo'
import Navbar from './Navbar'
import styles from '@/styles/components/Header.module.scss'

export default function Header() {
    const [showNavbar, setShowNavbar] = useState(false)
    const [zIndex, setZIndex] = useState(false)

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar)
        setZIndex(true)
    }

    return (
        <header className={styles.Header}>
            <div className={`container ${styles.container}`}>
                <Logo />
                <BurgerButton onClick={toggleNavbar} zIndex={zIndex} />
                <Navbar show={showNavbar} />
            </div>
        </header>
    )
}
