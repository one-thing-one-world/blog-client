import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from '../../assets/logo.jpg'
import NavComponent from './NavComponent'
import NavUserInfo from './NavUserInfo'

const imgRotate = keyframes`
/* 0% {
      transform: scale(90deg);
    }
    25% {
      transform: scale(180deg);
    }
    75% {
      transform: scale(270deg);
    }
    100% {
      transform: scale(360deg);
    } */
    from {
      transform: rotate(0deg);
     }

    to {
      transform: rotate(360deg);
    }

`
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

// const Fn = fn => {
//   const age = fn()
//   age += 1
//   return age
// }
