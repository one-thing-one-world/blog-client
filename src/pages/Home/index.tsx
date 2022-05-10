import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
  /* width: 100vw;
  height: 100vh; */
  /* background: skyblue; */
  font-size: 20px;
`

const GoldenWrapper = styled.div`
  background: #fffbf0;
  height: 150px;
  width: 100%;
`
const WoodWrapper = styled(GoldenWrapper)`
  background: #e8f5e9;
`

const WaterWrapper = styled(GoldenWrapper)`
  background: #e3f2fd;
`
const FlameWrapper = styled(GoldenWrapper)`
  background: #ffebee;
`
const SoilWrapper = styled(GoldenWrapper)`
  background: #fffde7;
`
export default function Home() {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <div
        aria-hidden="true"
        onClick={() => {
          localStorage.removeItem('isLogin')
        }}
      >
        clear
      </div>

      <div
        aria-hidden="true"
        onClick={() => {
          navigate('/metaphysics')
        }}
      >
        jump to metaphysics
      </div>
      <GoldenWrapper>金</GoldenWrapper>
      <WoodWrapper>木</WoodWrapper>
      <WaterWrapper>水</WaterWrapper>
      <FlameWrapper>火</FlameWrapper>
      <SoilWrapper> 土</SoilWrapper>
    </Wrapper>
  )
}
