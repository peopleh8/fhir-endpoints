import { FC } from 'react'
import { CheckboxProps } from '../../types/common.types'
import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg'

const Checkbox: FC<CheckboxProps> = ({ extraClasses, id, ...props }) => {
  return (
    <div className={`overflow-hidden ${extraClasses}`}>
      <input 
        className='absolute -left-40'
        type='checkbox' 
        id={id}
        {...props}
      />
      <label 
        className='cursor-pointer inline-flex items-center gap-2.5'
        htmlFor={id}
      >
        <span className='w-5 h-5 rounded-[3px] bg-primary flex items-center justify-center'>
          <CheckIcon className='w-[60%] text-white' />
        </span>
        <span className='text-label text-main-title font-dmsans font-medium'>Keep me logged in</span>
      </label>
    </div>
  )
}

export default Checkbox