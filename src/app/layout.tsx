import '@/styles/globals.css'
import styles from '@/styles/Layout.module.css'
import { LayoutProps } from '@/shared/types/types'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'

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

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <body suppressHydrationWarning className={styles.Layout}>
        {children}
      </body>
    </html>
  )
}
