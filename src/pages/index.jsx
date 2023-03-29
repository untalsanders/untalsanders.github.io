'use strict'

import Header from '@/components/Header'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Mi blog web personal" />
                <title>Inicio</title>
                <link rel="icon" href="/blog/favicon.ico" />
            </Head>
            <Header />
        </>
    )
}
