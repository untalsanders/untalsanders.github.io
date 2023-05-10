'use strict'

import { Wrapper } from '@/components/Common'
import { getPosts } from '@/libs/mdx'
import Link from 'next/link'

export default function Blog({ posts }) {
    return (
        <Wrapper>
            <h1>Latest Articles</h1>
            {posts.map(post => (
                <Link key={post.slug} href={`/posts/${post.slug}`}>
                    <h2>{post.title}</h2>
                    <span>{post.date}</span>
                </Link>
            ))}
        </Wrapper>
    )
}

export async function getStaticProps() {
    return { props: { posts: getPosts() } }
}
