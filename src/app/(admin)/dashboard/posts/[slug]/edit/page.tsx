import { getFile } from '@/features/posts/infrastructure/api/api'
import { updatePost } from '@/app/actions'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface EditPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { slug } = await params
  const post = getFile(slug)

  if (!post) {
    notFound()
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Editar Post</h1>
        <Link
          href="/dashboard/posts"
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Volver
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <form action={updatePost} className="space-y-6">
          <input type="hidden" name="slug" value={post.slug} />

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={post.title}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
              Extracto
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              rows={3}
              defaultValue={post.excerpt}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">
              Imagen de Portada
            </label>
            <input
              type="text"
              id="coverImage"
              name="coverImage"
              defaultValue={post.coverImage}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Fecha
            </label>
            <input
              type="datetime-local"
              id="date"
              name="date"
              defaultValue={new Date(post.date).toISOString().slice(0, 16)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">
              Nombre del Autor
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              defaultValue={post.author.name}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="authorPicture" className="block text-sm font-medium text-gray-700">
              Imagen del Autor
            </label>
            <input
              type="text"
              id="authorPicture"
              name="authorPicture"
              defaultValue={post.author.picture}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="ogImageUrl" className="block text-sm font-medium text-gray-700">
              OG Image URL
            </label>
            <input
              type="text"
              id="ogImageUrl"
              name="ogImageUrl"
              defaultValue={post.ogImage.url}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Contenido (MDX)
            </label>
            <textarea
              id="content"
              name="content"
              rows={10}
              defaultValue={post.content}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="preview"
              name="preview"
              defaultChecked={post.preview}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="preview" className="ml-2 block text-sm text-gray-900">
              Es un borrador
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Actualizar Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}