import { FC } from 'react'
import { ChildProps } from '../../types/common.types'
import classNames from 'classnames'

const PageContent: FC<ChildProps> = ({ children } ) => {
  const generalClasses = 'min-h-[100vh] px-[60px] pt-[68px] pb-[42px] flex flex-col'
  const classes = classNames(generalClasses)
  
  return (
    <div className={classes}>{children}</div>
  )
}

export default PageContent
