'use strict'

import { Wrapper } from '@/components/Common'
import { getPosts } from '@/libs/mdx'
import Link from 'next/link'
import { FaCalendar, FaUser } from 'react-icons/fa'

export default function Blog({ posts }) {
    return (
        <Wrapper>
            <div className="list-posts mb-4">
                {posts.map(post => (
                    <article key={post.slug}>
                        <picture>
                            <source srcSet={post.cover} />
                            <img src={post.cover} alt={post.cover} />
                        </picture>
                        <div>
                            <h2>
                                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                            </h2>
                            <p>
                                <span>
                                    <FaUser /> {post.author}
                                </span>
                                <span>
                                    <FaCalendar /> {post.date}
                                </span>
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </Wrapper>
    )
}

export async function getStaticProps() {
    return { props: { posts: getPosts() } }
}
