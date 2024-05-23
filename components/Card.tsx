import Link from './Link'

const Card = ({ title, description, href }) => (
  <div className="mb-8 ml-8">
    <div className="mb-4">
      <h1 className="text-2xl font-bold hover:text-blue-500 dark:hover:text-pink-200">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h1>
      <p className="text-m text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
)

export default Card