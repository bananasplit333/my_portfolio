interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'WeatherApp',
    description: `Simple UI to ask about weather conditions anywhere in the world. Utilizes OPENAI's API and built on 
    Django / Flask.`,
    imgSrc: '/static/images/weatherapp.png',
    href: 'https://weather.toddie.org',
  },
  {
    title: 'Hot Dog or Not Hot Dog',
    description: `Inspired by HBO Silicon Valley's Hot Dog application. Built on Python, uses machine learning
    to predict whether or not the image is a hot dog or not a hot dogs.`,
    href: 'https://github.com/bananasplit333/hotdog_nothotdog/blob/main/Untitled.ipynb',
  },  
  {
    title: 'Flashcard Maker',
    description: 'Upload any documents, receive flashcards in return to boost your exam success',
    href: '/https://www.google.com',
  },
  {
    title: 'Pouch',
    description: 'Ecommerce site selling various goods. Built on NextJS, utilizes Shopify checkout',
    href:'https://www.pouch.fun'
  },
  {
    title: 'Image2Excel',
    description: 'Utilizes OCR to parse images of receipts, and return a expense report in excel.',
    href:'https://receipt2excel.jaehyon.ca/'
  },
]

export default projectsData
