import React from 'react'
import styled from 'styled-components'
import SurportAndConnectWay from './SurportAndConnectWay'

const FooterWrapper = styled.div`
  width: 1020px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 16px;
`
const CopyrightWrapper = styled.div`
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Light, PingFang SC;
  font-weight: 300;
  color: #3f3d55;
  line-height: 20px;
  text-align: center;
  margin: 0px 0 36px 0;
`
export default function Footer() {
  return (
    <FooterWrapper>
      <SurportAndConnectWay />
      <CopyrightWrapper>copyright © by one-thing-one-world</CopyrightWrapper>
    </FooterWrapper>
  )
}
