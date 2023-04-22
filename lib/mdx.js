'use strict'

import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const root = process.cwd()

export const getFiles = () => readdirSync(join(root, 'data'))

export const getFile = slug => readFileSync(join(root, 'data', slug), 'utf-8')

export const getFileBySlug = async (slug) => {
    const mdxSource = getFile(`${slug}.mdx`)
    const { data, content } = await matter(mdxSource)
    const source = await serialize(content, {})

    return {
        source,
        frontmatter: {
            slug,
            ...data,
        },
    }
}

export const getAllFilesFrontMatter = () => {
    return getFiles().reduce((posts, slug) => {
        const mdxSource = getFile(slug)
        const { data } = matter(mdxSource)
        return [{ ...data, slug: slug.replace('.mdx', '') }, ...posts]
    }, [])
}
