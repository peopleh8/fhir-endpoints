import { FC } from 'react'
import Input from '../../../components/UI/Input'
import Button from '../../../components/UI/Button'
import Form from '../../../components/UI/Form'
import Checkbox from '../../../components/UI/Checkbox'
import Link from '../../../components/UI/Link'
import { useTypedDispatch } from '../../../hooks/use-typed-dispatch'
import { setAuth } from '../../../store/reducers/user.slice'
import { FormValues } from '../../../types/common.types'

const SignInForm: FC = () => {
  const dispatch = useTypedDispatch()

  const onSubmit = (data: FormValues) => dispatch(setAuth(data))

  return (
    <Form onSubmit={onSubmit}>
      <Input
        label='Email'
        type='email'
        placeholder='mail@simmmple.com'
        id='email'
        name='email'
        isRequired
        extraClasses='mb-6'
      />
      <Input 
        label='Password'
        type='password'
        placeholder='Min. 8 characters'
        isRequired
        minLength={8}
        name='password'
        id='password'
      />
      <div className='flex justify-between my-8'>
        <Checkbox
          id='save-password'
          label='Keep me logged in'
        />
        <Link
          label='Forget password?'
          href='#'
        />
      </div>
      <Button 
        label='Sign In'
        type='submit'
        extraClasses='py-4 px-6 mt-8 w-full rounded-xl'
      />
      <Link
        label='Create an Account'
        desc='Not registered yet?'
        extraClasses='mt-6'
        href='#'
      />
    </Form>
  )
}

export default SignInForm