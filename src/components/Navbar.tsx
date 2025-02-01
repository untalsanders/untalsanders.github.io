'use client'

import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
    const pathname = usePathname()

    return (
        <nav className={styles.Navbar}>
            <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
            <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
            <Link href="/portfolio" className={pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
            <Link href="/blog" className={pathname === '/blog' ? 'active' : ''}>Blog</Link>
            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>
    )
}
