'use strict'

import styles from '@/styles/components/Navbar.module.scss'

export default function Navbar({show}) {
    return (
        <nav className={`${styles.Nav} ${show ? styles.ShowMenu : ''}`}>
            <a href="/blog#about">Sobre Mí</a>
            <a href="/blog#services">Servicios</a>
            <a href="/blog#portfolio">Portafolio</a>
            <a href="/blog/blog">Blog</a>
            <a href="/blog#contact">Contacto</a>
        </nav>
    )
}
