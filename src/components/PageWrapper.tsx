import { FC } from 'react'
import { PageProps } from '../types/common.types'
import classNames from 'classnames'

const PageWrapper: FC<PageProps> = ({ children }) => {
  const generalClasses = 'pl-[312px] min-h-[100vh]'
  const classes = classNames(generalClasses)
  
  return (
    <div className={classes}>{children}</div>
  )
}

export default PageWrapper
