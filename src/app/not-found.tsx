'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NotFound() {
  const pathname = usePathname()

  return (
    <section className="flex flex-col items-center justify-center h-screen gap-4">
      <span className="text-gray-600 text-5xl font-black pr-5">404</span>
      <p className="flex flex-col items-center gap-4">
        <span className="text-xl font-semibold">
          This page <i className="bg-amber-400 text-gray-900 p-2 text-xs rounded font-mono">{pathname}</i> does not exist
        </span>
        <span>Please check the URL in the address bar and try again.</span>
        <span>
          Or go back to the{' '}
          <Link href="/" className="text-amber-400 no-underline font-bold transition-all duration-300 ease-in-out hover:text-gray-900 active:text-amber-400 focus:text-amber-400">
            home
          </Link>
        </span>
      </p>
    </section>
  )
}
