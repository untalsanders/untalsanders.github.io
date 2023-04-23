'use strict'

import { About, Articles, Contact, Landing, LayoutLanding, Services } from '@/components'
import { getPosts } from '@/libs/mdx'

export default function Home({ posts }) {
    return (
        <LayoutLanding>
            <Landing />
            <About />
            <Services />
            <Articles posts={posts} />
            <Contact />
        </LayoutLanding>
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
