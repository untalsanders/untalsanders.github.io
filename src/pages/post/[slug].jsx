import { Layout } from '@/components'
import { Wrapper } from '@/components/Common'
import { getFiles, getPost } from '@/libs/mdx'
import { MDXRemote } from 'next-mdx-remote'

export default function Post({ source, frontmatter }) {
    return (
        <Layout>
            <Wrapper>
                <MDXRemote {...source} />
            </Wrapper>
        </Layout>
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
