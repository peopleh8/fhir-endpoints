import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Auth/Login/Login'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'
import NotFoundLayout from '../layouts/NotFoundLayout'
import NotFound from '../pages/NotFound/NotFound'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

const isAuth = true

const Router: FC = () => {
  return (
    <Routes>
      <Route element={<PublicRoute isAuth={isAuth} />}>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='/auth/login' element={<Login />} />
        </Route>
      </Route>

      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Route>

      <Route path='*' element={<NotFoundLayout />}>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Router