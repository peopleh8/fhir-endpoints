import { FC, useState } from 'react'
import classNames from 'classnames'
import { CheckboxProps } from '../../types/common.types'
import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg'

const Checkbox: FC<CheckboxProps> = ({ id, label, extraClasses, ...props }) => {
  const [ isChecked, setChecked ] = useState<boolean>(false)

  const checkClasses = classNames(isChecked ? 'border-primary bg-primary' : 'border-border bg-transparent')
  const checkIconClasses = classNames(isChecked ? 'opacity-100' : 'opacity-0')

  const checkHandler = () => {
    setChecked(prev => !prev)
  }
  
  return (
    <div className={`overflow-hidden ${extraClasses}`}>
      <input 
        className='absolute -left-40'
        type='checkbox' 
        id={id}
        onChange={checkHandler}
        {...props}
      />
      <label 
        className='cursor-pointer inline-flex items-center gap-2.5'
        htmlFor={id}
      >
        <span className={`w-5 h-5 rounded-[3px] flex items-center justify-center border border-solid border-border transition-colors ${checkClasses}`}>
          <CheckIcon className={`w-[60%] text-white transition-opacity ${checkIconClasses}`} />
        </span>
        { label && (
          <span className='text-label text-main-title font-dmsans font-medium'>{label}</span>
        ) }
      </label>
    </div>
  )
}

export default Checkbox