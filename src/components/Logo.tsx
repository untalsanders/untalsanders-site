'use strict'

import styles from '@/styles/Logo.module.css'
import Link from 'next/link'
import LogoCircleSVG from './LogoCircleSVG'

export function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/#top" className={styles.logo__link}>
        <LogoCircleSVG />
        <span className={styles.logo__text}>
          Dev<span>Pro</span>
        </span>
      </Link>
    </div>
  )
}
