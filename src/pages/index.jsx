'use strict'

import { About, Articles, Contact, Hero, Services } from '@/components'
import { getPosts } from '@/libs/mdx'

export default function Home({ posts }) {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Articles posts={posts} />
            <Contact />
        </>
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
