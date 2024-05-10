'use strict'

import styles from '@/assets/css/Navbar.module.css'
import Link from 'next/link'

export function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <Link href="/">Home</Link>
            <Link href="about">About</Link>
            <Link href="portfolio">Portfolio</Link>
            <Link href="blog">Blog</Link>
            <Link href="contact">Contact</Link>
        </nav>
    )
}
