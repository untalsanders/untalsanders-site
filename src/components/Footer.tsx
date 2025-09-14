'use client'

import styles from '@/styles/Footer.module.css'

const Copyright = () => <div>&copy; {new Date().getFullYear()} Sanders Gutiérrez. All rights reserved.</div>

const MadeIn = () => (
  <div className={styles.Footer__Content_MadeIn}>
    <span>Made with</span>
    <img src="/images/icon-heart.svg" alt="love-heart" width={16} height={16} />
    {'by @UnTalSanders'}
  </div>
)

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.Footer__Content}`}>
        <Copyright />
        <MadeIn />
      </div>
    </footer>
  )
}
