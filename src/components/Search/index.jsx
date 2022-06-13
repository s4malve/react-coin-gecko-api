import PropTypes from 'prop-types'

import SearchIcon from '../icons/Search'

const Search = ({ setQuery }) => {
  return (
    <div className="mb-6 relative w-full">
      <input
        type="search"
        id="query"
        name="query"
        className="border-gray-300 border outline-none p-4 pl-12 rounded-lg shadow-sm text-sm w-full bg-slate-50 dark:border-gray-700 dark:bg-slate-800 focus:border-gray-500 dark:shadow-slate-800"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter email"
      />

      <span className="absolute inline-flex inset-y-0 items-center text-gray-500 left-4 dark:text-gray-600">
        <SearchIcon />
      </span>
    </div>
  )
}

Search.propTypes = {
  setQuery: PropTypes.func,
}

export default Search
