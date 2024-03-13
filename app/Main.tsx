import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import React, { useState, useEffect } from 'react'

const MAX_DISPLAY = 5
/**
<span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
<span class="relative text-white">annoyed</span>
</span>
*/

export default function Home({ posts }) {
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
          <p>Learn more <a href="/about" className="hover:bg-sky-700"> about me </a> or <a className="hover:bg-sky-700" href="/contact">contact me</a>
          </p>
          </div>
        </div>
      </div>
    </>
  )
}
