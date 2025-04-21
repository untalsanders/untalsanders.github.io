import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
    output: 'export',
    distDir: 'dist',
    pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx', 'md'],
}

const withMDX = createMDX({
    // Add your MDX options here
})

export default withMDX(nextConfig)
