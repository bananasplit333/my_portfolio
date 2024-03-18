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
          <div className="border-b border-white w-120px"></div>
          <div className="animate-slidein opacity-0 text-4xl">
            Software Engineer
          </div> 
          <div className="animate-slidein opacity-0 text-xl">
          <p>Learn more {' '}
            <span>
              <RoughNotation
                  show
                  type='underline'
                  strokeWidth={2}
                  animationDelay={750}
                  animationDuration={1700}
              >
                <a href="/about" className="hover:bg-sky-700">
                   about me 
                </a>
              </RoughNotation>
            </span> or {'    '}
            <RoughNotation
                  show
                  type='circle'
                  strokeWidth={2}
                  animationDelay={2450}
                  animationDuration={2000}
              >
                <a className="hover:bg-sky-700" href="/contact">contact me</a>
            </RoughNotation>
            
          </p>
          </div>
        </div>
      </div>
    </>
  )
}
