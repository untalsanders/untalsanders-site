import { FaMobileAlt } from 'react-icons/fa'
import { FaCode, FaScrewdriverWrench } from 'react-icons/fa6'

export default function Services() {
  return (
    <div id="services" className="bg-[rgb(243,249,255)] bg-[url(/images/pattern-code.png)] px-0 py-[6rem]">
      <div className="wrapper mx-auto">
        <header className="@container px-0 py-[1.25rem] text-center">
          <h2 className="text-4xl font-bold underline decoration-[#f9af16] decoration-4 underline-offset-8">
            Services
          </h2>
          <p className="mx-auto my-0 max-w-[48rem] p-4 text-[1.125rem] font-light text-[#14141499]">
            I offer a different range of services related to development, including working on complete projects from
            their inception until deployment, or the maintenance of existing codebases.
          </p>
        </header>
        <section className="flex flex-wrap gap-8">
          <article className="w-[min(25rem,100%)] grow-1 rounded-[0.75rem] border-1 border-[#f9af16] bg-white p-8 shadow-[0_0_2rem_#ccc]">
            <h3 className="flex items-center gap-[1.25rem] text-[1.25rem] font-medium">
              <FaCode className="mx-0 my-[0.75rem] self-center text-[2rem] font-bold" /> Software Development
            </h3>
            <p className="text-neutral-500 my-[0.5rem]">
              Get an optimized design aligned with the visual identity of your brand, planned from usability and become
              more visible to your audiences through a friendly design optimized for search engines.
            </p>
          </article>
          <article className="w-[min(25rem,100%)] grow-1 rounded-[0.75rem] border-1 border-[#f9af16] bg-white p-8 shadow-[0_0_2rem_#ccc]">
            <h3 className="flex items-center gap-[1.25rem] text-[1.25rem] font-medium">
              <FaMobileAlt className="mx-0 my-[0.75rem] self-center text-[2rem] font-bold" /> Mobile Apps
            </h3>
            <p className="text-neutral-500 my-[0.5rem]">
              Align current mobile trends, to improve your processes and increase the level of accessibility and
              visibility of your customers, allowing you to build loyalty with your target audience, since they can be
              in front of your business at all times.
            </p>
          </article>
          <article className="w-[min(25rem,100%)] grow-1 rounded-[0.75rem] border-1 border-[#f9af16] bg-white p-8 shadow-[0_0_2rem_#ccc]">
            <h3 className="flex items-center gap-[1.25rem] text-[1.25rem] font-medium">
              <FaScrewdriverWrench className="mx-0 my-[0.75rem] self-center text-[2rem] font-bold" /> Consultancy
            </h3>
            <p className="text-neutral-500 my-[0.5rem]">
              Ensure the perfect functioning of your company, through a specialized computer consultancy, which ranges
              from the analysis of requirements to the analysis and corrective and preventive maintenance of your
              computer applications.
            </p>
          </article>
        </section>
      </div>
    </div>
  )
}
