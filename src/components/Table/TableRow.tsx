import { FC } from 'react'

const TableRow: FC = () => {
  return (
    <tr className='border-t border-solid border-border'>
      <td className='uppercase font-avenir font-bold text-table-body-lg py-2.5 px-4 align-top'>John Smith</td>
      <td className='uppercase font-avenir font-medium text-table-body-lg py-2.5 px-4 align-top'>123456</td>
      <td className='uppercase font-avenir font-medium text-table-body-lg py-2.5 px-4 align-top'>123 Main Street, Springfield, IL 62701</td>
      <td className='uppercase font-avenir font-medium text-table-body-lg py-2.5 px-4 align-top'>Tech City Telecom Billing</td>
      <td className='uppercase font-avenir font-medium text-table-body-lg py-2.5 px-4 align-top'>Male </td>
      <td className='uppercase font-avenir font-medium text-table-body-lg py-2.5 px-4 align-top'>January 15, 1985</td>
      <td className='uppercase font-avenir font-medium text-table-body-lg py-2.5 px-4 align-top'>African American</td>
      <td className='uppercase font-avenir font-medium text-table-body-lg py-2.5 px-4 align-top'>Hispanic</td>
      <td className='uppercase font-avenir font-medium text-table-body-lg py-2.5 px-4 align-top'>(555) 123-4567</td>
      <td className='uppercase font-avenir font-medium text-table-body-lg py-2.5 px-4 align-top'>Ventures Group</td>
    </tr>
  )
}

export default TableRow
