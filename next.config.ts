import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['jsx', 'js', 'mdx', 'md', 'tsx', 'ts'],
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig)
