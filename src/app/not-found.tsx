'use client'

import styles from '@/styles/NotFound.module.css'
import { usePathname } from 'next/navigation'

export default function NotFound() {
    const pathname = usePathname()

    return (
        <section className={`${styles.NotFound}`}>
            <span className={styles.ErrorCode}>404</span>
            <p>
                <span>This page <i>{pathname}</i> does not exist</span>
                <span>Please check the URL in the address bar and try again.</span>
            </p>
        </section>
    )
}
