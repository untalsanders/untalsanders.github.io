'use strict'

import { Outlet } from 'react-router-dom'
import { Footer, Header } from '@components'

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
