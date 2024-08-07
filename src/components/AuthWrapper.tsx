import { FC } from 'react'
import { PageProps } from '../types/common.types'
import classNames from 'classnames'

const AuthWrapper: FC<PageProps> = ({ children }) => {
  const generalClasses = 'min-h-[100vh] flex items-center justify-center'
  const classes = classNames(generalClasses)
  
  return (
    <div className={classes}>{children}</div>
  )
}

export default AuthWrapper