'use strict'

import { Wrapper } from '@/components/Common'
import Link from 'next/link'
import styled from 'styled-components'

const ArticlesContainer = styled.section`
    padding: clamp(4rem, 20vh, 8rem) 0;
`

const ArticlesWrapper = styled(Wrapper)`
    & > :first-child {
        padding-bottom: clamp(3rem, 20vh, 4rem);
    }
`

const ArticlesTitleSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: clamp(3vw, 3rem, 8rem);
        font-weight: 800;
    }

    p {
        font-weight: 300;
        letter-spacing: 2px;
    }
`

export function Articles({ posts }) {
    return (
        <ArticlesContainer id="articles">
            <ArticlesWrapper>
                <ArticlesTitleSection>
                    <h2>Blog</h2>
                    <p>These are my latest articles. <strong><Link href="/posts/">View all posts.</Link></strong></p>
                </ArticlesTitleSection>
                {posts.map(post => (
                    <Link key={post.slug} href={`/posts/${post.slug}`}>
                        <article>
                            <h2>{post.title}</h2>
                            <p>{post.date}</p>
                        </article>
                    </Link>
                ))}
            </ArticlesWrapper>
        </ArticlesContainer>
    )
}
