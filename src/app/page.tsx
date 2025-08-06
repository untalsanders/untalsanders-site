import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import RootLayout from '@/components/RootLayout'
import Services from '@/components/Services'

export default function Page() {
    return (
        <RootLayout>
            <Hero />
            <About />
            <Services />
            <Contact />
        </RootLayout>
    )
}
