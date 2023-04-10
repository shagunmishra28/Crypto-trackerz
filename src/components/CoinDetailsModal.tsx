// Components
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import CoinChart from './CoinChart'

// Types
import { Coin } from '../types/CoinTypes'

interface CoinDetailsModalProps {
  coin: Coin
  isOpen: boolean
  toggleModal: () => void
}

export default function CoinDetailsModal({
  coin,
  isOpen,
  toggleModal
}: CoinDetailsModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog className="relative z-50" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-950/25" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="grid min-h-full mx-2 place-items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex flex-col w-full max-w-4xl p-2 bg-white border rounded-md shadow-sm border-slate-200">
                <div className="flex justify-end">
                  <button
                    className="p-2 font-medium transition-opacity hover:opacity-60"
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                </div>

                <CoinChart data={coin.sparkline_in_7d.price} />
                <p>{coin.name}</p>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
