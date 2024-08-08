import { FC } from 'react'
import { LinkProps } from '../../types/common.types'
import { NavLink } from 'react-router-dom'

const Link: FC<LinkProps> = ({ label, desc, href, isInternal = true, extraClasses }) => {
  return (
    <div className={`${extraClasses}`}>
      { desc && <span className='text-sm text-content-secondary'>{desc}</span> }
      { isInternal ? (
        <NavLink to={href} className="text-primary">{label}</NavLink>
      ) : (
        <a className='text-primary' href={href} target='_blank'>{label}</a>
      )}
    </div>
  )
}

export default Link
