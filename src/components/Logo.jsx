'use strict'

import Image from 'next/image'
import styles from '@/styles/components/Logo.module.scss'

export default function Logo() {
    return (
        <div className={styles.Logo}>
            <Image src="/blog/logotipo.svg" alt="Logotipo sandersgutierrez.github.io" width={45} height={45} priority />
            Sanders Gutiérrez
        </div>
    )
}
