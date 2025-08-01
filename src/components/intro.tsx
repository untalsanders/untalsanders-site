import styles from '@/styles/intro.module.css'
import { Container } from './container'

export function Intro() {
    return (
        <div className={`${styles.intro}`}>
            <Container className={styles.introContainer}>
                <section className={styles.greeting}>
                    <h1 className={styles.title}>
                        Welcome<span>!</span>
                    </h1>
                    <h2 className={styles.subtitle}>Where the “WHY” is the most important thing</h2>
                    <p className={styles.summary}>
                        Dive into my thoughts on coding, tech trends, and developer life. Explore my latest posts below.
                    </p>
                    <div className={styles.buttons}>
                        <a className={`link-button ${styles["link-button--color-one"]}`} href="#">
                            Join The Newsletter
                        </a>
                        <a className={`link-button ${styles["link-button--color-one"]}`} href="#">
                            Browse The Articles
                        </a>
                    </div>
                </section>
                <section className={styles.imageContainer}>
                    <img
                        className={styles.image}
                        src="/images/undraw_mind-map_i9bv.svg"
                        alt="undraw_mind-map_i9bv.svg"
                    />
                </section>
            </Container>
        </div>
    )
}
