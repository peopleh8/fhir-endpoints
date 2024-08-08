import { FC } from 'react'
import { ReactComponent as GoogleIcon } from '../../../assets/icons/google.svg'

const GoogleButton: FC = () => {
  return (
    <button
      className='mt-9 flex items-center justify-center gap-2 w-full p-4 rounded-[16px] bg-social-login transition-colors hover:bg-social-login-hover'
      type='button'
    >
      <span className='icon w-5 h-5'>
        <GoogleIcon />
      </span>
      <span className='text-social-login-lg font-dmsans font-semibold text-main-title'>
        Sign in with Google
      </span>
    </button>
  )
}

export default GoogleButton
