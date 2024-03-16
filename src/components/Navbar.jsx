'use strict'

import styles from '@styles/Navbar.module.css'
import { Link } from 'react-router-dom'

const { VITE_APP_URL } = import.meta.env

export function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <Link to={`${VITE_APP_URL}`}>Home</Link>
            <Link to={`${VITE_APP_URL}/about`}>About</Link>
            <Link to={`${VITE_APP_URL}/service`}>Service</Link>
            <Link to={`${VITE_APP_URL}/blog`}>Blog</Link>
            <Link to={`${VITE_APP_URL}/contact`}>Contact</Link>
        </nav>
    )
}