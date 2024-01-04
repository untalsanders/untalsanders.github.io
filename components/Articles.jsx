'use strict'

import { Wrapper } from './Common.jsx'
import Link from 'next/link'
import styled from 'styled-components'
import { FaCalendar, FaUser } from 'react-icons/fa'

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

    h2,
    p {
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: clamp(3vw, 3rem, 8rem);
        font-weight: 800;
    }

    p {
        font-weight: 300;
        letter-spacing: 1.5px;
    }
`

export function Articles({ posts }) {
    return (
        <ArticlesContainer id="articles">
            <ArticlesWrapper>
                <ArticlesTitleSection>
                    <h2>Latest Posts</h2>
                    <p>
                        These are my latest articles.{' '}
                        <strong>
                            <Link href="/posts">View all posts.</Link>
                        </strong>
                    </p>
                </ArticlesTitleSection>
                <div className="list-posts">
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
                                        <FaUser />{' '}
                                        {post.author}
                                    </span>
                                    <span>
                                        <FaCalendar />{' '}
                                        {post.date}
                                    </span>
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </ArticlesWrapper>
        </ArticlesContainer>
    )
}
