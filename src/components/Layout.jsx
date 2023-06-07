'use strict'

import { Footer, Header, Main, ScrollToUpButton } from '@/components'
import Head from 'next/head'

export function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Personal website" />
                <link rel="icon" href="/favicon.ico" />
                <title>Home | Sanders Gutiérrez</title>
            </Head>
            <Header />
            <Main>{children}</Main>
            <Footer />
            <ScrollToUpButton />
        </>
    )
}
