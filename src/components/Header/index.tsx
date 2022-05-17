import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.jpg'
import NavComponent from './NavComponent'
import NavUserInfo from './NavUserInfo'

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const LogoWrapper = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50% 50%;
`

export default function Header() {
  return (
    <Wrapper>
      <LogoWrapper src={logo} />
      <NavComponent />
      <NavUserInfo />
    </Wrapper>
  )
}
