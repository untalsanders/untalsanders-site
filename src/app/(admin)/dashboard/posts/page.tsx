import { deletePost } from '@/app/actions'
import { getAllPosts } from '@/features/posts/infrastructure/api/api'
import Link from 'next/link'
import DeleteButton from '@/components/DeleteButton'

export default async function PostsPage() {
  const posts = (await getAllPosts()) || []

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Posts</h1>
        <Link href="/dashboard/posts/new" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Nuevo Post
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Título</th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Fecha</th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {posts.map(post => (
              <tr key={post.slug}>
                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">{post.title}</td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{post.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${
                      post.preview ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                    }`}>
                    {post.preview ? 'Draft' : 'Published'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                  <Link
                    href={`/dashboard/posts/${post.slug}/edit`}
                    className="mr-4 text-indigo-600 hover:text-indigo-900">
                    Editar
                  </Link>
                  <DeleteButton slug={post.slug} action={deletePost} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
