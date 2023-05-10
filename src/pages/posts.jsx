'use strict'

import { Layout } from '@/components'
import { Wrapper } from '@/components/Common'
import { getPosts } from '@/libs/mdx'
import Link from 'next/link'

export default function Blog({ posts }) {
    return (
        <Layout>
            <Wrapper>
                <h1>Latest Posts</h1>
                {posts.map(post => (
                    <Link key={post.slug} href={`/post/${post.slug}`}>
                        <h2>{post.title}</h2>
                        <span>{post.date}</span>
                    </Link>
                ))}
            </Wrapper>
        </Layout>
    )
}

export async function getStaticProps() {
    return { props: { posts: getPosts() } }
}
