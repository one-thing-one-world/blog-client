import React from 'react'
import styled from 'styled-components'
import NavComponent from './NavComponent'
import NavUserInfo from './NavUserInfo'

const Wrapper = styled.div`
  width: 1020px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin: 0 auto;
`

export default function Header() {
  return (
    <Wrapper>
      <NavComponent />
      <NavUserInfo />
    </Wrapper>
  )
}
