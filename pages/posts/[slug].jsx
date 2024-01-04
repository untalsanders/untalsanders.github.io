import { Wrapper } from '@/components/Common.jsx'
import { getFiles, getPost } from '@/libs/mdx.js'
import { MDXRemote } from 'next-mdx-remote'

export default function Post({ source }) {
    return (
        <Wrapper>
            <MDXRemote {...source} />
        </Wrapper>
    )
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getPost(params.slug)
    return {
        props: { source, frontmatter },
    }
}

export async function getStaticPaths() {
    const paths = await getFiles().map(post => ({
        params: {
            slug: post.replace(/\.mdx/, ''),
        },
    }))
    return {
        paths,
        fallback: false,
    }
}
