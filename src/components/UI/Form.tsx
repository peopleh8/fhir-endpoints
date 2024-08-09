import { Children, createElement, FC, isValidElement } from 'react'
import { useForm } from 'react-hook-form'
import { FormProps, FormValues } from '../../types/common.types'

const Form: FC<FormProps> = ({ children, onSubmit, extraClasses }) => {
  const { 
    handleSubmit, 
    register,
    formState: { errors },
  } = useForm<FormValues>()
  
  return (
    <form
      className={`${extraClasses}`}
      autoComplete='off'
      onSubmit={handleSubmit(onSubmit)}
    >
      { Children.map(children, (child) => {
        if (!isValidElement(child)) return child
        
        return child.props.name
          ? createElement(child.type, {
              ...{
                ...child.props,
                register,
                errors,
                key: child.props.name,
              },
            })
          : child
      }) }
    </form>
  )
}

export default Form