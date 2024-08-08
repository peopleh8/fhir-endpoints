import { FC } from 'react'
import { FormProps } from '../../types/common.types'

const Form: FC<FormProps> = ({ children }) => {
  return (
    <form autoComplete='off'>{children}</form>
  )
}

export default Form