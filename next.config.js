'use strict'

const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    pageExtensions: ['js', 'jsx', 'mdx'],
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        unoptimized: true,
    },
}

module.exports = withMDX(nextConfig)
