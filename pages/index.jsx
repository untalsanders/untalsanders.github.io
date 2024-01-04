'use strict'

import { About, Articles, Contact, Hero, Services } from '@/components/index.js'
import { getPosts } from '@/libs/mdx.js'

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
    const posts = getPosts().slice(0, 2)
    return {
        props: {
            posts,
        },
    }
}
