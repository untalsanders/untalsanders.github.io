'use strict'

import { Wrapper } from '@/components/Common'
import DefaultLayout from '@/components/DefaultLayout'
import { getAllFilesFrontMatter } from 'lib/mdx'
import Link from 'next/link'

export default function Blog({ posts }) {
    return (
        <DefaultLayout>
            <Wrapper>
                <h1>Latest Posts</h1>
                {posts.map(post => (
                    <Link key={post.slug} href={`blog/${post.slug}`}>
                        <h2>{post.title}</h2>
                        <p>{post.date}</p>
                    </Link>
                ))}
            </Wrapper>
        </DefaultLayout>
    )
}

export async function getStaticProps() {
    return { props: { posts: await getAllFilesFrontMatter() } }
}
