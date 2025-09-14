import RootLayout from '@/components/RootLayout'
import styles from '@/styles/Projects.module.css'

export default function ProjectsPage() {
  return (
    <RootLayout>
      <div className={styles.ProjectsPage}>
        <div className={`${styles.ProjectsPage__Header} container`}>
          <span>- PROJECTS</span>
          <header>
            <h3>Recent completed works</h3>
          </header>
        </div>

        <section>
          <div className={`${styles.ProjectsPage__Items} container`}>
            <article>
              <picture>
                <img src="/images/img-1.jpg" alt="image" />
              </picture>
              <div>
                <span>
                  <a href="#">Youtube</a>
                </span>
                <h3>
                  <a href="#">New Technology</a>
                </h3>
              </div>
            </article>
            <article>
              <picture>
                <img src="/images/bg-page-posts.webp" alt="image" />
              </picture>
              <div>
                <span>
                  <a href="#">Vimeo</a>
                </span>
                <h3>
                  <a href="#">Firogo Majestic Ltd.</a>
                </h3>
              </div>
            </article>
            <article>
              <picture>
                <img src="/images/img-2.jpg" alt="image" />
              </picture>
              <div>
                <span>
                  <a href="#">Soundcloud</a>
                </span>
                <h3>
                  <a href="#">Creative Building</a>
                </h3>
              </div>
            </article>
            <article>
              <picture>
                <img src="/images/bg-page-posts.webp" alt="image" />
              </picture>
              <div>
                <span>
                  <a href="#">Instagram</a>
                </span>
                <h3>
                  <a href="#">Other Technology</a>
                </h3>
              </div>
            </article>
            <article>
              <picture>
                <img src="/images/img-3.jpg" alt="image" />
              </picture>
              <div>
                <span>
                  <a href="#">Fiction Scientist</a>
                </span>
                <h3>
                  <a href="#">Scientist</a>
                </h3>
              </div>
            </article>
            <article>
              <picture>
                <img src="/images/bg-page-posts.webp" alt="image" />
              </picture>
              <div>
                <span>
                  <a href="#">Movies</a>
                </span>
                <h3>
                  <a href="#">Netflix</a>
                </h3>
              </div>
            </article>
          </div>
        </section>

        <div className={styles.ProjectsPage__Testimonials}>
          <section className="container">
            <header>
              <span>- Testimonial</span>
              <h3>What client&apos;s say?</h3>
            </header>
            <article>
              <p>
                Loved the template design, documentation, customizability and the customer support from Marketify team!
                I am a noob in programming but the Marketify team helped me successfully.
              </p>
              <div>
                <h3>Alan Walker</h3>
                <span>Sales Manager at Vivado Shop</span>
              </div>
            </article>
            <footer>
              <span></span>
              <span></span>
              <span></span>
            </footer>
          </section>
        </div>
      </div>
    </RootLayout>
  )
}
