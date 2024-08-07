import classNames from 'classnames'
import { FC } from 'react'

const Sidebar: FC = () => {
  const generalClasses = 'w-[312px] h-full fixed top-0 left-0 z-50 bg-sidebar-bg border-r border-solid border-border px-[30px] pt-[103px] pb-6'
  const classes = classNames(generalClasses)
  
  return (
    <div className={classes}>Sidebar</div>
  )
}

export default Sidebar
