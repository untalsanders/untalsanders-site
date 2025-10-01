export function Intro() {
  return (
    <div className='border-b border-gray-200 bg-[url("/images/banner-bg-shape.svg")] bg-contain bg-bottom bg-no-repeat py-20'>
      <div className="wrapper mx-auto flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-20">
        <section className="flex-1 text-center lg:text-start space-y-6">
          <h1 className="text-[clamp(2.5rem,4vw,4vw)] leading-[1.75lh] font-bold">
            Welcome<span className="text-orange-400">!</span>
          </h1>
          <h2 className="text-[clamp(1.75rem,2vw,2rem)] leading-relaxed font-medium">
            Here, the <strong>&quot;WHY&quot;</strong> is the most important thing
          </h2>
          <p className="text-[clamp(1rem,1vw,1.25rem)]">
            Dive into my thoughts on coding, tech trends, and developer life. Explore my latest posts below.
          </p>
          <div className="flex flex-wrap items-center gap-5 mt-10">
            <a
              className="flex-grow rounded-3xl border-none bg-orange-400 px-6 py-3 text-center font-bold text-white transition duration-[0.3s] ease-in-out hover:bg-amber-500"
              href="#">
              Join The Newsletter
            </a>
            <a
              className="flex-grow rounded-3xl border-none bg-orange-400 px-6 py-3 text-center font-bold text-white transition duration-[0.3s] ease-in-out hover:bg-amber-500"
              href="#recent-articles">
              Browse The Articles
            </a>
          </div>
        </section>
        <section className="flex-1 self-center">
          <img
            className="h-full max-h-[37.5rem] w-auto"
            src="/images/undraw_mind-map_i9bv.svg"
            alt="undraw_mind-map_i9bv.svg"
          />
        </section>
      </div>
    </div>
  )
}
