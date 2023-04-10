// Components
import { Tab } from '@headlessui/react'
import List from './List'
import CoinCard from './CoinCard'
import TrendingCoinCard from './TrendingCoinCard'

// Context
import { useContext } from 'react'
import { CoinContext } from '../context/CoinProvider'

export default function MenuPanels() {
  const { data, status } = useContext(CoinContext)

  return (
    <Tab.Panels>
      <Tab.Panel className="grid gap-2 sm:max-w-md mx-auto">
        <List
          items={data.trending}
          render={(coin, index) => (
            <TrendingCoinCard key={coin.id} coin={coin} ranking={index! + 1} />
          )}
        />
      </Tab.Panel>

      <Tab.Panel className="grid sm:grid-cols-2 gap-2">
        <List
          items={data.coins}
          render={(coin) => <CoinCard key={coin.id} coin={coin} />}
        />
      </Tab.Panel>

      <Tab.Panel>
        <input type="text" className="border-2" />
        <List
          items={['MOCK']}
          render={(item, index) => <div key={index}>{item}</div>}
        />
      </Tab.Panel>
    </Tab.Panels>
  )
}
