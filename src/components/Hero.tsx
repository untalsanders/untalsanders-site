import styles from '@/styles/Hero.module.css'
import Link from 'next/link'
import { FaCode, FaHandshake } from 'react-icons/fa6'
import { FcReading } from 'react-icons/fc'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className="container">
        <section className={styles.heroHeader}>
          <h3 className={styles.heroHeader__hello}>
            Hello World! I&apos;m <span>Software Engineer</span>
          </h3>
          <h3 className={styles.heroHeader__name}>Sanders Gutiérrez</h3>
          <h3 className={styles.heroHeader__learning}>
            <FcReading />
            AND I NEVER STOP LEARNING
          </h3>
        </section>
        <section className={styles.heroBody}>
          <p className={styles.heroBody__description}>
            I&apos;m a Software Engineer and Developer based in Buenos Aires - Argentina, with more than{' '}
            <strong>6+ years</strong> of experience, and I want to work together and build something unique.
          </p>
          <div className={styles.heroBody__buttons}>
            {/* <Link href="/projects">
                            <FaCode />
                            View Projects
                        </Link> */}
            <Link href="/#contact">
              <FaHandshake />
              Hire Me
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
