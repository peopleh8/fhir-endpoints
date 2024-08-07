import { FC } from 'react'
import { Navigate, Outlet } from 'react-router'
import { RouteProps } from '../types/route.types'

const PublicRoute: FC<RouteProps> = ({ isAuth }) => {
  return !isAuth ? <Outlet /> : <Navigate to='/' />
}

export default PublicRoute
