import { FC } from 'react'
import { Outlet } from 'react-router'
import PageWrapper from '../components/Page/PageWrapper'
import PageContent from '../components/Page/PageContent'
import Sidebar from '../components/Sidebar'

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
