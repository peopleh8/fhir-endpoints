import { FC } from "react"
import { Outlet } from "react-router"

const NotFoundLayout: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default NotFoundLayout