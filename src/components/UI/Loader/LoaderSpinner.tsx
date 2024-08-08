import { FC } from 'react'
import spinner from '../../../assets/icons/spinner.svg'

const LoaderSpinner: FC = () => {
  return (
    <div className='icon loader w-[52px] h-[52px] rounded-full'>
      <img className='animate-spin select-none pointer-events-none' src={spinner} alt="" />
    </div>
  )
}

export default LoaderSpinner