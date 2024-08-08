import { FC } from 'react'
import { Outlet } from 'react-router'
import AuthWrapper from '../components/Auth/AuthWrapper'
import AuthContent from '../components/Auth/AuthContent'

const AuthLayout: FC = () => {
  return (
    <AuthWrapper>
      <AuthContent>
        <Outlet />
      </AuthContent>
    </AuthWrapper>
  )
}

export default AuthLayout
