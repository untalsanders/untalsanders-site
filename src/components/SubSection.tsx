import Link from 'next/link'

export function SubSection({ path = '', label = '' }) {
  return (
    <>
      <span
        className="mx-3 inline-block text-xl font-bold select-none"
        style={{
          opacity: 0.3,
        }}>
        /
      </span>
      <Link href={path} className="text-xl font-bold select-none">
        {label}
      </Link>
    </>
  )
}
