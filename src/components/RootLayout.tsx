import { Props as RootLayoutProps } from '@/shared/types/types'
import { Header } from './Header'
import { Footer } from './Footer'

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
