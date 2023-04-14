// Components
import { Tab } from '@headlessui/react'
import List from './List'
import CoinCard from './CoinCard'
import TrendingCoinCard from './TrendingCoinCard'
import SearchCoinInput from './SearchCoinInput'
import LoadingSkeleton from './LoadingSkeleton'

// Context
import { useContext } from 'react'
import { CoinContext } from '../context/CoinProvider'

export default function MenuPanels() {
  const { data, status } = useContext(CoinContext)

  function refreshPage() {
    window.location.reload()
  }

  if (status === 'error')
    return (
      <div className="space-y-2 text-center">
        <div>Oops! Something went wrong...</div>
        <button
          onClick={refreshPage}
          className="px-2 py-1 font-medium transition-colors bg-white border rounded-md shadow-sm border-slate-200 hover:text-emerald-500"
        >
          Try Again
        </button>
      </div>
    )
  if (status === 'loading') return <LoadingSkeleton quantity={10} />

  return (
    <Tab.Panels>
      <Tab.Panel className="grid gap-2 mx-auto sm:max-w-md">
        <List
          items={data.trending}
          render={(coin, index) => (
            <TrendingCoinCard key={coin.id} coin={coin} ranking={index! + 1} />
          )}
        />
      </Tab.Panel>

      <Tab.Panel className="grid gap-2 mx-auto sm:max-w-md">
        <List
          items={data.coins}
          render={(coin) => <CoinCard key={coin.id} coin={coin} />}
        />
      </Tab.Panel>

      <Tab.Panel className="grid gap-2 mx-auto sm:max-w-md">
        <SearchCoinInput />

        <List
          items={data.coins}
          render={(coin) => <CoinCard key={coin.id} coin={coin} />}
        />
      </Tab.Panel>
    </Tab.Panels>
  )
}
