'use strict'

import styles from '@/styles/Logo.module.css'
import Link from 'next/link'
import LogoCircleSVG from './LogoCircleSVG'

const VITE_APP_URL = '/'

export function Logo() {
    return (
        <div className={styles.Logo}>
            <Link href={VITE_APP_URL}>
                <LogoCircleSVG />
                <span className={styles.logoText}>
                    Sanders <span>Gutiérrez</span>
                </span>
            </Link>
        </div>
    )
}
