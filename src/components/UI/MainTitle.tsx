import { FC } from 'react'
import { TitleProps } from '../../types/common.types'

const MainTitle: FC<TitleProps> = ({ label, extraClasses }) => {
  return (
    <div className={`text-main-title-lg font-dmsans font-bold text-main-title ${extraClasses}`}>
      {label}
    </div>
  )
}

export default MainTitle