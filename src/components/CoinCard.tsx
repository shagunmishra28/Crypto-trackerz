// Types
import { Coin } from '../types/CoinTypes'

interface CoinCardProps {
  coin: Coin
}

export default function CoinCard({ coin }: CoinCardProps) {
  return (
    <div>
      <h1>{coin.name}</h1>
    </div>
  )
}
