import React from 'react'
import styled from 'styled-components'
import SurportAndConnectWay from './SurportAndConnectWay'

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 12px;
  /* @media (max-width: 750px) {
    flex-direction: column;
  } */
`
const CopyrightWrapper = styled.div`
  /* width: 164px; */
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Light, PingFang SC;
  font-weight: 300;
  color: #3f3d55;
  line-height: 20px;
  text-align: center;
  margin: 14px 0 36px 0;
`
export default function Footer() {
  return (
    <FooterWrapper>
      <SurportAndConnectWay />
      <CopyrightWrapper>copyrright by one-thing-one-world</CopyrightWrapper>
    </FooterWrapper>
  )
}
