import { FC } from 'react'
import { InputProps } from '../../types/common.types'

const Input: FC<InputProps> = ({ label, id, extraClasses, ...props }) => {
  return (
    <div className={`relative ${extraClasses}`}>
      { label && 
        <label 
          className='inline-block font-dmsans font-medium text-label mb-3'
          htmlFor={id}
        >
          {label}
          <span className='text-main-title font-dmsans font-medium text-label mb-3'>*</span>
        </label> 
      }
      <input
        className='block w-full h-full px-6 py-4 text-input-lg rounded-xl border border-solid border-border font-poppins transition-colors focus:border-primary'
        id={id}
        {...props}
      />
    </div>
  )
}

export default Input