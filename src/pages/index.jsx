'use strict'

import About from '@/components/About'
import DefaultLayout from '@/components/DefaultLayout'
import Landing from '@/components/Landing'
import Services from '@/components/Services'

export default function Home() {
    return (
        <DefaultLayout>
            <Landing />
            <About />
            <Services />
        </DefaultLayout>
    )
}
