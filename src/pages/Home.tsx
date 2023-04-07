// Components

// Hooks
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

// Libs
import axios from 'axios'

// Types
import { Coin } from '../types/CoinTypes'

const MOCK_DATA: Coin[] = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 25621,
    market_cap: 494762171819,
    market_cap_rank: 1,
    fully_diluted_valuation: 537233693076,
    total_volume: 9889066059,
    high_24h: 25770,
    low_24h: 25488,
    price_change_24h: -74.38709250546526,
    price_change_percentage_24h: -0.28949,
    market_cap_change_24h: -2077034039.5253296,
    market_cap_change_percentage_24h: -0.41805,
    circulating_supply: 19339825,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 59717,
    ath_change_percentage: -57.16022,
    ath_date: '2021-11-10T14:24:11.849Z',
    atl: 51.3,
    atl_change_percentage: 49770.0872,
    atl_date: '2013-07-05T00:00:00.000Z',
    roi: null,
    last_updated: '2023-04-07T17:23:57.040Z'
  }
]

export default function Home() {
  const [coins, setCoins] = useState<Coin[]>([])
  const { isLoading, isError, error } = useQuery({
    queryKey: ['coins'],
    queryFn: () => axios.get('https://jsonplaceholder.typicode.com/todos'),
    onSuccess: (response) => {
      // setCoins(response.data)
      setCoins(MOCK_DATA)
    }
  })

  if (isLoading) return <div>Loading...</div>

  if (error instanceof Error) {
    if (isError) return <div>{error.message}</div>
  }

  return (
    <div>
      {coins.map((coin: Coin, index: number) => (
        <h1 key={index}>{coin.id}</h1>
      ))}
    </div>
  )
}
