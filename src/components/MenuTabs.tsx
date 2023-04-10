// Components
import { Tab } from '@headlessui/react'

// Context
import { useContext } from 'react'
import { CoinContext } from '../context/CoinProvider'

export default function MenuTabs() {
  const { data } = useContext(CoinContext)

  return (
    <Tab.List className="flex flex-col items-center w-full px-3 py-2 mx-auto bg-white rounded-md shadow-sm sm:items-stretch sm:flex-row sm:max-w-md justify-evenly sm:gap-2">
      {Object.keys(data).map((category) => (
        <Tab
          key={category}
          className="py-2 font-medium transition-colors border-b-2 border-white px-1.5 ui-selected:outline-none ui-selected:text-emerald-500 ui-selected:border-b-emerald-500"
        >
          {category}
        </Tab>
      ))}

      <Tab className="py-2 font-medium transition-colors border-b-2 border-white px-1.5 ui-selected:outline-none ui-selected:text-emerald-500 ui-selected:border-b-emerald-500">
        Search
      </Tab>
    </Tab.List>
  )
}
