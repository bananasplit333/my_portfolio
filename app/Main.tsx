import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { RoughNotation } from 'react-rough-notation';
import { gray, green } from 'tailwindcss/colors'

const MAX_DISPLAY = 5

export default function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          
          <div className="animate-slideout opacity-0">
          <h1 className="pt-40 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello, I'm Jae.
          </h1>
          </div>
          <div className="animate-slidein opacity-0 text-2xl">
            Software Engineer
          </div> 
          
          <div className="animate-slidein opacity-0 text-l">
          <p>Learn more {'      '}
            <span>
                 <RoughNotation
                   show
                   type='highlight'
                   color='rgba(147,197,253)'
                   padding={[2, 4, 5, 5]}
                   iterations={2}
                   strokeWidth={2}
                   animationDelay={800}
                   animationDuration={1500}
                   brackets='top'
              >
                <Link href="/about" className="hover:text-indigo-700">
                   about me 
                </Link>
              </RoughNotation>
            </span> or {'    '}
            <RoughNotation
                   show
                   type='highlight'
                   color='rgba(180,165,174)'
                   padding={[2, 4, 10, 6]}
                   iterations={2}
                   animationDelay={820}
                   animationDuration={1620}
              >
                <Link className="hover:text-indigo-700" href="/contact">contact me</Link>
            </RoughNotation>
          </p>
          <div>
          </div>
          </div>
        </div>
        
        
      </div>
    </>
  )
}
