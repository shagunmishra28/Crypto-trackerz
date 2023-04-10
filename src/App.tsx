// Components
import { Tab } from '@headlessui/react'
import Layout from './components/Layout'
import MenuTabs from './components/MenuTabs'
import MenuPanels from './components/MenuPanels'

export default function App() {
  return (
    <Layout>
      <main className="mx-2">
        <h1 className="font-semibold text-2xl mb-4 text-center">
          Crypto Tracker
        </h1>

        <Tab.Group>
          <MenuTabs />
          <MenuPanels />
        </Tab.Group>
      </main>
    </Layout>
  )
}
