import { FC } from 'react'
import PaginationBtn from './PaginationBtn'
import PaginationList from './PaginationList'

const Pagination: FC = () => {
  return (
    <div className='inline-flex w-fit gap-0.5 items-center bg-white rounded-lg px-1.5 py-3'>
      <PaginationBtn direction='left' />
      <PaginationList />
      <PaginationBtn direction='right' />
    </div>
  )
}

export default Pagination