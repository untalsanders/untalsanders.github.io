'use client'

import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

export function Navbar() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <button className={styles.ButtonMobile} onClick={handleMenuToggle}>
                <FaBars />
            </button>
            {isMenuOpen && (
                <nav className={styles.MobileMenu}>
                    <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={handleMenuToggle}>
                        Home
                    </Link>
                    <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={handleMenuToggle}>
                        About
                    </Link>
                    <Link
                        href="/portfolio"
                        className={pathname === '/portfolio' ? 'active' : ''}
                        onClick={handleMenuToggle}>
                        Portfolio
                    </Link>
                    <Link href="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={handleMenuToggle}>
                        Contact
                    </Link>
                </nav>
            )}
            <nav className={styles.Navbar}>
                <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={handleMenuToggle}>
                    Home
                </Link>
                <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={handleMenuToggle}>
                    About
                </Link>
                <Link
                    href="/portfolio"
                    className={pathname === '/portfolio' ? 'active' : ''}
                    onClick={handleMenuToggle}>
                    Portfolio
                </Link>
                <Link href="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={handleMenuToggle}>
                    Contact
                </Link>
            </nav>
        </>
    )
}
