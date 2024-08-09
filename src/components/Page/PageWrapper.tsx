import { FC } from 'react'
import { ChildProps } from '../../types/common.types'
import classNames from 'classnames'

const PageWrapper: FC<ChildProps> = ({ children }) => {
  const generalClasses = 'pl-[312px] min-h-[100vh] bg-content-bg'
  const classes = classNames(generalClasses)
  
  return (
    <div className={classes}>{children}</div>
  )
}

export default PageWrapper
