import { FC } from 'react'
import LoaderSpinner from './LoaderSpinner'
import LoaderText from './LoaderText'

const Loader: FC = () => {
  return (
    <div>
      <LoaderSpinner />
      <LoaderText />
    </div>
  )
}

export default Loader