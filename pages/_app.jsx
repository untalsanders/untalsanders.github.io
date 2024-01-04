import { PageLayout } from '@/components/PageLayout.jsx'
import '@/styles/globals.scss'
import 'normalize.css'

export default function App({ Component, pageProps }) {
    return (
        <PageLayout>
            <Component {...pageProps} />
        </PageLayout>
    )
}
