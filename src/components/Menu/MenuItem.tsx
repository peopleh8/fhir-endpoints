import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as FileManagerIcon } from '../../assets/icons/file-manager.svg'

const MenuItem: FC = () => {
  return (
    <li>
      <NavLink to='/' className='group flex items-center gap-7'>
        <span className='icon w-6 h-6'>
          <FileManagerIcon className='group-hover:fill-primary fill-decor transition-colors duration-300' />
        </span>
        <span className='group-hover:text-primary text-menu-lg font-inter font-semibold transition-colors duration-300'>
          File management
        </span>
      </NavLink>
    </li>
  )
}

export default MenuItem
