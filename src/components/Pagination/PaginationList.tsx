import { FC } from 'react'
import PaginationItem from './PaginationItem'

const PaginationList: FC = () => {
  return (
    <div className='flex gap-2'>
      <PaginationItem number={1} isActive />
      <PaginationItem number={2} />
      <PaginationItem number={3} />
      <PaginationItem number={4} />
      <PaginationItem isExtend />
      <PaginationItem number={31} />
    </div>
  )
}

export default PaginationList