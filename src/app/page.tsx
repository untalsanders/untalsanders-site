import About from '@/components/About'
import Hero from '@/components/Hero'
import RootLayout from '@/components/RootLayout'
import Services from '@/components/Services'

export default function Page() {
  return (
    <RootLayout>
      <Hero />
      <About />
      <Services />
    </RootLayout>
  )
}
