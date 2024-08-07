import { FC } from 'react'
import { PageProps } from '../types/common.types'
import classNames from 'classnames'

const AuthContent: FC<PageProps> = ({ children }) => {
  const generalClasses = 'max-w-[410px] w-full'
  const classes = classNames(generalClasses)
  
  return (
    <div className={classes}>{children}</div>
  )
}

export default AuthContent