import { FC } from 'react'
import Input from '../../../components/UI/Input'
import Button from '../../../components/UI/Button'
import Form from '../../../components/UI/Form'
import Checkbox from '../../../components/UI/Checkbox'

const SignInForm: FC = () => {
  return (
    <Form>
      <Input
        label='Email'
        type='text'
        placeholder='mail@simmmple.com'
        id='email'
        extraClasses='mb-6'
      />
      <Input 
        label='Password'
        type='password'
        placeholder='Min. 8 characters'
        id='password'
      />
      <Checkbox
        id='save-password'
      />
      <Button 
        label='Sign In'
        type='submit'
        extraClasses='py-4 px-6 mt-8 w-full rounded-xl'
      />
    </Form>
  )
}

export default SignInForm