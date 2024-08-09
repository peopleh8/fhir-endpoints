import { FC } from 'react'
import { ChildProps } from '../../types/common.types'
import classNames from 'classnames'

const AuthWrapper: FC<ChildProps> = ({ children }) => {
  const generalClasses = 'min-h-[100vh] flex items-center justify-center py-10 px-5'
  const classes = classNames(generalClasses)
  
  return (
    <div className={classes}>{children}</div>
  )
}

export default AuthWrapper