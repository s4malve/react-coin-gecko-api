import PropTypes from 'prop-types'

import Row from '../Row'

const TBody = ({ data, loading }) => {
  return data.map(
    (
      {
        total_volume,
        current_price,
        id,
        image,
        name,
        price_change_percentage_24h,
        symbol,
        thumb,
      },
      index
    ) => (
      <Row
        current_price={current_price}
        image={image}
        index={index + 1}
        key={id}
        loading={loading}
        name={name}
        price_change_percentage_24h={price_change_percentage_24h}
        symbol={symbol}
        total_volume={total_volume}
        thumb={thumb}
      />
    )
  )
}

TBody.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
}

export default TBody
