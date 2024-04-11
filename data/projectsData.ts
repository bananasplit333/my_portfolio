interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'WeatherApp',
    description: `Simple and intuitive web application that allows users to inquire about current weather conditions anywhere in the world. Leverages OpenAI's tool calling to provides accurate and up-to-date weather information based on user input.`,
    imgSrc: '/static/images/weatherapp.png',
    href: 'https://weather.toddie.org',
  },
  {
    title: 'Hot Dog or Not Hot Dog',
    description: `Inspired by the hilarious "Not Hotdog" app from HBO's Silicon Valley. Built on Python, uses transfer learning
    to predict whether or not the image is a hot dog or not a hot dog.`,
    href: 'https://github.com/bananasplit333/hotdog_nothotdog/blob/main/Untitled.ipynb',
  },  
  {
    title: 'Flashcard Maker',
    description: 'Upload any documents, receive flashcards in return to boost your exam success. Built using NextJS and Groq',
    href: '/https://www.google.com',
  },
  {
    title: 'Pouch',
    description: 'Ecommerce site selling various goods. Built on NextJS, utilizes Shopify checkout',
    href:'https://www.pouch.fun'
  },
  {
    title: 'Image2Excel',
    description: 'Utilizes OCR to extract key information from receipt images, and return a expense report in excel.',
    href:'https://receipt2excel.jaehyon.ca/'
  },
]

export default projectsData
