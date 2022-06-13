import { useEffect, useState } from 'react'

import { BASE_URL } from '../utils/api'

export default (URL, opt) => {
  const [data, setData] = useState([]),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${BASE_URL}${URL}`)
      .then((res) => {
        setLoading(true)
        setError(null)
        setData([])

        return res.json()
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [URL])

  return {
    data,
    setData,
    loading,
    error,
  }
}
