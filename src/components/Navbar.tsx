'use client'

import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Logo } from './Logo'

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavToggle = () => setIsOpen(!isOpen)

  return (
    <nav className={`container ${styles.Nav}`}>
      <Logo />
      <ul className={`${styles.NavList}`}>
        <li className={styles.NavItem}>
          <Link href="/#about" className={pathname === '/#about' ? styles.Active : ''}>
            About
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/#services" className={pathname === '/#services' ? styles.Active : ''}>
            Services
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/blog" className={pathname === '/blog' ? styles.Active : ''}>
            Blog
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/contact" className={pathname === '/contact' ? styles.Active : ''}>
            Contact
          </Link>
        </li>
      </ul>
      <button className={styles.ButtonMobile} onClick={handleNavToggle}>
        <FaBars />
      </button>
    </nav>
  )
}
