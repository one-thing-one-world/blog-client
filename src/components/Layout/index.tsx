import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import BackTop from '../BackTop'
import Footer from '../Footer'
import Header from '../Header'
import { useAppSelector } from '../../hook/reduxHook'

interface ILayoutWrapper {
  color: string
}
const LayoutWrapper = styled.div<ILayoutWrapper>`
  background: ${({ color }) => color};
  width: 100%;
  height: 100%;
`
const OutletWrapper = styled.div`
  max-width: 1020px;
  height: 100%;
  min-height: calc(100vh - 60px);
  padding-bottom: 40px;
  margin: 0 auto;
  @media (max-width: 822px) {
    padding: 0 16px;
  }
`
const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: white;
`

export default function Layout() {
  const color = useAppSelector(state => state.userInfo.bgColor)

  useEffect(() => {
    console.log(color, 'color', window.location)
  }, [color])
  return (
    <LayoutWrapper color={color}>
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
