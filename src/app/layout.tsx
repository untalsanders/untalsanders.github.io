import styles from '@/assets/css/Layout.module.css'
import '@/assets/css/globals.css'
import { Footer, Header } from '@/components'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
    title: 'Sanders Gutiérrez',
    icons: {
        icon: '/favicon.svg',
    }
}

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['italic', 'normal'],
})

export default function RootLayout({ children } : Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={poppins.className}>
            <body className={styles.Layout}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
