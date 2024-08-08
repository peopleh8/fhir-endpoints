import { FC } from 'react'

const Divider: FC = () => {
  return (
    <div className='my-6 text-center relative'>
      <span className='text-desc relative z-20 bg-white px-4 text-divider'>or</span>
      <span className='absolute left-0 top-1/2 transform translate-y-0.5 w-full h-[1px] bg-border' />
    </div>
  )
}

export default Divider