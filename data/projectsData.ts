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
    href: 'https://github.com/bananasplit333/weatherapp',
  },
  {
    title: 'Hot Dog or Not Hot Dog',
    description: `Inspired by HBO Silicon Valley's Hot Dog application. Built on Python, uses machine learning
    to predict whether or not the image is a hot dog or not a hot dogs.`,
    imgSrc: '/static/images/hdnd.png',
    href: 'https://github.com/bananasplit333/hotdog_nothotdog/blob/main/Untitled.ipynb',
  },
  {
    title: 'Flashcard Maker',
    description: 'Upload any documents, receive flashcards in return to boost your exam success',
    imgSrc:  '/static/images/hdnd.png',
    href: '/https://www.google.com',
  },
  {
    title: 'Fuyu',
    description: 'Ecommerce site selling various goods',
    imgSrc: '/static/images/fuyu.png',
    href:'https://www.fuyu.ca'
  },
]

export default projectsData
