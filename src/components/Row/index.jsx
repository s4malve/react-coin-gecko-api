import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Row = ({
  total_volume,
  current_price = '',
  image,
  index,
  name,
  price_change_percentage_24h,
  symbol,
  loading,
  thumb,
}) => {
  return (
    <tr>
      <td className="pl-4">{loading ? <Skeleton width="20%" /> : index}</td>
      <td className="font-medium max-w-xs overflow-x-auto py-4 whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          {loading ? (
            <Skeleton width={24} height={24} circle />
          ) : (
            <img
              src={image || thumb}
              alt="coin"
              className="h-6 rounded-full w-6"
            />
          )}
          <h2>{loading ? <Skeleton width="80px" /> : name}</h2>
          <span className="uppercase opacity-40 dark:opacity-30">
            {loading ? <Skeleton width="20px" /> : symbol}
          </span>
        </div>
      </td>
      <td>
        {loading ? (
          <Skeleton width="50%" />
        ) : current_price ? (
          `$${current_price}`
        ) : (
          ''
        )}
      </td>
      <td
        className={` ${
          price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {loading ? <Skeleton width="50%" /> : price_change_percentage_24h}
      </td>
      <td className="pr-4">
        {loading ? <Skeleton width="50%" /> : total_volume}
      </td>
    </tr>
  )
}

Row.propTypes = {
  total_volume: PropTypes.number,
  current_price: PropTypes.number,
  image: PropTypes.string,
  index: PropTypes.number,
  name: PropTypes.string,
  price_change_percentage_24h: PropTypes.number,
  symbol: PropTypes.string,
}

export default Row
