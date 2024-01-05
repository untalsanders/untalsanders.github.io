'use strict'

const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx'],
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
}

module.exports = withMDX(nextConfig)
