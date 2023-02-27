import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'

export default function Home() {
    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Mi blog web personal" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className={styles.center}>
                    <Image
                        src="/logotipo.svg"
                        alt="Logotipo sandersgutierrez.github.io"
                        width={300}
                        height={300}
                        priority
                    />
                    <p>Hello, Welcome to my personal weblog</p>
                </div>
            </main>
        </>
    )
}
