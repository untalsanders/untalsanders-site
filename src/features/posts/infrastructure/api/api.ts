'use strict'

import { Post } from '@/features/posts/domain/models/Post'
import matter from 'gray-matter'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const contentDirectory = join(process.cwd(), 'content')

/**
 * Get all files from a directory
 * @param dir The directory to read files from.
 */
export const getFiles = async (dir: string) => {
  try {
    if (!existsSync(dir)) throw new Error(`The directory "${dir}" does not exists.`)
    return readdirSync(dir)
  } catch (e) {
    if (e instanceof Error) {
      console.log(`${e.name}: ${e.message}`)
    } else {
      console.error('Unexpected error has ocurred')
    }
  }
}

/**
 * Get a single file from the content directory.
 * @param slug The slug of the file to retrieve.
 */
export const getFile = (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(contentDirectory, `${realSlug}.mdx`)
  const fileContents = readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)
  return { ...data, slug: realSlug, content } as Post
}

/**
 * Get all posts from the content directory.
 */
export const getAllPosts = async () => {
  const contentDirectory = join(process.cwd(), 'content')
  const slugs = await getFiles(contentDirectory)
  const posts = slugs?.map((slug: string) => getFile(slug)).sort((p1, p2) => (p1.date > p2.date ? -1 : 1))
  return posts
}
