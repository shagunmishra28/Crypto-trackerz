// Components
import { Tab } from '@headlessui/react'
import List from './List'

// Context
import { useContext } from 'react'
import { CoinContext } from '../context/CoinProvider'

// Types
import { Coin } from '../types/CoinTypes'

export default function MenuPanels() {
  const { data, status } = useContext(CoinContext)

  return (
    <Tab.Panels>
      {Object.values(data).map((coins, index) => (
        <Tab.Panel key={index}>
          <List
            items={coins}
            render={(item: Coin) => <div key={item.id}>{item.name}</div>}
          />
        </Tab.Panel>
      ))}

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
