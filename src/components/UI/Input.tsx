import { FC, useState } from 'react'
import classNames from 'classnames'
import { InputProps } from '../../types/common.types'
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg'

const Input: FC<InputProps> = ({ 
  register, 
  errors,
  isRequired,
  minLength,
  maxLength,
  label, 
  id, 
  type, 
  name, 
  extraClasses, 
  ...props 
}) => {
  const [ isPasswordVisible, setPasswordVisible ] = useState<boolean>(false)

  const activeVisibilityClasses = classNames(isPasswordVisible && 'fill-primary')
  const inputPasswordClasses = classNames(type === 'password' && 'pr-11')
  const labelErrorClasses = classNames(errors[name] && 'text-error')
  const inputErrorClasses = classNames(errors[name] && 'border-error focus:border-error text-error placeholder-error')
  const iconErrorClasses = classNames(errors[name] && 'fill-error hover:fill-error')

  const togglePsswordVisibilityHandler = () => {
    setPasswordVisible(prev => !prev)
  }

  return (
    <div className={`relative ${extraClasses}`}>
      { label && 
        <label 
          className={`inline-block font-dmsans font-medium text-label mb-3 transition-colors ${labelErrorClasses}`}
          htmlFor={id}
        >
          {label}
          <span className={`text-main-title font-dmsans font-medium text-label mb-3 transition-colors ${labelErrorClasses}`}>*</span>
        </label> 
      }
      <div className='relative'>
        <input
          className={`block w-full h-full px-6 py-4 text-input-lg rounded-xl border border-solid border-border font-poppins transition-colors focus:border-primary ${inputPasswordClasses} ${inputErrorClasses}`}
          id={id}
          type={type === 'password' && isPasswordVisible ? 'text' : type}
          {...register(name, { 
            required: isRequired,
            ...(type === 'email' && { pattern: { value: new RegExp(/\S+@\S+\.\S+/) } }),
            ...(minLength && { minLength: { value: minLength } }),
            ...(maxLength && { maxLength: { value: maxLength } }),
          })}
          {...props}
        />
        { type === 'password' && (
          <span 
            className='absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer'
            onClick={togglePsswordVisibilityHandler}
          >
            <EyeIcon 
              className={`fill-desc transition-colors hover:fill-primary duration-300 ${activeVisibilityClasses} ${iconErrorClasses}`}
            />
          </span>
        ) }
      </div>
    </div>
  )
}

export default Input