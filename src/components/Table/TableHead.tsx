import { FC } from 'react'

const TableHead: FC = () => {
  return (
    <thead>
      <tr>
        <th className='text-table-head-lg font-inter font-bold p-4 text-left'>Name</th>
        <th className='text-table-head-lg font-inter font-bold p-4 text-left'>Identifier</th>
        <th className='text-table-head-lg font-inter font-bold p-4 text-left'>Address</th>
        <th className='text-table-head-lg font-inter font-bold p-4 text-left'>Telecom</th>
        <th className='text-table-head-lg font-inter font-bold p-4 text-left'>Gender</th>
        <th className='text-table-head-lg font-inter font-bold p-4 text-left'>Birth Date</th>
        <th className='text-table-head-lg font-inter font-bold p-4 text-left'>Race</th>
        <th className='text-table-head-lg font-inter font-bold p-4 text-left'>Ethnicity</th>
        <th className='text-table-head-lg font-inter font-bold p-4 text-left'>Contact</th>
        <th className='text-table-head-lg font-inter font-bold p-4 text-left'>Managing Organization</th>
      </tr>
    </thead>
  )
}

export default TableHead
