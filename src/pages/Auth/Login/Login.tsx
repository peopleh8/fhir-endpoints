import { FC } from 'react'
import MainTitle from '../../../components/UI/MainTitle'
import Dectiption from '../../../components/UI/Dectiption'
import GoogleButton from '../components/GoogleButton'
import Divider from '../components/Divider'
import SignInForm from '../components/SignInForm'

const Login: FC = () => {
  return (
    <div>
      <MainTitle 
        label='Sign In'
        extraClasses='mb-2'
      />
      <Dectiption>Enter your email and password to sign in!</Dectiption>
      <GoogleButton />
      <Divider />
      <SignInForm />
    </div>
  )
}

export default Login
