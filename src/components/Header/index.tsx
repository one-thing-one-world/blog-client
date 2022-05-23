import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from '../../assets/logo.jpg'
import NavComponent from './NavComponent'
import NavUserInfo from './NavUserInfo'

const imgRotate = keyframes`
    from {
      transform: rotate(0deg);
     }
    to {
      transform: rotate(360deg);
    }

`
const Wrapper = styled.div`
  width: 1020px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  margin: 0 auto;
`
const LogoWrapper = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50% 50%;
  animation: ${imgRotate} 3s linear infinite;
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
