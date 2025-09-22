'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NotFound() {
  const pathname = usePathname()

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-4">
      <span className="pr-5 text-5xl font-black text-gray-600">404</span>
      <p className="flex flex-col items-center gap-4">
        <span className="text-xl font-semibold">
          This page <i className="rounded bg-amber-400 p-2 font-mono text-xs text-gray-900">{pathname}</i> does not
          exist
        </span>
        <span>Please check the URL in the address bar and try again.</span>
        <span>
          Or go back to the{' '}
          <Link
            href="/"
            className="font-bold text-amber-400 no-underline transition-all duration-300 ease-in-out hover:text-gray-900 focus:text-amber-400 active:text-amber-400">
            home
          </Link>
        </span>
      </p>
    </section>
  )
}
