import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import BackTop from '../BackTop'
import Footer from '../Footer'
import Header from '../Header'

const LayoutWrapper = styled.div`
  background: #f3f7fd;
  width: 100%;
  height: 100%;
`
const OutletWrapper = styled.div`
  max-width: 1020px;
  height: 100%;
  min-height: calc(100vh - 60px);
  padding-bottom: 40px;
  margin: 0 auto;
`
const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: white;
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
