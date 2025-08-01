import '@/styles/globals.css'
import { Footer } from '@/components/Footer'
import { RootLayoutProps } from './types'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Header } from '@/components/Header'
import styles from '@/styles/Layout.module.css'

export const metadata: Metadata = {
    title: 'Sanders Gutiérrez',
    icons: {
        icon: '/favicon.ico',
    },
}

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['italic', 'normal'],
})

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning className={poppins.className}>
            <body suppressHydrationWarning className={styles.Layout}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
