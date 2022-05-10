import React from 'react'
import './App.css'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`
export default function App() {
  return <Wrapper>Hi guy,welcome to my site!</Wrapper>
}
