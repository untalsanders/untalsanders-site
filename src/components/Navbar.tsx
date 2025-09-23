'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Logo } from './Logo'

const navItems = [
  {
    label: 'About',
    path: '/#about',
  },
  {
    label: 'Services',
    path: '/#services',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavToggle = () => setIsOpen(!isOpen)

  return (
    <nav className="wrapper mx-auto flex items-center justify-between gap-4 py-4">
      <Logo />
      <ul className="hidden gap-4 md:flex">
        {navItems.map(item => (
          <li key={item.label} className="hover:cursor-pointer hover:text-[#f9af16]">
            <Link href={item.path} className={pathname === item.path ? 'text-[#f9af16]' : ''}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <button className="cursor-pointer border-0 bg-transparent md:hidden" onClick={handleNavToggle}>
        <FaBars className="size-5 fill-white text-[clamp(1rem,1.25rem,5vw)]" />
      </button>
    </nav>
  )
}
