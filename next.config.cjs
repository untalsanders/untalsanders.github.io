'use strict'

const withMDX = require('@next/mdx')()

const nextConfig = {
    pageExtensions: ['js', 'jsx'],
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
}

module.exports = withMDX(nextConfig)
