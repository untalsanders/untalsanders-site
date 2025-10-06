'use client'

import RootLayout from '@/components/RootLayout'
import { useEffect, useState } from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { FaCode, FaScrewdriverWrench, FaUser } from 'react-icons/fa6'

interface GitHubStats {
  repos: number
  commits: number
  issues: number
  prs: number
}

export default function About() {
  const [stats, setStats] = useState<GitHubStats>({
    repos: 0,
    commits: 0,
    issues: 0,
    prs: 0,
  })

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch repositories
        const reposRes = await fetch('https://api.github.com/users/untalsanders/repos')
        const repos = await reposRes.json()

        // Fetch commits (limited to 100 per page)
        const commitsRes = await fetch('https://api.github.com/users/untalsanders/events/public')
        const events = await commitsRes.json()
        const commitEvents = events.filter((event: { type: string }) => event.type === 'PushEvent') as {
          payload: { size: number }
        }[]
        const totalCommits = commitEvents.reduce(
          (sum: number, event: { payload: { size: number } }) => sum + event.payload.size,
          0,
        )

        // Fetch issues
        const issuesRes = await fetch('https://api.github.com/search/issues?q=author:untalsanders+is:issue')
        const issues = await issuesRes.json()

        // Fetch merged PRs
        const prsRes = await fetch('https://api.github.com/search/issues?q=author:untalsanders+is:pr+is:merged')
        const prs = await prsRes.json()

        setStats({
          repos: repos.length,
          commits: totalCommits,
          issues: issues.total_count,
          prs: prs.total_count,
        })
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
      }
    }

    fetchGitHubStats()
  }, [])

  return (
    <RootLayout>
      <div className="wrapper mx-auto flex flex-col gap-8 px-0 py-24">
        <div className="px-0 py-5 text-center">
          <h2 className="text-4xl font-bold underline decoration-[#f9af16] decoration-4 underline-offset-8">
            About <span className="text-[#f9af16]">Me</span>
          </h2>
          <p className="mx-auto my-0 max-w-[48rem] p-4 text-[1.125rem] font-light text-[#14141499]">
            Developer committed to clean, efficient, and tailored solutions. Lover of good coffee and open innovation,
            focused on creating real value for your business.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:flex-nowrap lg:items-start">
          <picture className="max-w-[25rem] min-w-[15rem] overflow-hidden rounded-[1.25rem] border-[0.25rem] border-[#f9af16] bg-[#f9af16] shadow-[0_0_1.25rem_#f9af16]">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="h-full w-full transform rounded-[1.25rem] transition duration-[0.75s] hover:translate-x-[-1.5rem] hover:translate-y-20 hover:scale-180"
            />
          </picture>
          <section className="flex flex-col gap-8">
            <section>
              <h3 className="flex items-center gap-2 text-2xl leading-[2.5lh]">
                <FaUser /> Who Am I?
              </h3>
              <p>
                My name is Sanders and I&apos;m a professional with a strong career in Software Engineering and a
                growing interest in Artificial Intelligence, Machine Learning and Internet of Things, with a passion for
                Physics and Mathematics.
              </p>
              <p>
                Also, I&apos;m passionate developer with more than <strong>6+ years</strong> of experience building web
                applications with Java, Python and Node.js. When I&apos;m not coding, you can find me exploring new
                technologies, writting tech article or enjoying a fresh cup of coffee while debuggin complex problems.
              </p>
            </section>
            <section className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,12rem),1fr))] gap-[1.25rem]">
              <div className="inline-flex flex-col items-center justify-between rounded-[0.25rem] bg-[#fef2dc] p-4">
                <span className="text-[2rem] font-bold">{stats.repos}</span>
                <span className="text-[#141414aa]">Repositories</span>
              </div>
              <div className="inline-flex flex-col items-center justify-between rounded-[0.25rem] bg-[#fef2dc] p-4">
                <span className="text-[2rem] font-bold">{stats.commits}</span>
                <span className="text-[#141414aa]">Commits</span>
              </div>
              <div className="inline-flex flex-col items-center justify-between rounded-[0.25rem] bg-[#fef2dc] p-4">
                <span className="text-[2rem] font-bold">{stats.issues}</span>
                <span className="text-[#141414aa]">Issues</span>
              </div>
              <div className="inline-flex flex-col items-center justify-between rounded-[0.25rem] bg-[#fef2dc] p-4">
                <span className="text-[2rem] font-bold">{stats.prs}</span>
                <span className="text-[#141414aa]">PRs Merged</span>
              </div>
            </section>
          </section>
        </div>
      </div>
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
              <p className="my-[0.5rem] text-neutral-500">
                Get an optimized design aligned with the visual identity of your brand, planned from usability and
                become more visible to your audiences through a friendly design optimized for search engines.
              </p>
            </article>
            <article className="w-[min(25rem,100%)] grow-1 rounded-[0.75rem] border-1 border-[#f9af16] bg-white p-8 shadow-[0_0_2rem_#ccc]">
              <h3 className="flex items-center gap-[1.25rem] text-[1.25rem] font-medium">
                <FaMobileAlt className="mx-0 my-[0.75rem] self-center text-[2rem] font-bold" /> Mobile Apps
              </h3>
              <p className="my-[0.5rem] text-neutral-500">
                Align current mobile trends, to improve your processes and increase the level of accessibility and
                visibility of your customers, allowing you to build loyalty with your target audience, since they can be
                in front of your business at all times.
              </p>
            </article>
            <article className="w-[min(25rem,100%)] grow-1 rounded-[0.75rem] border-1 border-[#f9af16] bg-white p-8 shadow-[0_0_2rem_#ccc]">
              <h3 className="flex items-center gap-[1.25rem] text-[1.25rem] font-medium">
                <FaScrewdriverWrench className="mx-0 my-[0.75rem] self-center text-[2rem] font-bold" /> Consultancy
              </h3>
              <p className="my-[0.5rem] text-neutral-500">
                Ensure the perfect functioning of your company, through a specialized computer consultancy, which ranges
                from the analysis of requirements to the analysis and corrective and preventive maintenance of your
                computer applications.
              </p>
            </article>
          </section>
        </div>
      </div>
    </RootLayout>
  )
}
