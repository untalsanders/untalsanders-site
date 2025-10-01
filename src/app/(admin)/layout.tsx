import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="mt-6">
          <Link
            href="/dashboard"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/posts"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          >
            Posts
          </Link>
          <Link
            href="/dashboard/posts/new"
            className="block px-6 py-3 ml-6 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
          >
            Nuevo Post
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  )
}