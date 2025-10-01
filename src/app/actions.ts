'use server'

import { Resend } from 'resend'
import { EmailData } from '../shared/types/types'
import { ReactElement } from 'react'
import EmailTemplate from '@/components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)
const toEmail = process.env.TO_EMAIL as string | undefined

export async function sendEmail(emailData: EmailData) {
  const { name, email, subject, body } = emailData

  if (!toEmail) {
    throw new Error('TO_EMAIL is not defined in environment variables.')
  }

  const message = {
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: toEmail,
    subject: subject ? `📨 ${subject}` : `📨 New message from ${name}`,
    react: EmailTemplate({
      name,
      email,
      subject,
      body,
    }) as ReactElement,
  }
  const { data, error } = await resend.emails.send(message)

  if (error) {
    throw new Error(`Failed to send email: ${error.message}`)
  }

  return {
    success: true,
    data,
  }
}

// Post management actions
import { writeFileSync, unlinkSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { redirect } from 'next/navigation'


function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export async function createPost(formData: FormData) {
  'use server'

  const title = formData.get('title') as string
  const excerpt = formData.get('excerpt') as string
  const coverImage = formData.get('coverImage') as string
  const date = formData.get('date') as string
  const authorName = formData.get('authorName') as string
  const authorPicture = formData.get('authorPicture') as string
  const ogImageUrl = formData.get('ogImageUrl') as string
  const content = formData.get('content') as string
  const preview = formData.has('preview')

  const slug = slugify(title)
  const contentDirectory = join(process.cwd(), 'content')
  const filePath = join(contentDirectory, `${slug}.mdx`)

  const frontmatter = {
    title,
    excerpt,
    coverImage,
    date,
    author: {
      name: authorName,
      picture: authorPicture,
    },
    ogImage: {
      url: ogImageUrl,
    },
    preview,
  }

  const fileContent = matter.stringify(content, frontmatter)

  writeFileSync(filePath, fileContent, 'utf-8')

  redirect('/dashboard/posts')
}

export async function updatePost(formData: FormData) {
  'use server'

  const slug = formData.get('slug') as string
  const title = formData.get('title') as string
  const excerpt = formData.get('excerpt') as string
  const coverImage = formData.get('coverImage') as string
  const date = formData.get('date') as string
  const authorName = formData.get('authorName') as string
  const authorPicture = formData.get('authorPicture') as string
  const ogImageUrl = formData.get('ogImageUrl') as string
  const content = formData.get('content') as string
  const preview = formData.has('preview')

  const contentDirectory = join(process.cwd(), 'content')
  const filePath = join(contentDirectory, `${slug}.mdx`)

  const frontmatter = {
    title,
    excerpt,
    coverImage,
    date,
    author: {
      name: authorName,
      picture: authorPicture,
    },
    ogImage: {
      url: ogImageUrl,
    },
    preview,
  }

  const fileContent = matter.stringify(content, frontmatter)

  writeFileSync(filePath, fileContent, 'utf-8')

  redirect('/dashboard/posts')
}

export async function deletePost(formData: FormData) {
  'use server'

  const slug = formData.get('slug') as string

  const contentDirectory = join(process.cwd(), 'content')
  const filePath = join(contentDirectory, `${slug}.mdx`)

  unlinkSync(filePath)

  redirect('/dashboard/posts')
}
