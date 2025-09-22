import { Props as LayoutProps } from '@/shared/types/types'
import { Header } from './Header'
import { Footer } from './Footer'

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
