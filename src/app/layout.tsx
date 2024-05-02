import styles from '@/assets/css/Layout.module.css'
import '@/assets/css/globals.css'
import { Footer, Header } from '@/components'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['italic', 'normal'],
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={poppins.className}>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <title>Sanders Gutiérrez</title>
            </Head>
            <body className={styles.Layout}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
