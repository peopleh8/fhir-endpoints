import { FC } from 'react'
import { Navigate, Outlet } from 'react-router'
import { RouteProps } from '../types/route.types'

const PrivateRoute: FC<RouteProps> = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to='/auth/login' />
}

export default PrivateRoute