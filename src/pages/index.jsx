'use strict'

import About from '@/components/About'
import DefaultLayout from '@/components/DefaultLayout'
import Landing from '@/components/Landing'

export default function Home() {
    return (
        <DefaultLayout>
            <Landing />
            <About />
        </DefaultLayout>
    )
}
