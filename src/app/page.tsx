import About from '@/components/About'
import Hero from '@/components/Hero'
import RootLayout from '@/components/RootLayout'

export default function Page() {
  return (
    <RootLayout>
      <Hero />
      <About />
    </RootLayout>
  )
}
