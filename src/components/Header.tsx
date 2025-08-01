'use strict'

import { Navbar } from '@/components'
import styles from '@/styles/Header.module.css'

export function Header() {
    return (
        <header className={styles.Header}>
            <Navbar />
        </header>
    )
}
