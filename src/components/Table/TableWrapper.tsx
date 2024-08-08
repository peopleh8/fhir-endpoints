import { FC } from 'react'
import Table from './Table'
import TableBody from './TableBody'
import TableHead from './TableHead'
import Pagination from '../Pagination/Pagination'
// import Loader from '../UI/Loader/Loader'

const TableWrapper: FC = () => {
  return (
    <div className='flex flex-col gap-4 flex-1'>
      <div className='overflow-x-auto bg-white rounded-lg flex-1 relative'>
        {/* <Loader /> */}
        <Table>
          <TableBody />
          <TableHead />
        </Table>
      </div>
      <Pagination />
    </div>
  )
}

export default TableWrapper