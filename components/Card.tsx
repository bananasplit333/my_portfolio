import Link from './Link'

const Card = ({ title, description, href }) => (
  <div className="mb-8 ml-8">
    <div className="mb-4">
      <h2 className="text-xl font-bold">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
)

export default Card