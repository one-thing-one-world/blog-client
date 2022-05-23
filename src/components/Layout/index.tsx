import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import BackTop from '../BackTop'
import Header from '../Header'

const OutletWrapper = styled.div`
  max-width: 200px;
  & > div {
    width: 100%;
    margin: 0 auto;
  }
`

export default function Layout() {
  return (
    <div>
      <BackTop>
        <Header />
      </BackTop>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </div>
  )
}
