import DefaultLayout from '@/components/DefaultLayout'
import { Wrapper } from '@/components/Common'
import { getFileBySlug, getFiles } from 'lib/mdx'
import { MDXRemote } from 'next-mdx-remote'

export default function Post({ source, frontmatter }) {
    return (
        <DefaultLayout>
            <Wrapper>
                <MDXRemote {...source} />
            </Wrapper>
        </DefaultLayout>
    )
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug)
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
