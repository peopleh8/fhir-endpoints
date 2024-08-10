import { FC } from 'react'
import Table from './Table'
import TableBody from './TableBody'
import TableHead from './TableHead'
import Pagination from '../Pagination/Pagination'
import Button from '../UI/Button'
import { ButtonVariants } from '../../types/common.types'
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg'
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg'
// import Loader from '../UI/Loader/Loader'

const TableWrapper: FC = () => {
  return (
    <div className='flex flex-col gap-4 flex-1'>
      <div className='flex flex-col flex-1 rounded-lg bg-white'>
        <div className='overflow-x-auto flex-1 relative'>
          {/* <Loader /> */}
          <Table>
            <TableBody />
            <TableHead />
          </Table>
        </div>
        <div className='mt-[50px] px-7 pb-7 flex gap-6 justify-between items-center'>
          <div className='flex gap-6'>
            <Button
              label='Download'
              variant={ButtonVariants.text}
              Icon={DownloadIcon}
              type='button'
            />
            <Button
              label='Delete'
              variant={ButtonVariants.text}
              Icon={TrashIcon}
              type='button'
            />
          </div>
          <Button
            label='Save'
            type='button'
            extraClasses='min-w-[106px]'
          />
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default TableWrapper