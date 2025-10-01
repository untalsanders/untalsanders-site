import { getAllPosts } from '@/features/posts/infrastructure/api/api'

export default async function DashboardPage() {
  const posts = await getAllPosts() || []
  const totalPosts = posts.length
  const publishedPosts = posts.filter(post => !post.preview).length
  const recentPosts = posts.slice(0, 5)

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Total Posts</h3>
          <p className="text-3xl font-bold text-blue-600">{totalPosts}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Published Posts</h3>
          <p className="text-3xl font-bold text-green-600">{publishedPosts}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Draft Posts</h3>
          <p className="text-3xl font-bold text-yellow-600">{totalPosts - publishedPosts}</p>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Posts</h3>
        <ul className="space-y-2">
          {recentPosts.map((post) => (
            <li key={post.slug} className="flex justify-between items-center">
              <span className="text-gray-700">{post.title}</span>
              <span className="text-sm text-gray-500">{post.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}