import PropTypes from 'prop-types'

import LeftArrow from '../icons/LeftArrow'
import RightArrow from '../icons/RightArrow'

const Footer = ({ page, setPage }) => {
  return (
    <footer className="mt-4">
      <ol className="flex font-medium justify-center space-x-1 text-xs">
        <li>
          <button
            disabled={page === 1}
            className="btn-secondary"
            onClick={page > 1 ? () => setPage((prev) => prev - 1) : undefined}
          >
            <LeftArrow />
          </button>
        </li>
        <li className="bg-blue-600 block border-blue-600 h-8 leading-8 rounded text-center text-white w-8">
          {page}
        </li>
        <li>
          <button
            className="btn-secondary"
            onClick={() => setPage((prev) => prev + 1)}
          >
            <RightArrow />
          </button>
        </li>
      </ol>
    </footer>
  )
}

Footer.propTypes = {
  pages: PropTypes.string,
  setPage: PropTypes.func,
}

export default Footer
