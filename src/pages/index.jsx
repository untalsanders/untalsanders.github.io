'use strict'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Landing from '@/components/Landing'
import Services from '@/components/Services'
import Footer from '@/components/partials/Footer'
import Header from '@/components/partials/Header'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Inicio</title>
                <meta name="description" content="Mi blog web personal" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <main>
                <Landing />
                <About />
                <Services />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
