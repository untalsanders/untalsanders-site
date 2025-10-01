import RootLayout from '@/components/RootLayout'
import { Props as BlogLayoutProps } from '@/shared/types/types'

export default function Layout({ children }: BlogLayoutProps) {
  return (
    <RootLayout>
      <main>{children}</main>
    </RootLayout>
  )
}
