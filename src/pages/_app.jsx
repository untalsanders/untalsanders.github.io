import { Layout } from '@/components'
import '@/styles/globals.scss'
import 'normalize.css'

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
