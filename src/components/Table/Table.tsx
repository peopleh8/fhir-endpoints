import { FC } from 'react'

interface TableProps {
  children: React.ReactNode
}

const Table: FC<TableProps> = ({ children }) => {
  return (
    <table className='w-full table-fixed'>
      {children}
    </table>
  )
}

export default Table