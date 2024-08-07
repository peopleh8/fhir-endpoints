import { FC } from 'react'
import { Outlet } from 'react-router'
import AuthWrapper from '../components/AuthWrapper'
import AuthContent from '../components/AuthContent'

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
