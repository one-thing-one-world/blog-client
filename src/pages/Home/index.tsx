import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
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
  useEffect(() => {
    // window.history.replaceState()
    console.log(window.location, 'home')
  }, [])
  return (
    <Wrapper>
      <div
        aria-hidden="true"
        onClick={() => {
          navigate('/login')
        }}
      >
        got to login page
      </div>

      <div
        aria-hidden="true"
        onClick={() => {
          navigate('/metaphysics/sss')
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
