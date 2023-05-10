import { Layout } from '@/components'
import '@/styles/app.scss'

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
