import { useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'

import Table from '../components/Table'
import Row from '../components/Row'
import THead from '../components/THead'
import Search from '../components/Search'
import Footer from '../components/Footer'
import TBody from '../components/TBody'

import useCoinGecko from '../hooks/useCoinGecko'

export default () => {
  const [currency, setCurrency] = useState('usd'),
    [order, setOrder] = useState('market_cap_desc'),
    [page, setPage] = useState(1),
    [query, setQuery] = useState('')

  const { data, setData, loading, error } = useCoinGecko(
    `/coins/markets?vs_currency=${currency}&order=${order}&per_page=100&page=${page}&sparkline=false`,
    {
      order,
      page,
    }
  )

  const tHeads = [
    {
      label: '#',
      handleClick: () =>
        setOrder((prev) => (prev === 'id_desc' ? 'id_asc' : 'id_desc')),
    },
    {
      label: 'Coin',
      handleClick: () =>
        setOrder((prev) =>
          prev === 'market_cap_desc' ? 'market_cap_asc' : 'market_cap_desc'
        ),
    },
    {
      label: `Price ${currency.toUpperCase()}`,
    },
    {
      label: 'Price Change',
    },
    {
      label: '24h Volume',
      handleClick: () =>
        setOrder((prev) =>
          prev === 'volume_desc' ? 'volume_asc' : 'volume_desc'
        ),
    },
  ]

  return (
    <main className="py-8 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <div className="max-w-6xl min-h-screen mx-auto overflow-x-auto overflow-y-hidden w-11/12">
        <Search setQuery={setQuery} />
        <Table>
          <thead>
            <tr>
              {tHeads.map(({ label, handleClick }, i) => (
                <THead
                  key={i}
                  label={label}
                  index={i}
                  handleClick={handleClick}
                />
              ))}
            </tr>
          </thead>
          <SkeletonTheme
            baseColor={
              window &&
              window.matchMedia('(prefers-color-scheme: dark)').matches
                ? '#1e293b'
                : '#e2e8f0'
            }
            highlightColor={
              window &&
              window.matchMedia('(prefers-color-scheme: dark)').matches
                ? '#475569'
                : '#94a3b8'
            }
          >
            <tbody className="divide-gray-300 divide-y dark:divide-gray-800">
              {loading ? (
                [...Array(100)].map((_, i) => <Row loading={loading} key={i} />)
              ) : query ? (
                <TBody
                  data={data.filter(
                    (coin) => coin.id.toLowerCase().indexOf(query) > -1
                  )}
                  loading={loading}
                />
              ) : (
                <TBody data={data} loading={loading} />
              )}
            </tbody>
          </SkeletonTheme>
        </Table>
        {error && (
          <h2 className="font-bold text-3xl text-center ">
            Error {error.message}
          </h2>
        )}
        <Footer page={page} setPage={setPage} />
      </div>
    </main>
  )
}
