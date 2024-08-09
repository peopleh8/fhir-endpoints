import { FC } from 'react'
import { LinkProps } from '../../types/common.types'
import { NavLink } from 'react-router-dom'

const Link: FC<LinkProps> = ({ label, desc, href, isInternal = true, extraClasses }) => {
  return (
    <div className={`${extraClasses}`}>
      { desc && <span className='text-decor font-dmsans font-medium text-link'>{desc}&nbsp;</span> }
      { isInternal ? (
        <NavLink to={href} className='text-primary font-dmsans font-medium text-link hover:text-primary-hover'>{label}</NavLink>
      ) : (
        <a className='text-primary font-dmsans font-medium text-link hover:text-primary-hover' href={href} target='_blank'>{label}</a>
      )}
    </div>
  )
}

export default Link
