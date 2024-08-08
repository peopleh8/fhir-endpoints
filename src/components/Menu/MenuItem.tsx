import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as FileManagerIcon } from '../../assets/icons/file-manager.svg'

const MenuItem: FC = () => {
  return (
    <li>
      <NavLink to='#' className='flex items-center gap-7'>
        <span className='icon w-6 h-6'>
          <FileManagerIcon />
        </span>
        <span className='text-menu-lg font-inter font-semibold'>File management</span>
      </NavLink>
    </li>
  )
}

export default MenuItem
