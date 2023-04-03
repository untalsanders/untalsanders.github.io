'use strict'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Mi blog web personal" />
                <title>Inicio</title>
            </Head>
            <Header />
            <Main />
            <Footer />
        </>
    )
}
