'use strict'

import { About, Articles, Contact, Landing, Layout, Services } from '@/components'
import { getPosts } from '@/libs/mdx'

export default function Home({ posts }) {
    return (
        <Layout>
            <Landing />
            <About />
            <Services />
            <Articles posts={posts} />
            <Contact />
        </Layout>
    )
}

export async function getStaticProps() {
    const posts = getPosts().slice(0, 1)
    return {
        props: {
            posts,
        },
    }
}
