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
    href: '/projects/weatherapp',
  },
  {
    title: 'Receiptify',
    description: 'Utilizes OCR to extract key information from receipt images, and return a expense report in excel. Automates the annoying task of having to input your expenses manually.',
    href:'https://receiptify-app.vercel.app/'
  },
  {
    title: 'RecipeParser',
    description: 'Enter a URL link and get the cooking instructions and ingredients. No more long winded stories, no more ugly clutter. Utilizes webscarping and NLP.',
    href:'/projects/altfood'
  },
  {
    title: 'Url_Shortener',
    description: 'Just a nifty app to shorten long, cumbersome URLs',
    href:'/projects/url_shorterer',
  },
  {
    title: 'Hot Dog or Not Hot Dog',
    description: `Inspired by the hilarious "Not Hotdog" app from HBO's Silicon Valley. Built on Python, uses transfer learning
    to predict whether or not the image is a hot dog or not a hot dog.`,
    href: 'https://github.com/bananasplit333/hotdog_nothotdog/blob/main/model.ipynb',
  },  
  {
    title: 'Pouch',
    description: 'Ecommerce site selling various goods. Built on NextJS, utilizes Shopify checkout',
    href:'https://www.pouch.fun'
  },
]

export default projectsData
