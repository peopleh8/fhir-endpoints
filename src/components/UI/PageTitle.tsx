import { FC } from 'react'
import { TitleProps } from '../../types/common.types'
import classNames from 'classnames'

const PageTitle: FC<TitleProps> = ({ label, extraClasses }) => {
  const generalClasses = 'text-page-title-lg text-gray-400 font-poppins'
  const classes = classNames(generalClasses, extraClasses)
  
  return (
    <div className={classes}>{label}</div>
  )
}

export default PageTitle
