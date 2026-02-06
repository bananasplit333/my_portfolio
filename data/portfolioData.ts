import projectsData from './projectsData'

export const portfolioProfile = {
  name: 'Jaehyon Yoo',
  role: 'Software Engineer',
  headline: 'I build thoughtful, human-centered software with a bias for shipping.',
  location: 'Toronto · London (ON) · Remote',
  email: 'jaehyon.yoo@gmail.com',
  github: 'https://github.com/bananasplit333',
  resumeUrl: '/static/resume.pdf',
  bio: `I’m a software engineer with an obsession for innovation. I’ve built products across web, AI, and developer tooling, and I love turning messy ideas into clean, shippable experiences.`,
  experience: [
    {
      company: 'Parka Technology',
      role: 'Software Engineer',
      detail: 'Helped build parking management software and improved unit testing coverage.',
    },
    {
      company: 'Huskyshiba',
      role: 'Full-stack Engineer',
      detail: 'Worked on product features, integrations, and platform reliability.',
    },
  ],
  interests: ['Basketball', 'AI research', 'Product craft', 'Clean UX'],
  stats: [
    { label: 'Projects shipped', value: '10+' },
    { label: 'Years building', value: '3+' },
    { label: 'Core stack', value: 'React · TS · Tailwind' },
  ],
}

export const portfolioProjects = projectsData
