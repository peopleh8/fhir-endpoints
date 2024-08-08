import classNames from 'classnames'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface PaginationItemProps {
  number?: number
  isActive?: boolean,
  isExtend?: boolean
}

const PaginationItem: FC<PaginationItemProps> = ({ number, isActive, isExtend }) => {
  const isActiveClasses = isActive && 'bg-primary !text-white'
  const logicClasses = classNames(isActiveClasses)
  
  return (
    <div>
      { !isExtend ? (
        <NavLink 
          to='#' 
          className={`flex justify-center rounded-full items-center text-center font-inter text-pagitation-lg font-bold w-7 h-7 transition-colors hover:text-primary ${logicClasses}`}
        >
          {number}
        </NavLink>
      ) : (
        <span 
          className='flex justify-center rounded-full items-center text-center font-inter text-pagitation-lg font-bold w-7 h-7'
        >
          ...
        </span>
      ) }
    </div>
    
  )
}

export default PaginationItem