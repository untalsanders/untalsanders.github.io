'use strict'

import { HomePage, AboutPage, BlogPage, ContactPage, ErrorPage, PortfolioPage } from '@pages'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'

const { VITE_APP_URL } = import.meta.env

export const router = createBrowserRouter([
    {
        path: VITE_APP_URL,
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'portfolio',
                element: <PortfolioPage />
            },
            {
                path: 'blog',
                element: <BlogPage />
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
        ],
    },
])
