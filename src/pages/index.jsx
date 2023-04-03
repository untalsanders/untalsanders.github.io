'use strict'

import About from '@/components/About'
import Contact from '@/components/Contact'
import DefaultLayout from '@/components/DefaultLayout'
import Landing from '@/components/Landing'
import Services from '@/components/Services'

export default function Home() {
    return (
        <DefaultLayout>
            <Landing />
            <About />
            <Services />
            <Contact />
        </DefaultLayout>
    )
}
