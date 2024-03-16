'use strict'

import { HomePage } from '@pages'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'

const { VITE_APP_URL } = import.meta.env

export const router = createBrowserRouter([
    {
        path: VITE_APP_URL,
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
])
