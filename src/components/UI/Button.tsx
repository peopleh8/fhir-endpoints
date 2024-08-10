import { FC } from 'react'
import classNames from 'classnames'
import { ButtonProps, ButtonVariants } from '../../types/common.types'

const Button: FC<ButtonProps> = ({ 
  label, 
  variant = ButtonVariants.contained,
  onClick, 
  Icon, 
  extraClasses, 
  ...props 
}) => {
  const containedIconClasses = classNames(Icon && 'pl-9')


  if (variant === ButtonVariants.text) {
    return (
      <button
        className='group flex items-center gap-0.5'
        onClick={onClick}
        {...props}
      >
        { Icon && (
          <span className='block w-5 h-5'>
            <Icon className='text-primary transition-colors group-hover:text-primary-hover' />
          </span>
        ) }
        <span className='text-primary font-avenir text-base font-medium transition-colors group-hover:text-primary-hover'>{label}</span>
      </button>
    )
  }
  
  return (
    <button 
      className={`text-button-lg bg-primary rounded-lg py-2 px-5 flex items-center gap-5 relative disabled:bg-gray-400 transition-colors hover:bg-primary-hover ${containedIconClasses} ${extraClasses}`}
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