'use strict'

import { useState } from 'react'
import styles from '@/styles/components/BurgerButton.module.scss'

export default function BurgerButton({ onClick, zIndex }) {
    const [icon, setIcon] = useState(false)
    const toggleIcon = () => setIcon(!icon)

    return (
        <button
            onClick={onClick}
            className={`${styles.Burger} ${zIndex ? styles.upZIndex : ''}`}
            aria-label="Open Menu">
            <i onClick={toggleIcon} className={`fa-solid ${icon ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
    )
}
