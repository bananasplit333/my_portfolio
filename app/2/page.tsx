import Link from '@/components/Link'
import { portfolioProfile, portfolioProjects } from '@/data/portfolioData'

export default function DesignTwo() {
  return (
    <div className="min-h-screen bg-[#f8f4ef] text-[#111]">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <nav className="flex items-center justify-between border-2 border-black px-4 py-2 text-xs uppercase tracking-[0.35em]">
          <span>Design 02 — Brutalist</span>
          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href={portfolioProfile.resumeUrl}>Resume</Link>
          </div>
        </nav>

        <header className="mt-10 border-2 border-black p-8">
          <p className="text-xs uppercase tracking-[0.4em]">{portfolioProfile.role}</p>
          <h1 className="mt-4 text-5xl font-black uppercase leading-tight">
            {portfolioProfile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-semibold">
            {portfolioProfile.headline}
          </p>
          <p className="mt-4 max-w-2xl text-sm">{portfolioProfile.bio}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase">
            <Link href={`mailto:${portfolioProfile.email}`} className="border-2 border-black px-4 py-2">
              Email
            </Link>
            <Link href={portfolioProfile.github} className="border-2 border-black px-4 py-2">
              GitHub
            </Link>
            <span className="border-2 border-black px-4 py-2">{portfolioProfile.location}</span>
          </div>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {portfolioProfile.stats.map((stat) => (
            <div key={stat.label} className="border-2 border-black p-4">
              <p className="text-3xl font-black">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.3em]">{stat.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black uppercase">Projects</h2>
            <span className="text-xs uppercase tracking-[0.3em]">Selected</span>
          </div>
          <div className="mt-6 grid gap-4">
            {portfolioProjects.map((project, index) => (
              <Link
                key={project.title}
                href={project.href || '#'}
                className="flex flex-col gap-3 border-2 border-black p-4 transition hover:-translate-y-1"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-black uppercase">{project.title}</h3>
                  <span className="text-xs">0{index + 1}</span>
                </div>
                <p className="text-sm">{project.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 border-2 border-black p-6">
          <h2 className="text-lg font-black uppercase">Experience</h2>
          <div className="mt-4 space-y-3 text-sm">
            {portfolioProfile.experience.map((item) => (
              <div key={item.company}>
                <p className="font-semibold">{item.company}</p>
                <p>{item.role}</p>
                <p className="text-xs">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
