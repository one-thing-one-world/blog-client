import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`
const SurportsWrapper = styled.div`
  width: 300px;
`
const SurportItemWrapper = styled.div`
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Light, PingFang SC;
  font-weight: 300;
  color: #3f3d55;
  line-height: 20px;
`

const ConnectWay = styled.div``

export default function SurportAndConnectWay() {
  return (
    <Wrapper>
      <SurportsWrapper>
        <SurportItemWrapper> Design by Mist</SurportItemWrapper>
        <SurportItemWrapper> Powerd by React</SurportItemWrapper>
        <SurportItemWrapper>
          Illustration by Icons 8 from Ouch!
        </SurportItemWrapper>
      </SurportsWrapper>
      <ConnectWay>QQ</ConnectWay>
    </Wrapper>
  )
}
