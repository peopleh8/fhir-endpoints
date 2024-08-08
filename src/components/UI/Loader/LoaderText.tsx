import { FC } from 'react'
import { ReactComponent as HomeIcon } from '../../../assets/icons/home.svg'

const LoaderText: FC = () => {
  return (
    <div className='flex items-center gap-1.5'>
      <span className='icon icon--dark w-5 h-5'>
        <HomeIcon />
      </span>
      <span className='font-dmsans font-bold'>We are comparing  your addresses</span>
    </div>
  )
}

export default LoaderText