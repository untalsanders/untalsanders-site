'use client'

import styles from '@/styles/NotFound.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NotFound() {
    const pathname = usePathname()

    return (
        <section className={styles.NotFound}>
            <span className={styles.NotFound__code}>404</span>
            <p className={styles.NotFound__text}>
                <span>This page <i>{pathname}</i> does not exist</span>
                <span>Please check the URL in the address bar and try again.</span>
                <span>Or go back to the <Link href="/" className={styles.NotFound__link}>home</Link></span>
            </p>
        </section>
    )
}
