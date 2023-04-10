// Components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

// Context
import { useContext } from 'react'
import { CoinContext } from '../context/CoinProvider'

// Helpers
import getLast7DaysDates from '../helpers/getLast7DaysDates'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Last 7 days price'
    },
    tooltip: {
      displayColors: false,
      backgroundColor: 'rgba(15, 23, 42, 0.8)'
    }
  }
}

interface CoinChartProps {
  data: number[]
}

export default function CoinChart({ data }: CoinChartProps) {
  const { currency } = useContext(CoinContext)

  const config = {
    labels: getLast7DaysDates(),
    datasets: [
      {
        data,
        label: currency,
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgb(16, 185, 129)'
      }
    ]
  }

  return (
    <div className="self-center w-full max-w-2xl">
      <Line options={options} data={config} />
    </div>
  )
}
