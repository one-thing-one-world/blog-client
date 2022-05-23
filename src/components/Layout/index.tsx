import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
// import { styled as muiStyled } from '@mui/material/styles'
import BackTop from '../BackTop'
import Header from '../Header'

// const Wrapper = muiStyled(BackTop)`
//   margin: 0 auto;
// `
const OutletWrapper = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`
export default function Layout() {
  return (
    <>
      <BackTop>
        <Header />
      </BackTop>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </>
  )
}
