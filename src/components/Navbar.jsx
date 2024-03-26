'use strict'

import styles from '@styles/Navbar.module.css'
import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <Link to={``}>Home</Link>
            <Link to={`about`}>About</Link>
            <Link to={`portfolio`}>Portfolio</Link>
            <Link to={`blog`}>Blog</Link>
            <Link to={`contact`}>Contact</Link>
        </nav>
    )
}