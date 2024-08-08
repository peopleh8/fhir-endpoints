import { FC } from 'react'
import { ButtonProps } from '../../types/common.types'
import classNames from 'classnames'

const Button: FC<ButtonProps> = ({ label, onClick, extraClasses, Icon, ...props }) => {
  const isIcon = Icon && 'pl-9'
  const logicClasses = classNames(isIcon)
  
  return (
    <button 
      className={`text-button-lg bg-primary rounded-lg py-2 px-5 flex items-center gap-5 relative disabled:bg-gray-400 transition-colors hover:bg-primary-hover ${logicClasses} ${extraClasses}`}
      onClick={onClick}
      {...props}
    >
      { Icon && ( 
       <span 
          className='icon w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 next:pl-10'
        >
          <Icon />
        </span> 
      )}
      <span 
        className='text-white font-poppins text-button-lg flex-1 text-center'
      >
        {label}
      </span>
    </button>
  )
}

export default Button