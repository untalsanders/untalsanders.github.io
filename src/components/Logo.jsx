'use strict'

import styles from '@styles/Logo.module.css'
import { Link } from 'react-router-dom'
import LogoCircleSVG from './LogoCircleSVG'

const { VITE_APP_URL } = import.meta.env

export function Logo() {
    return (
        <div className={styles.Logo}>
            <Link to={VITE_APP_URL}>
                <LogoCircleSVG />
                <span className={styles.logoText}>
                    Sanders <span>Gutiérrez</span>
                </span>
            </Link>
        </div>
    )
}
