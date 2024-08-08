import { FC } from 'react'
import { DescProps } from '../../types/common.types'

const Dectiption: FC<DescProps> = ({ children, extraClasses }) => {
  return (
    <p className={`text-base font-dmsans text-desc ${extraClasses}`}>
      {children}
    </p>
  )
}

export default Dectiption