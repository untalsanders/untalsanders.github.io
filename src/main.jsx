'use strict'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes'
import '@assets/css/normalize.css'
import '@styles/global.css'

const root = createRoot(document.querySelector('#root'))
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
