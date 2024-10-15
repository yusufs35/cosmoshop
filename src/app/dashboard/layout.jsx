import { DashboardMenu } from '@/components/dashboard-menu'
import React from 'react'
import { Container } from 'react-bootstrap'

const Layout = ({children}) => {
  return (
    <>
      <DashboardMenu/>
      <Container>{children}</Container>
    </>
  )
}

export default Layout