'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Logo } from './Logo'
import { SubSection } from './SubSection'

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
    <>
    <nav className="wrapper mx-auto flex items-center justify-between gap-4 py-4">
      <div className="flex items-center">
        <Link href={'/'}>
          <Logo />
        </Link>
        <SubSection label={pathname === '/' ? 'Blog' : ''} />
      </div>
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
    {isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300">
        <div className="bg-white dark:bg-gray-800 w-full h-full flex flex-col items-center justify-center relative">
          <button onClick={handleNavToggle} className="absolute top-4 right-4 text-2xl text-gray-800 dark:text-white">
            <FaTimes />
          </button>
          <ul className="flex flex-col gap-8 text-xl text-gray-800 dark:text-white">
            {navItems.map(item => (
              <li key={item.label}>
                <Link href={item.path} onClick={() => setIsOpen(false)} className={`hover:text-[#f9af16] ${pathname === item.path ? 'text-[#f9af16]' : ''}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
    </>
  )
}
