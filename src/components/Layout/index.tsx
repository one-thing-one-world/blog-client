import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import BackTop from '../BackTop'
import Footer from '../Footer'
import Header from '../Header'

const OutletWrapper = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`
const FooterWrapper = styled(OutletWrapper)``
const LayoutWrapper = styled.div`
  background: #f3f7fd;
  width: 100%;
  height: 100%;
`
export default function Layout() {
  return (
    <LayoutWrapper>
      <BackTop>
        <Header />
      </BackTop>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </LayoutWrapper>
  )
}
