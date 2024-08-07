import { FC } from 'react'
import { Outlet } from 'react-router'
import PageWrapper from '../components/PageWrapper'
import Sidebar from '../components/Sidebar'
import PageContent from '../components/PageContent'

const MainLayout: FC = () => {
  return (
    <PageWrapper>
      <Sidebar />
      <PageContent>
        <Outlet />
      </PageContent>
    </PageWrapper>
  )
}

export default MainLayout
