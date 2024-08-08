import { FC } from 'react'
import LoaderSpinner from './LoaderSpinner'
import LoaderText from './LoaderText'

const Loader: FC = () => {
  return (
    <div className='inline-flex flex-col gap-6 items-center text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <LoaderSpinner />
      <LoaderText />
    </div>
  )
}

export default Loader