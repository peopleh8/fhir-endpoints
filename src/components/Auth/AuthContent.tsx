import { FC } from 'react'
import { ChildProps } from '../../types/common.types'
import classNames from 'classnames'

const AuthContent: FC<ChildProps> = ({ children }) => {
  const generalClasses = 'max-w-[410px] w-full'
  const classes = classNames(generalClasses)
  
  return (
    <div className={classes}>{children}</div>
  )
}

export default AuthContent