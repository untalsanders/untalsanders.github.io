'use strict'

import { Footer, Header, Main } from '@/components'
import Head from 'next/head'

export function LayoutLanding(props) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Personal website" />
                <title>Inicio</title>
            </Head>
            <Header />
            <Main>{props.children}</Main>
            <Footer />
        </>
    )
}
