import Link from 'next/link'
import { FaHandshake } from 'react-icons/fa6'
import { FcReading } from 'react-icons/fc'

export default function Hero() {
  return (
    <div className="bg-[url('/images/pattern-code.png')] bg-[#fef2dc] text-center grid place-items-center py-12 md:py-20">
      <div className="wrapper">
        <section className="space-y-2">
          <p className='text-lg md:text-xl font-medium'>
            Hello, I&apos;m <span className='text-[#f9af16] font-bold'>Software Engineer</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-none">Sanders Gutiérrez</h1>
          <p className="text-base md:text-lg font-semibold text-[#141414dd] flex flex-col-reverse items-center justify-around gap-2 md:flex-row md:justify-center">
            <FcReading className='text-2xl' />
            <span className='text-[clamp(1rem,1.5rem,2vw)]'>AND I NEVER STOP LEARNING</span>
          </p>
        </section>
        <section className="flex flex-col items-center mt-8">
          <p className='text-neutral-900 text-lg leading-relaxed max-w-3xl'>
            I&apos;m a Software Engineer and Developer based in Buenos Aires - Argentina, with more than{' '}
            <strong>6+ years</strong> of experience, and I want to work together and build something unique.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-7">
            {/* <Link href="/projects">
                            <FaCode />
                            View Projects
                        </Link> */}
            <Link href="/#contact" className="flex items-center justify-center gap-3 bg-neutral-900 border border-neutral-900 rounded-md text-[#f9af16] font-semibold py-3 px-8 hover:bg-neutral-800 transition">
              <FaHandshake className="text-xl" />
              Hire Me
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
