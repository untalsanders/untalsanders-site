import RootLayout from '@/components/RootLayout'
import { LayoutProps } from '@/shared/types/types'

export default function Layout({ children }: LayoutProps) {
  return (
    <RootLayout>
      <main>{children}</main>
    </RootLayout>
  )
}
