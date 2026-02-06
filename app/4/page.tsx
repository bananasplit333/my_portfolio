import Link from '@/components/Link'
import { portfolioProfile, portfolioProjects } from '@/data/portfolioData'

export default function DesignFour() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <nav className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-500">
          <span>Design 04 — Editorial</span>
          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href={portfolioProfile.resumeUrl}>Resume</Link>
          </div>
        </nav>

        <header className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">{portfolioProfile.role}</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight">
              {portfolioProfile.name}
            </h1>
            <p className="mt-4 text-xl text-zinc-600">{portfolioProfile.headline}</p>
            <p className="mt-6 text-base text-zinc-700">{portfolioProfile.bio}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href={`mailto:${portfolioProfile.email}`} className="rounded-full border border-zinc-300 px-4 py-2">
                Email
              </Link>
              <Link href={portfolioProfile.github} className="rounded-full border border-zinc-300 px-4 py-2">
                GitHub
              </Link>
              <span className="rounded-full border border-zinc-300 px-4 py-2">
                {portfolioProfile.location}
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500">Focus</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              {portfolioProfile.stats.map((stat) => (
                <li key={stat.label}>
                  <span className="font-semibold text-zinc-900">{stat.value}</span> — {stat.label}
                </li>
              ))}
              <li>
                <span className="font-semibold text-zinc-900">Interests</span> — {portfolioProfile.interests.join(', ')}
              </li>
            </ul>
            <div className="mt-6 space-y-4 text-sm text-zinc-600">
              {portfolioProfile.experience.map((item) => (
                <div key={item.company}>
                  <p className="font-semibold text-zinc-900">{item.company}</p>
                  <p>{item.role}</p>
                  <p className="text-zinc-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="mt-12">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
            <h2 className="text-2xl font-semibold">Selected Projects</h2>
            <span className="text-sm text-zinc-500">Case studies + experiments</span>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {portfolioProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href || '#'}
                className="group rounded-2xl border border-zinc-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold group-hover:text-zinc-900">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-600">{project.description}</p>
                <span className="mt-4 inline-flex text-xs uppercase tracking-[0.2em] text-zinc-500">
                  View project →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
