import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as ChvronLeftIcon } from '../../assets/icons/chevron-left.svg'
import { ReactComponent as ChvronRightIcon } from '../../assets/icons/chevron-right.svg'

interface PaginationBtnProps {
  direction: 'left' | 'right'
}

const PaginationBtn: FC<PaginationBtnProps> = ({ direction }) => {
  return (
    <NavLink 
      to='#' 
      className='w-6 h-6 hover:*:text-primary'
    >
      { direction === 'left' 
        ? <ChvronLeftIcon className='transition-colors' /> 
        : <ChvronRightIcon className='transition-colors' />
      }
    </NavLink>
  )
}

export default PaginationBtn