import { Props as LayoutProps } from '@/shared/types/types'
import '@/styles/globals.css'
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
      <body suppressHydrationWarning>
        <div id="root" className="grid min-h-dvh grid-rows-[min-content_1fr_min-content]">
          {children}
        </div>
      </body>
    </html>
  )
}
