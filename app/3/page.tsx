import Link from '@/components/Link'
import { portfolioProfile, portfolioProjects } from '@/data/portfolioData'

const prompt = (text: string) => `> ${text}`

export default function DesignThree() {
  return (
    <div className="min-h-screen bg-black text-green-300">
      <div className="mx-auto max-w-5xl px-6 py-12 font-mono">
        <div className="flex items-center justify-between text-xs text-green-500">
          <span>Design 03 — Terminal</span>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-green-200">
              Home
            </Link>
            <Link href={portfolioProfile.resumeUrl} className="hover:text-green-200">
              Resume
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-green-500/40 bg-black/60 p-6 shadow-[0_0_25px_rgba(34,197,94,0.2)]">
          <p className="text-green-500">{prompt('boot portfolio.exe')}</p>
          <p className="mt-2 text-green-200">{portfolioProfile.name}</p>
          <p className="text-green-500">{portfolioProfile.role}</p>
          <p className="mt-4 text-green-300">{prompt(portfolioProfile.headline)}</p>
          <p className="mt-4 text-green-400">{portfolioProfile.bio}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs">
            <Link
              href={`mailto:${portfolioProfile.email}`}
              className="border border-green-500/40 px-3 py-1 hover:border-green-300"
            >
              /email
            </Link>
            <Link
              href={portfolioProfile.github}
              className="border border-green-500/40 px-3 py-1 hover:border-green-300"
            >
              /github
            </Link>
            <span className="border border-green-500/40 px-3 py-1">{portfolioProfile.location}</span>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="text-xs uppercase tracking-[0.4em] text-green-500">Projects</h2>
          <div className="mt-4 space-y-4">
            {portfolioProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href || '#'}
                className="block rounded-xl border border-green-500/30 bg-black/50 p-4 transition hover:border-green-300"
              >
                <p className="text-green-200">{prompt(project.title)}</p>
                <p className="mt-2 text-sm text-green-400">{project.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-green-500/30 p-4">
            <p className="text-green-500">{prompt('experience.log')}</p>
            <div className="mt-3 space-y-3 text-sm text-green-400">
              {portfolioProfile.experience.map((item) => (
                <div key={item.company}>
                  <p className="text-green-200">{item.company}</p>
                  <p>{item.role}</p>
                  <p className="text-green-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-green-500/30 p-4">
            <p className="text-green-500">{prompt('stats.json')}</p>
            <ul className="mt-3 space-y-2 text-sm text-green-300">
              {portfolioProfile.stats.map((stat) => (
                <li key={stat.label}>
                  {stat.label}: <span className="text-green-200">{stat.value}</span>
                </li>
              ))}
              <li>
                interests: <span className="text-green-200">{portfolioProfile.interests.join(', ')}</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
